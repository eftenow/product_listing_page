import { useState } from "react";
import useFilters from "../../hooks/Filter";
import sortData from "../../utils/sortData";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import './CataloguePageLayout.css'
import SortSection from "../Header/SortSection/SortSection";

const CataloguePageLayout = ({ data, selectedCategory, onCategoryChange }) => {
  const [sortOption, setSortOption] = useState('Alphabetical A-Z');
  const [filteredData, filterValues, setFilterValues] = useFilters(data, selectedCategory);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const filteredAndSortedData = sortData(filteredData, sortOption);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };


  return (
    <main>
      <Sidebar
        filterValues={filterValues}
        setFilterValues={setFilterValues}
        isSidebarVisible={isSidebarVisible}
        closeSidebar={toggleSidebar}
      />

      <div className="main-content">
        <SortSection
          onCategoryChange={onCategoryChange}
          selectedCategory={selectedCategory}
          onSortOptionChange={setSortOption}
          toggleSidebar={toggleSidebar}
        />
        
        <Products data={filteredAndSortedData} />
      </div>


    </main>

  );
};

export default CataloguePageLayout;