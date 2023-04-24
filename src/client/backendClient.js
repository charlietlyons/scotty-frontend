const backendClient = {
  getProductInfo: (setProductInfo) => {
  fetch("http://localhost:5000/inventory", {
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
