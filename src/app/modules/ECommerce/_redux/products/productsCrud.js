import axios from "axios";

export const PRODUCTS_URL = "http://localhost:5000/api/customers";

// CREATE =>  POST: add a new product to the server
export function createProduct(product) {
  return axios.post(`${PRODUCTS_URL}/register`, { product });
}

// READ
export function getAllProducts() {
  return axios.get(PRODUCTS_URL);
}

export function getProductById(productId) {
  return axios.get(`${PRODUCTS_URL}/${productId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findProducts(queryParams) {
  return axios.get(`${PRODUCTS_URL}/find`);
}

// UPDATE => PUT: update the procuct on the server
export function updateProduct(product) {
  console.log(product)
  return axios.put(`${PRODUCTS_URL}/${product.id}`, { product });
}

// UPDATE Status
export function updateStatusForProducts(ids, status) {
  return axios.post(`${PRODUCTS_URL}/updateStatusForProducts`, {
    ids,
    status
  });
}

// DELETE => delete the product from the server
export function deleteProduct(productId) {
  return axios.delete(`${PRODUCTS_URL}/${productId}`);
}

// DELETE Products by ids
export function deleteProducts(ids) {
  return axios.post(`${PRODUCTS_URL}/deleteProducts`, { ids });
}
