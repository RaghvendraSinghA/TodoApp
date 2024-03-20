import FoodItems from "./components/FoodItems.jsx"
import ErrorMessage from "./components/ErrorMessage.jsx"
import Container from './components/Container.jsx'
import FoodInput from './components/FoodInput.jsx'
import { useState } from 'react'
function App() {

  let [foodItems, setFood] = useState(['Daal', 'Chawal']);

  const handleOnChange = (event) => {
    if (event.key === 'Enter') {
      const a = event.target.value;
      event.target.value = '';
      const newList = [...foodItems, a];
      setFood(newList);
    }
  }

  return (
    <>
      <Container>
        <h1 style={{ color: 'Orange' }}> Healthy Food</h1>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
    </>
  )
}

export default App
