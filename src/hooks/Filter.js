import { useState } from 'react';

const useFilters = (initialData, selectedCategory) => {
    const [filterValues, setFilterValues] = useState({
        gender: { value: "", active: false },
        price: { value: "", active: false },
        color: { value: "", active: false },
        brand: { value: "", active: false },
        use: { value: "", active: false },
        rating: { value: "", active: false },
    });

    const filteredData = initialData.filter(item => {
        if (selectedCategory.toLowerCase() !== 'all' && item.category.toLowerCase() !== selectedCategory.toLowerCase()) {
            return false;
        }

        if (filterValues.gender.active && item.gender !== filterValues.gender.value) {
            return false;
        }

        const actualPrice = item.newPrice || item.prevPrice;

        if (filterValues.price.active) {
            switch (filterValues.price.value) {
                case 200:
                    if (actualPrice <= 150) return false;
                    break;
                case 150:
                    if (actualPrice <= 100 || actualPrice > 150) return false;
                    break;
                case 100:
                    if (actualPrice <= 50 || actualPrice > 100) return false;
                    break;
                case 50:
                    if (actualPrice > 50) return false;
                    break;
                default:
                    break;
            }
        }

        if (filterValues.color.active && !item.color.includes(filterValues.color.value)) {
            return false;
        }

        if (filterValues.brand.active && item.brand !== filterValues.brand.value) {
            return false;
        }

        if (filterValues.use.active && item.use !== filterValues.use.value) {
            return false;
        }

        if (filterValues.rating.active && item.rating < filterValues.rating.value) {
            return false;
        }

        return true;
    });

    return [filteredData, filterValues, setFilterValues];
};

export default useFilters;
