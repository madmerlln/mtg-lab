import React from 'react';
import toastr from 'toastr';
import Push from 'push.js';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [collection, setCollection] = React.useState([]);

  function addToCollection(card) {
    const cardsCollection = [...collection, card];
    toastr.options.closeButton = true;
    toastr.options.progressBar = true;
    toastr.success(`${card.name} foi dicionado a coleção`);
    Push.create('Hello World!');
    setCollection(cardsCollection);
    localStorage.setItem('cardsCollection', JSON.stringify(cardsCollection));
  }
  return (
    <GlobalContext.Provider value={{ collection, addToCollection }}>
      {children}
    </GlobalContext.Provider>
  );
};
