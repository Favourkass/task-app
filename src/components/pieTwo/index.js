import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataTwo = {
  datasets: [
    {
      data: [65, 2, 3,3, 4, 3, 2, 16,2],
      text:['General Public Services','Public Order and Safety','Economic Affairs','Environmental Protection','Housing and Community Amenities','Health','Recreation, Culture and Religion','Education','Social Protection'],
      backgroundColor: [
        "rgb(223, 121, 32)",
        "rgb(189, 78, 76)",
        "rgb(71, 50, 98)",
        "rgb(200, 94, 91)",
        "rgb(143, 115, 176)",
        "rgb(42, 77, 116)",
        "rgb(251, 160, 80)",
        "rgb(194, 59, 56)",
        "rgb(118, 86, 159)",
      ],
      borderColor: [
        "rgb(223, 121, 32)",
        "rgb(189, 78, 76)",
        "rgb(71, 50, 98)",
        "rgb(200, 94, 91)",
        "rgb(143, 115, 176)",
        "rgb(42, 77, 116)",
        "rgb(251, 160, 80)",
        "rgb(194, 59, 56)",
        "rgb(118, 86, 159)",
      ],
      borderWidth: 1,
    },
  ],
};
