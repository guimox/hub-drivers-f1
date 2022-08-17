import { Line } from "react-chartjs-2";
import { ChartWrapper } from "./LineChartStyles";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ raceList }) => {
  return (
    <ChartWrapper>
      <Line
        data={{
          labels: raceList.map((data) => data.raceName),
          datasets: [
            {
              label: "Place Finished",
              data: raceList.map((data) => data.Results[0].position),
              backgroundColor: ["orange"],
            },
            {
              label: "Place Qualified",
              data: raceList.map((data) => data.Results[0].grid),
              backgroundColor: ["gray"],
            },
          ],
        }}
        options={{
          scales: {
            yAxis: { reverse: true },
          },
        }}
      />
    </ChartWrapper>
  );
};

export default LineChart;
