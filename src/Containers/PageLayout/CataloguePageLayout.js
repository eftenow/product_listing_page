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
  const [isSideBarVisible, setSidebarVisible] = useState(false);
  const filteredAndSortedData = sortData(filteredData, sortOption);

  const toggleSidebar = () => {
    setSidebarVisible(!isSideBarVisible);
  };


  return (
    <main>
      <Sidebar
        filterValues={filterValues}
        setFilterValues={setFilterValues}
        isSideBarVisible={isSideBarVisible}
        closeSidebar={toggleSidebar}
      />

      <div className="main-content">
        <SortSection
          onCategoryChange={onCategoryChange}
          selectedCategory={selectedCategory}
          onSortOptionChange={setSortOption}
          toggleSidebar={toggleSidebar}
          sortOption={sortOption}
        />
        
        <Products data={filteredAndSortedData} />
      </div>


    </main>

  );
};

export default CataloguePageLayout;