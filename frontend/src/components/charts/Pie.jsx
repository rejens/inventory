import { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import randomColor from "randomcolor";
import InventoryContext from "../context/InventoryContext";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function App() {
   const { products } = useContext(InventoryContext);

   const data = {
      labels: products.map((product) => product.name),
      datasets: [
         {
            label: "investment ",
            data: products.map((product) => product.quantity * product.price),

            backgroundColor: randomColor({
               count: products.length,
               // luminosity: "light",
               format: "rgba",
               alpha: 0.2,
            }),

            borderColor: randomColor({
               count: products.length,
               // luminosity: "dark",
               format: "rgba",
               alpha: 0.8,
            }),
            borderWidth: 1,
         },
      ],
   };

   return <Pie data={data} />;
}
