
import Link from 'next/link'
import Image from 'next/image'

import cardImg from '../../src/images/img.svg'

function Card(props) {

    let carLink = 'car' + '/' + props.card.feedData.brandName + '/' + props.card._id;
    let brandName = props.card.feedData.brandName;
    let model = props.card.feedData.modelName;
    let equipment = props.card.feedData.equipmentName;
    let transmission = props.card.feedData.equipmentVariantTransmission;
    let engineCapacity = (props.card.feedData.equipmentVariantEngineCapacity / 1000).toString().replace(/\./g, ',');
    let enginePower = props.card.feedData.equipmentVariantEnginePower;
    let variantTransmission = props.card.feedData.equipmentVariantTransmission;
    let img = props.card.photobank.imgs[0].urlThumb;

    return (
        <Link href="/car/[...slug]" as={carLink} className="card" key={props.card._id}>
            <Image src={img} width={440} height={292} alt="фото автомобиля" className="card__image" />
            <h4 className="card__title">
                {brandName + ' ' + model + ' ' + equipment + ' ' + transmission}
            </h4>
            <p className="card__spec">{engineCapacity + ' / ' + enginePower + ' Л.С. / ' + variantTransmission}</p>
            <button className="card__button">Подробнее</button>
        </Link>
    );
}

export default Card;