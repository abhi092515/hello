// ======================================================================
// PART 1: PRODUCT INVENTORY MANAGEMENT
// ======================================================================

// You work for an e-commerce company and need to manage their product inventory.
// The company has provided you with an array of product objects.

const products = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics", stock: 15 },
  { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", stock: 25 },
  { id: 3, name: "Coffee Maker", price: 79.99, category: "Kitchen", stock: 10 },
  { id: 4, name: "Running Shoes", price: 89.99, category: "Sports", stock: 20 },
  { id: 5, name: "Bluetooth Headphones", price: 199.99, category: "Electronics", stock: 5 },
  { id: 6, name: "Blender", price: 49.99, category: "Kitchen", stock: 0 },
  { id: 7, name: "Yoga Mat", price: 29.99, category: "Sports", stock: 18 },
  { id: 8, name: "External Hard Drive", price: 129.99, category: "Electronics", stock: 8 },
  { id: 9, name: "Toaster", price: 39.99, category: "Kitchen", stock: 12 },
  { id: 10, name: "Water Bottle", price: 19.99, category: "Sports", stock: 30 }
];

// Task 1: Use the filter method to get all products that are out of stock (stock is 0)
  function getOutOfStockProducts(products) {
    return products.filter(products => products.stock === 0);
  } const outOfStockProducts = getOutOfStockProducts(products);
  console.log(outOfStockProducts);

// Task 2: Use the filter method to get all products in a specific category
function getProductsByCategory(products, category) {
  return products.filter(products => products.category === category);
}
const electronicsProducts = getProductsByCategory(products, "Electronics");
console.log(electronicsProducts);
// Task 3: Use the map method to apply a 10% discount to all products
// Return a new array with the discounted prices
  // Make sure to create new objects and not modify the originals

function applyDiscountToProducts() {
    return products.map(products => { 
        let newProduct = { ...products }
        newProduct.price = products.price * 0.9
        return newProduct
    })
}  
console.log(applyDiscountToProducts());
  
// Task 4: Use the filter and map methods together to get the names of in-stock Electronics
function getInStockElectronicsNames(products) {
  return products.filter(products => products.category === "Electronics" && products.stock >0)
.map(products => products.name)
}
const electronicsinstock = getInStockElectronicsNames(products)
console.log(electronicsinstock)
  // Your code here
  // First filter for in-stock electronics, then map to get just their names

  // Task 5: Create a function that takes a callback to process products
function processProducts(products, callback) {
return products.map(callback)
} 
const taxProducts = processProducts(products, calculateTax)

function calculateTax(products) {
  return { ...products, tax: Math.round(products.price * 0.1) }

} console.log(taxProducts)
  // Your code here
  // This should be a higher-order function that applies the callback to each product
  // and returns the results


// Example usage of processProducts:
// Display all product names in uppercase
//const displayUppercaseNames = function(products) {
  //return products.name.toUpperCase();
//};
 //console.log(processProducts(products, displayUppercaseNames));

// Task 6: Create a function that finds products based on custom criteria
function findProducts(products, criteriaCallback) {
  return products.filter(criteriaCallback)
  
} function isExpensive(products) {
  return products.price > 400;
}
const expensiveproducts = findProducts(products, isExpensive)
  console.log(expensiveproducts)
  
  // Your code here
  // Use the criteriaCallback to determine which products to include in the result



 