import Image from 'next/image'
import creditImg from '../../src/images/credit.png'

export default function Promo() {
    return (
        <section className="promo">
            <div className="credit">
                <h2 className="promo__title">Кредит на новый Chery Tiggo</h2>
                <p className="promo__text">Оформите кредит на любой автомобиль ассортимента дилерского центра «Максимум»</p>
                <button className="promo__button">Оформить</button>
            </div>
            <Image src={creditImg} width={1862} height={899} alt="лого КПП" className="promo__image" />

        </section>
    )
}