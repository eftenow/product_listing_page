import { useState } from 'react';

const useLoadMore = (initialProducts, itemsPerPage) => {
  const [page, setPage] = useState(1);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const showLess = () => {
    setPage(1);  
  };

  const currentItems = initialProducts.slice(0, page * itemsPerPage);
  
  const allItemsLoaded = currentItems.length === initialProducts.length;

  return [currentItems, loadMore, allItemsLoaded, showLess]; 
};

export default useLoadMore;
