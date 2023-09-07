import './App.css'

// Product

/*
 * Garlic
 * Bread
 * Milk
 * Eggs
 * ...
 */

// What is a product?
// - name
// - price
// - image
// => PROPS

// What is a props ?
// It is a data structure that is passed from a parent component to a child component
// A props comes from the outside

type ProductProps = {
  name: string
  price: number
  image?: string
}
function Product(props: ProductProps) {
  console.log(JSON.stringify(props));
  return (
    <div className="Product">
      <img
        className="Product__image"
        src="https://media.istockphoto.com/id/499147864/fr/photo/lail.jpg?s=612x612&w=0&k=20&c=R6hgKd2x0EivT_N_mc2o852bKR8DP70SIMzZ1nSY2xA=" alt=""
      />
      <div className="Product__details">
        <h2>{props.name}</h2>
        <p>Price: {props.price}€</p>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

// Cart

// ProductsList

function App() {

  return (
    <div>
      <h1>Supercart</h1>
      <Product name={"Garlic"} price={1.99}/>
      <Product name={"Bread"} price={2.99}/>
      <Product name={"Milk"} price={3.99}/>
    </div>
  )
}

export default App
