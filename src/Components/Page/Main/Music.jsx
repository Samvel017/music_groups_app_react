import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Music() {
  const [music, setMusic] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/jasonbaldridge/2668632/raw/e56320c485a33c339791a25cc107bf70e7f1d763/music.json'
      )
      .then((response) => {
        const arr = [
          ...response.data[0].albums[0].songs,
          ...response.data[0].albums[1].songs,
          ...response.data[1].albums[0].songs,
          ...response.data[1].albums[1].songs,
        ];
        arr.forEach((el, index) => {
          el.id = index + 1;
        });
        const newArr = arr.filter((el, index) => index + 1 === +id);
        setMusic(newArr);
      });
  }, [id]);

  console.log(music, 'music');
  return (
    <div className="song-container">
      <div className="song-info">
        <Button className="back-btn" onClick={goBack}>
          <ArrowBackIcon fontSize='large' />
        </Button>
        <h1 className="song-title">About Song</h1>
        {music.map((el, index) => {
          return (
            <div key={index} className="song">
              <h2>{el.title}</h2>
              <h4>Song length: {el.length}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
