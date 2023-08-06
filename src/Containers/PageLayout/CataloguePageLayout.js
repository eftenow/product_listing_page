import { useState } from "react";
import Header from "../Header/Header";
import Navigation from "../Header/Navigation/Navigation";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import './CataloguePageLayout.css'
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import ProjectData from "../../assets/ProjectData/data.js";



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