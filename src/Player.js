import React, { useEffect } from 'react';
import YouTube from 'react-youtube';
import './App.css';

function Player(props) {
  const iframe = document.getElementById('iframe');
  useEffect(() => {
    if(props.page === 'main' && iframe) {
      iframe.classList.add('iframe-small');
      iframe.classList.remove('iframe-big');
    } else if(props.page === 'player' && iframe) {
      iframe.classList.add('iframe-big');
      iframe.classList.remove('iframe-small');
    }
  });

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // event.target.pauseVideo();
  };

  let youtubePlayer;
  if(props.isPlaying) {
    youtubePlayer = 
      <YouTube 
        id="iframe" 
        videoId="ZbZSe6N_BXs" 
        opts={opts} 
        onReady={onReady} 
        className="iframe-big" />
  } else {
    youtubePlayer = null;
  }

  return (
    <div id="player">
      {youtubePlayer}
    </div>
  );
}

export default Player;
