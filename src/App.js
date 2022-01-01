import styled from "styled-components";
import Colors from "./assets/Colors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./assets/components/pages/HomePage";
import CartPage from "./assets/components/pages/CartPage";
import { createContext, useState } from "react";

export const CartContext = createContext(null);

const AppEl = styled.div`
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

function App() {
  // KEY VALYE
  // Cart {Total:20,Items:[]}
  let cartInit = JSON.parse(localStorage.getItem("Cart"));
  if (!cartInit) {
    const _initState = JSON.stringify({ Total: 0, Items: [] });
    cartInit = _initState;
    localStorage.setItem("Cart", _initState);
  }

  const [Cart, SetCart] = useState({
    Items: cartInit.Items || [],
    Total: cartInit.Total || 0,
  });

  return (
    <Router>
      <CartContext.Provider value={{ Cart, SetCart }}>
        <AppEl>
          <Routes>
            <Route exact path="/cart" element={<CartPage />} />
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </AppEl>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
