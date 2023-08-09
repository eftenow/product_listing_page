const sortData = (data, option) => {
    switch (option) {
      case 'Alphabetical A-Z':
        return [...data].sort((a, b) => a.title.localeCompare(b.title));
      case 'Alphabetical Z-A':
        return [...data].sort((a, b) => b.title.localeCompare(a.title));
      case 'Price Ascending':
        return [...data].sort((a, b) => a.newPrice - b.newPrice);
      case 'Price Descending':
        return [...data].sort((a, b) => b.newPrice - a.newPrice);
      default:
        return data;
    }
  };
  
  export default sortData;
  