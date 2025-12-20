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
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Heros />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Product_01 />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Product_02 />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Product_03 />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Product_04 />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Product_05 />
      </Suspense>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
