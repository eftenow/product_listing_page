const getPrice = (item) => {
  return item.newPrice !== null && item.newPrice !== undefined ? item.newPrice : item.prevPrice;
};

const getDiscountPercentage = (item) => {
  if(item.newPrice === null || item.newPrice === undefined) {
    return 0;
  }
  return ((item.prevPrice - item.newPrice) / item.prevPrice) * 100;
};

const sortData = (data, option) => {
  switch (option) {
    case 'Alphabetical A-Z':
      return [...data].sort((a, b) => a.title.localeCompare(b.title));
    case 'Alphabetical Z-A':
      return [...data].sort((a, b) => b.title.localeCompare(a.title));
    case 'Price Ascending':
      return [...data].sort((a, b) => getPrice(a) - getPrice(b));
    case 'Price Descending':
      return [...data].sort((a, b) => getPrice(b) - getPrice(a));
    case 'Discount Descending':
      return [...data].sort((a, b) => getDiscountPercentage(b) - getDiscountPercentage(a));
    default:
      return data;
  }
};

export default sortData;
