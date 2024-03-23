import logo from "./logo.svg";
import "./App.css";
import { priceMoreThan6000, sortByHighPrice } from "./func/sortData";

function App() {
  const products = [
    { id: 1, product: "Laptop", price: 7200 },
    { id: 2, product: "Headphones", price: 6000 },
    { id: 3, product: "Mouse", price: 2000 },
    { id: 4, product: "keyboard", price: 4200 },
    { id: 5, product: "desktop", price: 10800 },
  ];

  console.log(sortByHighPrice(products));
  console.log(priceMoreThan6000(products));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
