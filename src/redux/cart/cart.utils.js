export const addItemToCart = (cartItems, addItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === addItem.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === addItem.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  return [...cartItems, { ...addItem, quantity: 1 }];
};
