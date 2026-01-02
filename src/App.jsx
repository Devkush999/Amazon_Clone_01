import React, { Suspense } from "react";

const Header = React.lazy(() => import("./Components/Header"));
const Navbar = React.lazy(() => import("./Components/Navbar"));
const Heros = React.lazy(() => import("./Components/Heros"));
const Product_01 = React.lazy(() => import("./Components/Product_01"));
const Product_02 = React.lazy(() => import("./Components/Product_02"));
const Product_03 = React.lazy(() => import("./Components/Product_03"));
const Product_04 = React.lazy(() => import("./Components/Product_04"));
const Product_05 = React.lazy(() => import("./Components/Product_05"));
const Footer = React.lazy(() => import("./Components/Footer"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Header />
      <Navbar />
      <Heros />
      <Product_01 />
      <Product_02 />
      <Product_03 />
      <Product_04 />
      <Product_05 />
      <Footer />
    </Suspense>
  );
}

export default App;
