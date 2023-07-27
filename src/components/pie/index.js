import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [37, 2, 34, 5, 4, 2, 0, 3, 13],
      text:['General Public Services','Public Order and Safety','Economic Affairs','Environmental Protection','Housing and Community Amenities','Health','Recreation, Culture and Religion','Education','Social Protection'],
      backgroundColor: [
        "rgb(78, 128, 187)",
        "rgb(189, 78, 76)",
        "rgb(153, 185, 88)",
        "rgb(126, 98, 159)",
        "rgb(74, 169, 195)",
        "rgb(42, 76, 116)",
        "rgb(59, 130, 246)",
        "rgb(215, 112, 161)",
        "rgb(245, 158, 11)",
      ],
      borderColor: [
        "rgb(78, 128, 187)",
        "rgb(189, 78, 76)",
        "rgb(153, 185, 88)",
        "rgb(126, 98, 159)",
        "rgb(74, 169, 195)",
        "rgb(42, 76, 116)",
        "rgb(59, 130, 246)",
        "rgb(215, 112, 161)",
        "rgb(245, 158, 11)",
      ],
      borderWidth: 1,
    },
  ],
};
