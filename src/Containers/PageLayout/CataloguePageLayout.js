import { useState } from "react";
import Header from "../Header/Header";
import Navigation from "../Header/Navigation/Navigation";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import './CataloguePageLayout.css'




const CataloguePageLayout = ({ data, selectedCategory, onCategoryChange }) => {
  const [filterValues, setFilterValues] = useState({
    audience: "",
    price: "",
    colors: "",
    brand: "",
    use: "",
    rating: "",
  });
  console.log(filterValues);

  const filteredData = data
    .filter(item => {
      if (selectedCategory.toLowerCase() === 'all') return true;
      return item.category.toLowerCase() === selectedCategory.toLowerCase();
    })
    .filter(item => {
      if (!filterValues.audience) return true;
      return item.gender === filterValues.audience;
    })
    .filter(item => {
      if (!filterValues.price) return true;
      return item.price <= filterValues.price;
    })
    .filter(item => {
      if (!filterValues.colors) return true;
      return item.colors.includes(filterValues.colors);
    })
    .filter(item => {
      if (!filterValues.brand) return true;
      return item.brand === filterValues.brand;
    })
    .filter(item => {
      if (!filterValues.use) return true;
      return item.use === filterValues.use;
    })
    .filter(item => {
      if (!filterValues.rating) return true;
      return item.rating >= filterValues.rating;
    });

    console.log(filteredData);


  return (
    <>
      <Navigation onCategoryChange={onCategoryChange} selectedCategory={selectedCategory} />
      <main>
        <Sidebar filterValues={filterValues} setFilterValues={setFilterValues} />
        <Products data={filteredData} />
      </main>
    </>
  );
};

export default CataloguePageLayout;
