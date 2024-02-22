import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; // Import Button component

interface CurrencyStepProps {
  handleNext: () => void;
}

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'MGL',
    label: '₮',
  },
];

const SelectTextFields: React.FC<CurrencyStepProps> = ({ handleNext }) => {
  const handleConfirm = () => {
    handleNext();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        height: '100%', 
      }}
    >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          marginBottom: '1rem', 
          marginTop: "4cm",
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="filled-select-currency-native"
            select
            label="Native select"
            defaultValue="EUR"
            SelectProps={{
              native: true,
            }}
            helperText="Please select your currency"
            variant="filled"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} - {option.value === 'MGL' ? 'Mongolian Tugrik' : ''}
                {option.label} - {option.value === 'USD' ? 'Dollar' : ''}
              </option>
            ))}
          </TextField>
        </div>
      </Box>
      <Button sx={{
        marginTop: "40px",
        }} variant="contained" onClick={handleConfirm}>Confirm</Button>
    </Box>
  );
}

export default SelectTextFields;
