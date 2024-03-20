import Item from './Item.jsx'
import { useState } from 'react'
const FoodItems = ({ foodItems }) => {
    let [clickedItems, setClicked] = useState([]);

    const rams = (items) => {
        const a = [...clickedItems, items];
        setClicked(a);
    }
    return (
        <>
            <ul className="list-group ram">
                {foodItems.map((items) =>
                    <Item key={items} items={items} bought={clickedItems.includes(items)} ram={() =>
                        rams(items)
                    }>
                    </Item>)}
            </ul>
        </>
    )

}
export default FoodItems;