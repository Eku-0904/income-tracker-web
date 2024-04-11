




import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({setTransactionType}:{setTransactionType:  (transactionType: string) => void}) {
 
  const onChange =  (_: React.ChangeEvent<HTMLInputElement>, value: string)=>{
    setTransactionType(value)
  }
  return (
      <div className="justWord">
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Types</FormLabel>
      <RadioGroup onChange={onChange}>
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="income" control={<Radio />} label="Income" />
        <FormControlLabel value="expense" control={<Radio />} label="Expense" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}