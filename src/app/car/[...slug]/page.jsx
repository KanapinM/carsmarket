'use client';
import React from 'react';
import { useParams } from "next/navigation";

import Image from 'next/image'
import logoBuild from '../../../images/icons-build.svg'
import logoEng from '../../../images/icons-eng.svg'
import logoShift from '../../../images/icons-shift.svg'
import logoSafety from '../../../images/label.svg'
import Swiper from '../../../../components/Swiper/Swiper';
import Promo from '../../../../components/Promo/Promo';

export default function Car() {
    const [auto, setAuto] = React.useState({});

    React.useEffect(() => {
        if (auto == undefined) {
            console.log(1);
            return
        }
        chooseAuto(brand);
        console.log(2);
    }, [])

    const params = useParams();
    console.log(params.slug.split('/'));
    let brand = params.slug.split('/')[0];
    let carId = params.slug.split('/')[1];
    console.log(auto);

    function chooseAuto(brand) {
        return fetch(`${'https://maximum.expert/api/stock-test?brand=' + brand}`)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    response.json().then(function (data) {
                        data.list.map(function (el) {
                            if (el._id == carId) {
                                setAuto(el);
                            }
                        }
                        )

                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }

    return (

        <main className="car">
            <div className='information'>
                {(auto.feedData == undefined)
                    ?
                    <p>Загрузка данных о Вашем {brand}</p>
                    : <>
                        <h2 className="car__title">
                            {brand} {auto.feedData.modelName} {auto.feedData.modelYear} года
                        </h2>
                        <p className="car__vin">vin {auto.feedData.vin}</p>
                        <section className="car__container">
                            <div className="offer">
                                <span className="car__price">
                                    {auto.feedData.autoPrice.toLocaleString()}
                                    <span className='car__price_ru'>₽</span>
                                </span>
                                <p className="car__virgs">
                                    <Image src={logoSafety} width={39} height={42} alt="лого КПП" className="car__logo-safety" />
                                    Гарантия юр. чистоты
                                </p>
                                <div className="specs">
                                    <h3 className="car__specs-title">Характеристики</h3>
                                    <ul className="specs__list">
                                        <li className="car__charact">
                                            <Image src={logoBuild} width={90} height={90} alt="лого построения" className="car__logo" />
                                            {auto.feedData.modelYear} год выпуска
                                        </li>
                                        <li className="car__charact">
                                            <Image src={logoEng} width={90} height={90} alt="лого ДВС" className="car__logo" />
                                            {(auto.feedData.equipmentVariantEngineCapacity / 1000).toString().replace(/\./g, ',')} л / {auto.feedData.equipmentVariantEnginePower} л.с / {auto.feedData.equipmentVariantFuelType}
                                        </li>
                                        <li className="car__charact">
                                            <Image src={logoShift} width={90} height={90} alt="лого КПП" className="car__logo" />
                                            КП - {auto.feedData.equipmentVariantTransmissionType}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <Swiper className="slider" auto={auto} />
                        </section>
                    </>
                }
            </div>
            <Promo />

        </main>
    )
}