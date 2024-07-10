import React, { createContext, useState, useContext } from 'react';

const initialProducts = [
  { id: 1, name: 'Ratchet', description: '3/8 in. Full Polish 72 Tooth Rachet' },
  { id: 2, name: 'Cutting Pliers', description: '9 in. Multi-Purpose Cutting Pliers' },
  { id: 3, name: 'Stud Finder', description: 'Magnetic Stud Finder' },
  { id: 4, name: 'Bolt Cutters', description: '14 in. Anvil Bolt Cutters with New Head' },
];








const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const fetchProducts = () => {
    return products;
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };



  
  const addProduct = (product) => {
    const newProduct = { ...product, id: products.length + 1 };
    setProducts([...products, newProduct]);
  };

  return (
    <InventoryContext.Provider value={{ products, fetchProducts, removeProduct, addProduct }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);