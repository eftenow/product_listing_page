import { useState } from 'react';

const useFilters = (initialData, selectedCategory) => {
    const [filterValues, setFilterValues] = useState({
        gender: "",
        price: "",
        color: "",
        brand: "",
        use: "",
        rating: "",
    });

    const filteredData = initialData.filter(item => {
        if (selectedCategory.toLowerCase() !== 'all' && item.category.toLowerCase() !== selectedCategory.toLowerCase()) {
            return false;
        }

        if (filterValues.gender && item.gender !== filterValues.gender) {
            return false;
        }

        const actualPrice = item.newPrice || item.prevPrice;

        switch (filterValues.price) {
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

        if (filterValues.color && !item.color.includes(filterValues.color)) {
            return false;
        }

        if (filterValues.brand && item.brand !== filterValues.brand) {
            return false;
        }

        if (filterValues.use && item.use !== filterValues.use) {
            return false;
        }

        if (filterValues.rating && item.rating < filterValues.rating) {
            return false;
        }

        return true;
    });

    return [filteredData, filterValues, setFilterValues];
};

export default useFilters;
