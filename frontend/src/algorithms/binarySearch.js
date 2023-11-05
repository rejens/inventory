// Binary search function
const binarySearch = (products, target) => {
   let left = 0;
   let right = products.length - 1;

   while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const productName = products[mid].name.toLowerCase();

      if (productName === target.toLowerCase()) {
         return [products[mid]];
      } else if (productName < target.toLowerCase()) {
         left = mid + 1;
      } else {
         right = mid - 1;
      }
   }

   return null;
};

// // Use the binary search function
// const targetProductName = "rice";
// const product = binarySearchByName(sortedProducts, targetProductName);
export default binarySearch;
