import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const categories = ["Food", "Shopping", "Bills", "Clothing"];
const expenses = [34235, 24425, 42325, 15432];
const colors = ["#1C64F2", "#E74694", "#FDBA8C", `#16BDCA`];

const sum = expenses.reduce((a, b) => a + b, 0);

const dataSet = {
  labels: categories,
  datasets: [
    {
      data: expenses,
      backgroundColor: colors,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

function DoughnutChart() {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        display: "flex",
        flexDirection: "column",
        width: "588px",
        height: "200px",
        borderRadius: '15px',
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}>
        <h3>Expenses</h3>
        <p>Total: {sum}₮</p>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#F5F5F5",
          height: "1px",
          margin: "10px 0",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Doughnut
          data={dataSet}
          options={options}
          style={{ maxHeight: "156px", maxWidth: "156px" }}
        />
        <Labels />
      </div>
    </div>
  );
}

const Labels = () => {
  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{ display: "flex", alignItems: "center", width: "150px" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                display: "flex",
                backgroundColor: colors[index],
                margin: "5px",
                borderRadius: "50%",
              }}
            />
            <p style={{ marginRight: "10px" }}>{category}</p>
          </div>
          <div style={{ width: "100px" }}>{expenses[index]}₮</div>
          <div style={{ width: "100px" }}>{((expenses[index] * 100) / sum).toFixed(1)}%</div>
        </div>
      ))}
    </div>
  );
};

export default DoughnutChart;