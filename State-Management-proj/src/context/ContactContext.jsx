import React, { createContext, useState } from 'react';

const ContactContext = createContext();

const dummyContacts = [
  { id: 1, name: 'Joe Mama', email: 'JoeM2003@gmail.com', phone: '555-434-1432' },
  { id: 2, name: 'Joe Dirt', email: 'JDirt23@hotmail.com', phone: '554-434-3321' },
  { id: 3, name: 'Dogma Jones', email: 'DrJones1543@gmail.com', phone: '883-232-4312' },
  { id: 4, name: 'Dugland Farland', email: 'DuglandFarland1321@hotmail.com', phone: '223-545-8525' },
];

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState(dummyContacts);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };