import React, { useState } from 'react';

const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({ name: '', email: '' });

  const add = (e) => {
    e.preventDefault();
    if (contact.name === '' || contact.email === '') {
      alert('All the fields are mandatory');
      return;
    }

    // Pass contact to parent
    addContactHandler(contact);

    // Clear form
    setContact({ name: '', email: '' });
  };

  return (
    <div className="ui main">
      <h2>Add Contacts</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
