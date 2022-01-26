import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GroupedSelect from './GroupedSelect';

export default function Discover() {
  const [albums, setAlbums] = useState([]);
  const [currentAlbum, setCurrentAlbum] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/jasonbaldridge/2668632/raw/e56320c485a33c339791a25cc107bf70e7f1d763/music.json'
      )
      .then((response) => {
        setAlbums([...response.data[0].albums, ...response.data[1].albums]);
        setCurrentAlbum(response.data[0].albums[0]);
      });
  }, []);

  console.log(albums);
  console.log(currentAlbum, 'current');
  return (
    <div className="discover-container">
      <div className="discover">
        <GroupedSelect
          setCurrentAlbum={setCurrentAlbum}
          albums={albums}
          currentAlbum={currentAlbum}
        />
        <div className="songs-container">
          <h2 className="songs-title">{currentAlbum.title}</h2>
          <div className="songs">
            {currentAlbum !== ''
              ? currentAlbum.songs.map((song, index) => {
                  return (
                    <div className="song" key={index}>
                      <h3>{song.title}</h3>
                      <h5>Song length: {song.length}</h5>
                    </div>
                  );
                })
              : null}
          </div>
          <h3 className="description-title">Album Description</h3>
          <p className="description">{currentAlbum.description}</p>
        </div>
      </div>
    </div>
  );
}
