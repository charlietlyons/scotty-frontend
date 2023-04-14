const URL = PRODUCTION ? "http://localhost:5000" : "http://localhost:5000";

class backendClient {
  static getProductDetailsById(productId, setProductInfo) {
    console.log(`${URL}/inventory/${productId}`);
    fetch(`${URL}/inventory/${productId}`, {})
      .then((response) => {
        return response.json();
      })
      .then((productData) => {
        setProductInfo(productData);
      });
  }

  static getProducts = (setProductInfo) => {
    fetch(`${URL}/inventory`, {})
      .then((response) => {
        return response.json();
      })
      .then((productData) => {
        setProductInfo(productData);
      });
  };
}

export default backendClient;
