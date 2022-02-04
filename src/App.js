import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Components/Page/Main/Home';
import radioHead from './Images/RadioHead/Radioheadmodifiedbear.png';
import portisHead from './Images/PortisHead/portishead-music-decals.jpg';
import radioAlbum1 from './Images/RadioHead/The_King_of_Limbs_cover.jpg';
import radioAlbum2 from './Images/RadioHead/5dc2af07.jpg';
import portisAlbum1 from './Images/PortisHead/d17fe61e.jpg';
import portisAlbum2 from './Images/PortisHead/51K+RLqnjmL._SL1200_.jpg';
import Discover from './Components/Page/Main/Discover';
import Layout from './Components/Layout';
import Music from './Components/Page/Main/Music';

const radioAlbum = [radioAlbum1, radioAlbum2];
const portisAlbum = [portisAlbum1, portisAlbum2];
const groupImg = [radioHead, portisHead];

export default function App() {
  const [user, setUsers] = useState({});
  const addText = (user) => {
    setUsers(user);
  };
  return (
    <div className="App">
      <Routes>
        {/* <Route
          path="/"
          element={<HorizontalLinearStepper addText={addText} />}
        /> */}
        <Route path="/" element={<Layout user={user} />}>
          <Route
            index
            element={
              <Home
                radioAlbum={radioAlbum}
                portisAlbum={portisAlbum}
                groupImg={groupImg}
              />
            }
          />
          <Route path="discover" element={<Discover />} />
          <Route path='discover/:id' element={<Music />} />
        </Route>
      </Routes>
    </div>
  );
}
