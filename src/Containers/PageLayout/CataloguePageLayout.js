import Header from "../Header/Header";
import Navigation from "../Header/Navigation/Navigation";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import './CataloguePageLayout.css'

const CataloguePageLayout = () => {
    return (
        <>
            <Sidebar />
            <Navigation />
            <Products />
        </>

    );
};

export default CataloguePageLayout;