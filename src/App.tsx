import React, {useState} from 'react';
import './App.css';
import {Search} from './services/reddit'
import Listing from './data-models/post'

function App() {
  const [listing, setListing] = useState<Listing>()
  Search('awww').then((response)=>setListing(response.Data))
  return (
    <div className="App">
      {listing.Data}
    </div>
  );
}

export default App;
