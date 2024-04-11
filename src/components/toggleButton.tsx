import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton({transactionType, setTransactionType}) {

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    type: string,
  ) => {
    setTransactionType(type);
  };

  return (
    <div style={{backgroundColor: "#F3F4F6", height: "35px", width: "240px", borderRadius: "50px",margin: "15px 0 20px 30px",}}>
      <ToggleButtonGroup
        color="primary"
        value={transactionType}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        style={{ border: 'none', display: 'flex', gap: "2px" }}
      >
        <ToggleButton 
          value="expense"
          style={{
            color: transactionType === 'expense' ? '#FFF' : '#000',
            backgroundColor: transactionType === 'expense' ? '#0166FF' : '#F3F4F6',
            borderRadius: '50px',
            width: '120px', 
            height: '35px', 
            border: 'none' 
          }}
        >
          Expense
        </ToggleButton>
        <ToggleButton 
          value="income"
          style={{
            color: transactionType === 'income' ? '#FFF' : '#000',
            backgroundColor: transactionType === 'income' ? '#16A34A' : '#F3F4F6', 
            borderRadius: '50px',
            width: '120px', 
            height: '35px', 
            border: 'none' 
          }}
        >
          Income
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
