import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type CategoryProps = {
  category: string;
  setCategory: (value: string) => void;
}

const Category: React.FC<CategoryProps> = ({category, setCategory}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  return (
    <div style={{
      width: "240px",
      marginTop: "10px",
      marginLeft: "30px",
    }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          label="Choose"
          style={{
            marginTop: '10px',
            padding: '8px 12px',
            height: '40px',
            borderRadius: "7px",
            backgroundColor: "#F3F4F6",
          }}
        >
          <MenuItem value={'food'}>food</MenuItem>
          <MenuItem value={'shopping'}>shopping</MenuItem>
          <MenuItem value={'bills'}>bills</MenuItem>
          <MenuItem value={'clothing'}>clothing</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Category;
