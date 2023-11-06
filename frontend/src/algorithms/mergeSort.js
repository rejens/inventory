// Merge function
const merge = (left, right) => {
   let result = [];
   let i = 0;
   let j = 0;

   while (i < left.length && j < right.length) {
      if (left[i].name < right[j].name) {
         result.push(left[i]);
         i++;
      } else {
         result.push(right[j]);
         j++;
      }
   }

   return result.concat(left.slice(i)).concat(right.slice(j));
};

// Merge sort function
const mergeSort = (products) => {
   if (products.length <= 1) {
      return products;
   }

   const mid = Math.floor(products.length / 2);
   const left = mergeSort(products.slice(0, mid));
   const right = mergeSort(products.slice(mid));

   return merge(left, right);
};

// Use the merge sort function

export default mergeSort;
