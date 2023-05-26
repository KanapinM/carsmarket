import marks from '../../src/utils/constants'

export default function FilterProducts() {


    const listItems = marks.map((number) =>
        <button>{number}</button>
    );

    return listItems;
}
