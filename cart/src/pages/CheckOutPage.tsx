import Header from "../components/Header";
import CheckoutButton from "../components/layout/checkOut/CheckOutButton";
import CheckoutSummary from "../components/layout/checkOut/CheckoutSummary";
import SubHeader from "../components/layout/checkOut/Header";
import ProductItem from "../components/layout/checkOut/ProductItem";
import { ProductWrapper, QuantityControl } from "../components/layout/checkOut/ProductItem/styles";
import { MainContainerItensPage, PageWrapper } from "../styles/globalStyles";

const CheckoutPage: React.FC = () => {
    return (
        <div>
            <PageWrapper>
                <Header />
                <MainContainerItensPage>
                    <SubHeader />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <CheckoutButton />
                </MainContainerItensPage>
            </PageWrapper>
        </div>
    );
};

export default CheckoutPage;