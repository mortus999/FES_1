import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const ContactDetails = () => {
  const { selectedContact, setSelectedContact } = useContext(ContactContext);

  if (!selectedContact) {
    return <div>Click a name to see the details.</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {selectedContact.name}</p>
      <p>Email: {selectedContact.email}</p>
      <p>Phone: {selectedContact.phone}</p>
      <button
        onClick={() => setSelectedContact(null)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          outline: 'none',
        }}
      >
        Close
      </button>
    </div>
  );
};

export default ContactDetails;
