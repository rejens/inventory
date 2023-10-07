import React, { useContext } from "react";
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Filler,
   Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import InventoryContext from "../context/InventoryContext";

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Filler,
   Legend
);

export default function App({ dataSet }) {
   const { sales } = useContext(InventoryContext);
   const dateLabel = sales.map((sale) => sale.createdAt.split("T")[0]);
   const quantityData = sales.map((sale) => sale.quantity);
   const priceData = sales.map((sale) => sale.price);

   const revenue = quantityData.map(
      (quantity, index) => quantity * priceData[index]
   );

   const revenueData = sales.map((item) => ({
      date: item.createdAt.split("T")[0], // Extract the date without time
      revenue: item.price * item.quantity,
   }));

   const dailyRevenue = revenueData.reduce((result, item) => {
      const { date, revenue } = item;
      result[date] = (result[date] || 0) + revenue;
      return result;
   }, {});

   //find daily revenue using above revenue data

   const options = {
      responsive: true,
      plugins: {
         legend: {
            position: "top",
         },
         title: {
            display: true,
            text: "Chart.js Line Chart",
         },
      },
   };

   const labels = dateLabel;

   const data = {
      labels,
      datasets: [
         {
            fill: true,
            label: "daily revenue",
            data: Object.values(dailyRevenue).reverse(),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
         },
      ],
   };

   return <Line options={options} data={data} />;
}
