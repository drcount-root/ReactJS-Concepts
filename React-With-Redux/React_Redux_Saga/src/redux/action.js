const addToCart = (data) => {
  console.log("action called", data);
  return {
    type: "Add_To_Cart",
    data: data,
  };
};

export default addToCart;
