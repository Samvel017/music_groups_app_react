import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './main.scss';
export default function Home({ groupImg, portisAlbum, radioAlbum }) {
  const [music, setMusic] = useState([]);
  const [active, setActive] = useState('radiohead');
  const [radioMus, setRadioMus] = useState([]);
  const [portisMus, setPortisMus] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/jasonbaldridge/2668632/raw/e56320c485a33c339791a25cc107bf70e7f1d763/music.json'
      )
      .then((response) => {
        let arr = response.data;
        groupImg.forEach((el, index) => {
          arr[index].image = el;
        });
        setMusic(arr);
        let radioArr = response.data[0].albums;
        radioAlbum.forEach((el, index) => {
          radioArr[index].image = el;
        });
        let portisArr = response.data[1].albums;
        portisAlbum.forEach((el, index) => {
          portisArr[index].image = el;
        });
        setRadioMus(radioArr);
        setPortisMus(portisArr);
        console.log(response.data);
        console.log(radioArr, 'radio');
      });
  }, []);

  return (
    <div className="home">
      <div className="groups-container">
        <h2 className="groups-title">Groups</h2>
        <div className="groups">
          {music.map((el, index) => {
            return (
              <div className="group" key={index}>
                <div className="group-image">
                  <img src={el.image} alt="" />
                </div>
                <h3>{el.name}</h3>
                <button>
                  <span>View details</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="groups-container">
        <h2 className="groups-title latest-title">Groups Albums</h2>
        <div className="groups-buttons">
          <button
            className={active === 'radiohead' ? 'active' : ''}
            onClick={() => {
              setActive('radiohead');
            }}
          >
            RadioHead
          </button>
          <button
            className={active === 'portishead' ? 'active' : ''}
            onClick={() => {
              setActive('portishead');
            }}
          >
            PortisHead
          </button>
        </div>
        <div className="groups latest-groups">
          {active === 'radiohead' ? (
            <>
              {radioMus.map((el, index) => {
                return (
                  <div className="group" key={index}>
                    <div className="group-image album-image">
                      <img src={el.image} alt="" />
                    </div>
                    <h3>{el.title}</h3>
                    <button>
                      <span>View details</span>
                    </button>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {portisMus.map((el, index) => {
                return (
                  <div className="group" key={index}>
                    <div className="group-image album-image">
                      <img src={el.image} alt="" />
                    </div>
                    <h3>{el.title}</h3>
                    <button>
                      <span>View details</span>
                    </button>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
