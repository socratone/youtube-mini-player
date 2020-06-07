import React, { useState } from 'react';
import './App.css';
import Main from './Main';
import PlayerSection from './PlayerSection';
import Player from './Player';
import Footer from './Footer';

function App() {
  const [page, setPage] = useState('main');
  const [isPlaying, setIsPlaying] = useState(false);

  let selectedPage;
  if(page === 'main') {
    selectedPage = <Main />
  } else if(page === 'player') {
    selectedPage = <PlayerSection />
  }

  return (
    <div className="App">
      {selectedPage}
      <Player 
        isPlaying={isPlaying} 
        page={page} />
      <Footer 
        setPage={setPage} 
        setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
