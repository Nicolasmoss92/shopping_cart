import Header from "../components/Header";
import CheckoutSummary from "../components/layout/checkOut/CheckoutSummary";
import SubHeader from "../components/layout/checkOut/Header";
import ProductItem from "../components/layout/checkOut/ProductItem";
import { useCart } from "../hooks/useCart";
import { MainContainerItensPage, PageWrapper } from "../styles/globalStyles";
import { Product } from "../types/product/productTypes";

const CheckoutPage: React.FC = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const handleIncrease = (product: Product) => {
    addToCart(product);
  };

  const handleDecrease = (product: Product) => {
    removeFromCart(product);
  };

  return (
    <div>
      <PageWrapper>
        <Header />
        <MainContainerItensPage>
          <SubHeader />
          {cart.length > 0 && cart.map((product) => (
            <ProductItem
              key={product.id}
              image={product.imageUrl}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              onIncrease={() => handleIncrease(product)}
              onDecrease={() => handleDecrease(product)}
            />
          ))}
          <CheckoutSummary />
        </MainContainerItensPage>
      </PageWrapper>
    </div>
  );
};

export default CheckoutPage;