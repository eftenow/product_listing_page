import { useState } from "react";
import Header from "../Header/Header";
import Navigation from "../Header/Navigation/Navigation";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import './CataloguePageLayout.css'




const CataloguePageLayout = ({ data, selectedCategory, onCategoryChange }) => {
  const filteredData = data.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <>
      <Navigation onCategoryChange={onCategoryChange} selectedCategory={selectedCategory} />
      <main>
        <Sidebar />
        <Products data={filteredData} />
      </main>
    </>
  );
};

export default CataloguePageLayout;
