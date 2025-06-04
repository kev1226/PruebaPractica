import React from "react";
import CryptoList from "./components/CryptoList";

function App() {
  return (
    <div className="App">
      <CryptoList />
    </div>
  );
}

export default App;
// This code imports the CryptoList component and renders it inside the main App component.
// The CryptoList component fetches cryptocurrency data from the backend and displays it in a table format.