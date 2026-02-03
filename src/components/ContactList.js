import React from 'react';
import user from '../images/user.png'


const ContactList = ({ contacts, searchTerm, onSearchChange }) => {
  return (
    <div className="ui celled list">
      <h3>Contact List</h3>

      <div className="ui search">
        <div className="ui icon input" style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Search by name or email..."
            className="prompt"
            value={searchTerm}
            onChange={onSearchChange}
            style={{ borderRadius: '7px' }}
          />
          <i className="search icon" />
        </div>
      </div>

      {contacts.length > 0 ? (
        contacts.map((contact, index) => (
          <div className="item" key={index}>
            <div className="content">
                <img className='ui avatar image' src={user} />
              <div className="header">{contact.name}</div>
              <div>{contact.email}</div>
            </div>
               <i className='trash alternate outline icon' style={{color:'red', marginTop:'7px'}}></i>
          </div>
        ))
      ) : (
        <div>No contacts found.</div>
      )}
    </div>
  );
};

export default ContactList;
