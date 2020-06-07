import React from 'react';
import './App.css';

function Footer(props) {
  return (
    <div className="Footer">
      <div 
        className="Footer-main" 
        onClick={() => {
          props.setPage('main');
          document.getElementById('player').classList.add('player-small');
          document.getElementById('player').classList.remove('player-big');
        }}>
        Main
      </div>
      <div className="Footer-player" 
        onClick={() => {
          props.setPage('player');
          props.setIsPlaying(true);
          document.getElementById('player').classList.add('player-big');
          document.getElementById('player').classList.remove('player-small');
        }}>
        Player
      </div>
    </div>
  );
}

export default Footer;
