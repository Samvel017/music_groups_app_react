import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GroupedSelect({albums, currentAlbumHandle, currentAlbum,setCurrentAlbum}) {
  return (
    <div className="grouped-select">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
        <Select defaultValue={albums[0]} id="grouped-select" label="Grouping" onChange={(e)=>{setCurrentAlbum(e.target.value)}}>
          <ListSubheader>Radio Head</ListSubheader>
          <MenuItem value={albums[0]}>The King of Limbs</MenuItem>
          <MenuItem value={albums[1]}>OK Computer</MenuItem>
          <ListSubheader>Portis Head</ListSubheader>
          <MenuItem value={albums[2]}>Dummy</MenuItem>
          <MenuItem value={albums[3]}>Third</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
