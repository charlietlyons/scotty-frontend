const URL = PRODUCTION ? "http://localhost:5000" : "http://localhost:5000";

class backendClient {
  static getProductDetailsById = (productId, setProductDetailInfo) => {
    fetch(`${URL}/inventory/${productId}`, {})
      .then((response) => {
        return response.json();
      })
      .then((productData) => {
        setProductDetailInfo(productData);
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
