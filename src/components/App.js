import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 PWA install states
  const [showInstall, setShowInstall] = useState(false);

  // 🔹 Capture install prompt
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();           // Stop Chrome auto prompt
      window.deferredPrompt = e;    // Save event globally
      setShowInstall(true);         // Show install button
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  // 🔹 Install button click
  const handleInstallClick = async () => {
    if (!window.deferredPrompt) return;

    window.deferredPrompt.prompt();
    const choice = await window.deferredPrompt.userChoice;

    console.log("User choice:", choice.outcome);

    window.deferredPrompt = null;
    setShowInstall(false);
  };

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h2>React Js</h2>

      {/* ✅ Custom PWA Install Button */}
      {showInstall && (
        <button
          onClick={handleInstallClick}
          style={{
            padding: "10px 14px",
            marginBottom: "12px",
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Install App
        </button>
      )}

      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList
        contacts={filteredContacts}
        searchTerm={searchTerm}
        onSearchChange={handleSearch}
      />
    </div>
  );
}

export default App;
