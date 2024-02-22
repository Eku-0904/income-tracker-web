import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface BalanceStepProps {
  handleNext: () => void;
}

const BalanceStep: React.FC<BalanceStepProps> = ({ handleNext }) => {
  const [balance, setBalance] = React.useState('');
  const [error, setError] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBalance(event.target.value);
    setError('');
  };

  const handleConfirm = () => {
    if (!balance.trim()) {
      setError('Please enter your email.');
      return;
    }

    handleNext();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TextField
        label="Enter your email"
        variant="outlined"
        value={balance}
        onChange={handleChange}
        error={!!error}
        helperText={error}
        sx={{
            marginTop: "40px",
            }} 
      />
      <Button
      sx={{
        marginTop: "40px",
        }} 
      variant="contained" onClick={handleConfirm}>
        Confirm
      </Button>
    </Box>
  );
};

export default BalanceStep;
