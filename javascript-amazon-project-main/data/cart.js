export const cart = [];

export function addToCart(productId) {
  let mactchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      mactchingItem = cartItem;
    }
  });

  if (mactchingItem) {
    mactchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}
