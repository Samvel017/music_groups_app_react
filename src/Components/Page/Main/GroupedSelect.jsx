import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { NavLink } from 'react-router-dom';

const albumsTitle = ['The King of Limbs', 'OK Computer', 'Dummy', 'Third'];

export default function GroupedSelect({
  albums,
  currentAlbumHandle,
  currentAlbum,
  setCurrentAlbum,
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="grouped-select">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        {albumsTitle.map((el, index) => {
          return (
              <Tab
                key={index}
                className="btn-tab"
                label={el}
                onClick={() => setCurrentAlbum(albums[index])}
              />
          );
        })}
      </Tabs>
    </div>
  );
}
