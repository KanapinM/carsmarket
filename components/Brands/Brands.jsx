import { marks } from "../../src/utils/constants";

function Brands(props) {

    return (
        <section className="brands">
            <h3 className="brands__title">Бренд</h3>
            <div className='brands__container'>
                {marks.map((item) => {
                    return (
                        <button className="brand" onClick={props.handleBrandChoose} >{item}</button>
                    );
                })}
            </div>
        </section>
    );
}

export default Brands;