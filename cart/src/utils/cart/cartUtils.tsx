import { Product } from "../../types/product/productTypes";

  // Função para adicionar um produto ao carrinho
export const addProductToCart = (prevCart: Product[], product: Product) => {
  const existingProduct = prevCart.find(item => item.id === product.id);

  if (existingProduct) {
    return prevCart.map(item => 
      item.id === product.id 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
    );
  } else {
    return [...prevCart, { ...product, quantity: 1 }];
  }
};

// Função para remover um produto do carrinho
export const removeProductFromCart = (prevCart: Product[], product: Product) => {
  const existingProduct = prevCart.find(item => item.id === product.id);

  if (existingProduct) {
    if (existingProduct.quantity > 1) {
      return prevCart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    } else {
      return prevCart.filter(item => item.id !== product.id);
    }
  }
  return prevCart;
};