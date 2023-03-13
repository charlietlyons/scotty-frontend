const backendClient = {
  getProductInfo: () => {
    fetch("localhost:8000/products", {})
      .catch()
      .then((response) => response.json())
      .then((data) => console.table(data));
  },
};

export default backendClient;
