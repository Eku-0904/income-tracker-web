import React, { ChangeEvent } from 'react';

interface DateProps {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

const Date: React.FC<DateProps> = ({ date, setDate }) => {
  return (
    <input
      onChange={(e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
      type='date'
      value={date}
      style={{
        marginLeft: "30px",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "14px",
        outline: "none",
        width: "240px",
        // cursor: "pointer"
      }}
    />
  );
}

export default Date;
