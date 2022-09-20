import * as React from "react";
import { Box, Container } from "@mui/material";
import Chart from "react-apexcharts";

const BarChartProps = {
  ymax: 6728,
  ymin: 0,
  xlabel: [
    "10/15/2019",
    "",
    "",
    "",
    "10/15/2020",
    "",
    "",
    "",
    "",
    "10/15/2021",
    "",
    "",
    "",
    "10/15/2022",
    "",
    "",
    "10/15/2023",
  ],
  data: [
    {x:'10/15/2019', y:0},
    {x:'1/15/2020', y:0},
    {x:'4/15/2020', y:0},
    {x:'7/15/2020', y:0},
    {x:'10/15/2020', y:1682},
    {x:'1/15/2021', y:2000},
    {x:'4/15/2021', y:2489},
    {x:'7/15/2021', y:2965},
    {x:'10/15/2021', y:3364},
    {x:'1/15/2022', y:3780},
    {x:'4/15/2022', y:4208},
    {x:'7/15/2022', y:4692},
    {x:'10/15/2022', y:5046},
    {x:'1/15/2023', y:5456},
    {x:'4/15/2023', y:5908},
    {x:'7/15/2023', y:6372},
    {x:'10/15/2023', y:6728},
  ],
};

const BarChart = () => {
  const options = {
    chart: {
      id: "apexchart-example",
      stacked: true,
    },
    colors: [
      function ({ value, seriesIndex, dataPointIndex, w }) {
        let date = w.config.series[0].data[dataPointIndex]['x']
          if (new Date(date).getTime() < new Date(new Date().toISOString().slice(0, 10)).getTime()) {
            return "#219653";
          } else {
            return "#333";
          }
      },
    ],
    xaxis: {
        axisTicks: {
          show: false,
        },
        labels: {
            show: true,
            rotate: -45,
            rotateAlways: true,
            minHeight: 60,
            maxHeight: 180,
            datetimeFormatter: {
                year: 'MM/dd/yyyy',
                month: "MM/dd/yyyy",
                day: 'dd MMM',
                hour: 'HH:mm',
            },
        },
        type: 'datetime',
        tickPlacement: 'on'
    },
    yaxis: {
      min: BarChartProps.ymin,
      max: BarChartProps.ymax,
      tickAmount: 4,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 0,
            columnWidth: '70%',
            barHeight: '70%',
            distributed: false,
            rangeBarOverlap: true,
            rangeBarGroupRows: false,
            colors: {
                ranges: [{
                    from: 0,
                    to: 0,
                    color: undefined
                }],
                backgroundBarColors: ['#E0E0E0'],
                backgroundBarOpacity: 1,
                backgroundBarRadius: 0,
            },
        }
    },
  };

  const series = [
    {
      name: "series-1",
      data: BarChartProps.data,
    },
  ];

  return (
  <Box sx={{ border: 0, width:'100%' }}>
    <Chart
      options={options}
      series={series}
      type="bar"
      height={250}
      width={'100%'}
    />
  </Box>
  );
};

BarChart.propTypes = {};

export default BarChart;
