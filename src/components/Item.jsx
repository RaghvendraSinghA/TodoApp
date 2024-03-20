import styles from './Item.module.css'
const Item = ({ items, ram, bought }) => {

    return (
        <>
            <li className={`list-group-item ${bought && 'active'}`}>{items} <button onClick={ram} className={`${styles.btn} btn btn-success`}>Buy</button></li>
        </>
    )
}
export default Item;