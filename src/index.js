import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const open = 8;
const close = 21;
const hour = new Date().getHours();
const isOpen = hour >= open && hour <= close;

// if (hour >= open && hour <= close) alert("We're open !!");
// else alert("We're closed !!");

function App() {
  return (
    <main className="menu">
      <Header />
      <h2> Our Menu</h2>
      <Menu />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Pizza and Co.</h1>
    </header>
  );

  // inline style
  // return <h1 style={{ color: "red" }}>Pizza and Co.</h1>;
}

function Menu() {
  return (
    <div className="menu">
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={10}
        photoName="pizzas/margherita.jpg"
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={12}
        photoName="pizzas/prosciutto.jpg"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleDateString()}We're open !!
    </footer>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <h3>{props.ingredients}</h3>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
