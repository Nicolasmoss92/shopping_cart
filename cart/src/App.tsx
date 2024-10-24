import Card from "./components/layout/card/Card";
import Header from "./components/Header/index";
import SubHeader from "./components/layout/checkOut/Header";
import ProductItem from "./components/layout/checkOut/ProductItem";
import CheckoutSummary from "./components/layout/checkOut/CheckoutSummary";
import CheckoutPage from "./pages/CheckOutPage";
import ListItensPage from "./pages/ListItensPage";
import Button from "./components/button/Button";
import CardButton from "./components/layout/card/CardButton";
import CardGridPage from "./pages/ListItensPage";
import CheckoutButton from "./components/layout/checkOut/CheckOutButton";
import { CartProvider } from "./contexts/cartContext";
import { AppRoutes } from "./application/router";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </div>
  );
}

export default App;
