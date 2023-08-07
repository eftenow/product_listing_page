import { useState } from "react";
import Header from "./Containers/Header/Header";
import  data  from './assets/ProjectData/data.js'; 
import CataloguePageLayout from "./Containers/PageLayout/CataloguePageLayout";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Sneakers');
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Header />
      <CataloguePageLayout 
        data={data} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange}
      />
    </>
  );
}

export default App;


