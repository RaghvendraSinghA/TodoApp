import styles from './FoodInput.module.css'
const FoodInput = ({ handleOnChange }) => {

    return (
        <>
            <input type="text" placeholder='Enter Food Item' className={styles.foodInput} onKeyDown={handleOnChange} />
        </>
    )
}
export default FoodInput;