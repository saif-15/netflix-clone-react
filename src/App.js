import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Banner from "./components/Banner";
import Homescreen from "./Homescreen";

export default function App() {
  return (
    <div className="app">
     <Homescreen/>
    </div>
  );
}
