const backendClient = {
  getProductInfo: (setProductInfo) => {
  fetch(`${PRODUCTION ? "http://localhost:5000" :  "http://localhost:3001"}/inventory`, {
    })
      .then((response) => {
        return response.json();
      })
      .then((productData) => {
        setProductInfo(productData)
      });
  },
};

export default backendClient;
