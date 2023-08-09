import { useState } from "react";
import useFilters from "../../hooks/Filter";
import sortData from "../../utils/sortData";
import Navigation from "../Header/Navigation/Navigation";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import './CataloguePageLayout.css'

const CataloguePageLayout = ({ data, selectedCategory, onCategoryChange }) => {
  const [sortOption, setSortOption] = useState('Alphabetical A-Z');
  const [filteredData, filterValues, setFilterValues] = useFilters(data, selectedCategory);
  
  const filteredAndSortedData = sortData(filteredData, sortOption);

  return (
    <>
      <Navigation 
          onCategoryChange={onCategoryChange} 
          selectedCategory={selectedCategory} 
          onSortOptionChange={setSortOption}
      />
      <main>
        <Sidebar filterValues={filterValues} setFilterValues={setFilterValues} />
        <Products data={filteredAndSortedData} />
      </main>
    </>
  );
};

export default CataloguePageLayout;