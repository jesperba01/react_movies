import React, { useState } from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';
import './App.css' 

function App() {
  const [selectedList, setSelectedList] = useState<string>('popular');

  const handleSelectList = (list: string) => {
    setSelectedList(list);
  };

  return (
    <div>
      <NavBar onSelectList={handleSelectList} /> {/* Pass the onSelectList prop */}
      <HomePage />
    </div>
  );
}

export default App;