import { AiFillStar } from "react-icons/ai";

const data = [
  {
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    title: "Nike Air Monarch IV",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Nike",
    color: "white",
    category: "sneakers",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Nike",
    color: "red",
    category: "sneakers",
    audience: "men",
    use: "sport"
  },

  {
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    title: "Nike Waffle One Sneaker",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Nike",
    color: "green",
    category: "sneakers",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
    title: "Nike Running Shoe",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Adidas",
    color: "black",
    category: "sneakers",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
    title: "Flat Slip On Pumps",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Vans",
    color: "green",
    category: "flats",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
    title: "Knit Ballet Flat",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Adidas",
    color: "black",
    category: "flats",
    audience: "men",
    use: "sport"
  },

  {
    img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
    title: "Loafer Flats",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Vans",
    color: "white",
    category: "flats",
    audience: "men",
    use: "sport"
  },

  {
    img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
    title: "Nike Zoom Freak",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Nike",
    color: "green",
    category: "sneakers",
    audience: "men",
    use: "sport"
  },

  {
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    title: "Nike Men's Sneaker",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Adidas",
    color: "blue",
    category: "sneakers",
    audience: "men",
    use: "sport"
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "PUMA BLACK-OCE",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Puma",
    color: "green",
    category: "sneakers",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    title: "Pacer Future Sneaker",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Puma",
    color: "red",
    category: "sneakers",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    title: "Unisex-Adult Super",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Puma",
    color: "black",
    category: "sneakers",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
    title: "Roma Basic Sneaker",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Puma",
    color: "white",
    category: "sneakers",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    title: "Pacer Future Doubleknit",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Puma",
    color: "black",
    category: "sneakers",
    audience: "men",
    use: "sport"
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Fusion Evo Golf Shoe",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Puma",
    color: "green",
    category: "sneakers",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    title: "Rainbow Chex Skate",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Vans",
    color: "red",
    category: "flats",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    title: "Low-Top Trainers",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Vans",
    color: "white",
    category: "sandals",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
    title: "Vans Unisex Low-Top",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Vans",
    color: "blue",
    category: "sandals",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    title: "Classic Bandana Sneakers",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Nike",
    color: "black",
    category: "sandals",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
    title: "Chunky High Heel",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Vans",
    color: "black",
    category: "heels",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
    title: "Slip On Stiletto High Heel",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "puma",
    color: "black",
    category: "heels",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
    title: "DREAM PAIRS Court Shoes",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Nike",
    color: "red",
    category: "heels",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Nike",
    color: "red",
    category: "sneakers",
    audience: "men",
    use: "sport"
  },

  {
    img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
    title: "Low Mid Block Heels",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Nike",
    color: "black",
    category: "heels",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
    title: "Chunky High Heel",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Adidas",
    color: "black",
    category: "heels",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
    title: "Amore Fashion Stilettos",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Adidas",
    color: "white",
    category: "heels",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
    title: "Bridal Sandals Glitter",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Adidas",
    color: "black",
    category: "heels",
    audience: "men",
    use: "sport"
  },
  {
    img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
    title: "Wedding Prom Bridal",
    rating: 4.5,
    prevPrice: 180,
    newPrice: 110,
    brand: "Adidas",
    color: "black",
    category: "flats",
    audience: "men",
    use: "sport"
  },
];

export default data;