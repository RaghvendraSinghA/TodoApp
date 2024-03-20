const ErrorMessage = ({ foodItems }) => {
    return (
        <>
            {foodItems.length === 0 && <h2>List is Empty</h2>}
        </>
    )
}
export default ErrorMessage;