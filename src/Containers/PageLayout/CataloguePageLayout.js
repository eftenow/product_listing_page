import useFilters from "../../hooks/Filter";
import Navigation from "../Header/Navigation/Navigation";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import './CataloguePageLayout.css'

const CataloguePageLayout = ({ data, selectedCategory, onCategoryChange }) => {
  const [filteredData, filterValues, setFilterValues] = useFilters(data, selectedCategory);
  
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