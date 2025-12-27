import products from "../Data/Product.js"

const onePerCategory = Object.values(
  products.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = item;
    }
    return acc;
  }, {})
);

export default onePerCategory;
