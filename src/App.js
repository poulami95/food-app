import logo from './logo.svg';
import './App.css';
import Restaurantnav from './components/RestaurantNav/Restaurantnav';
import SearchBar from './components/SearchBar/SearchBar';
import Controls from './components/Controls/Controls';
import { useEffect, useState } from 'react';

function App() {
  const [searchKeyword, setKeyword] = useState('');
  const [ status,setStatus] = useState('');
  const [applied,setApplied] = useState(false)
  function handleChangeInSearch(value){
    setKeyword(value);
  }
  function handleChangeInStatus(statusChange){
    setStatus(statusChange);
  }
  function handleApply(value){
    setApplied(value)
  }
  console.log(applied);
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <SearchBar keyword={searchKeyword} handleChangeInKeyword={handleChangeInSearch}/>
      <Restaurantnav keyword={searchKeyword} status={status} isApplied={applied}/>
      <Controls status={status} handleChangeInStatus={handleChangeInStatus} handleIsApplied={handleApply}/>
    </div>
  );
}

export default App;
