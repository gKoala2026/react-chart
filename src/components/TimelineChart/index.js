import * as React from "react";
import { Box, } from "@mui/material";
import Chart from "react-apexcharts";

const TimelineProps = {
    data: [
        {
            x: new Date('2022-02-09').getTime(),
            y: 0,
        },
        {
            x: new Date('2022-04-09').getTime(),
            y: 0,
        },
        {
            x: new Date('2022-05-09').getTime(),
            y: 0,
        },
        {
            x: new Date('2022-08-09').getTime(),
            y: 0,
        },
        {
            x: new Date('2022-11-09').getTime(),
            y: 0,
        },
    ],
    sabbatical: '2022-10-07',
};

const TimelineChart = (props) => {
    const options = {
        chart: {
            id: "apexchart-example",
            stacked: true,
            toolbar:{
                show:false
            },
            zoom:{
                enabled:false
            },
            type: 'candlestick',
        },
        colors: ['#56CCF2', '#000'],
        plotOptions: {
            
            boxPlot: {
                colors: {
                upper: '#EB5757',
                lower: '#2F80ED'
                }
            }
        },
        markers: {
          size: 5
        },
        xaxis: {
            min: new Date('2021-12-21').getTime(),
            max: new Date('2022-12-31').getTime(),
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: '#78909C',
                height: 15,
                offsetX: 0,
                offsetY: -7
            },
            labels: {
                show: true,
                rotate: -45,
                rotateAlways: true,
                minHeight: 60,
                maxHeight: 180,
                datetimeFormatter: {
                    year: 'yyyy MMM',
                    month: "MMM",
                    day: 'dd MMM',
                    hour: 'HH:mm',
                },
            },
            type: 'datetime',
            tickPlacement: 'on'
        },
        yaxis: {
            show:false,
            seriesName: undefined,
            opposite: false,
            reversed: false,
            tickAmount: 1,
            forceNiceScale: false,
            floating: false,
            decimalsInFloat: undefined,
        },
        legend: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
        grid: {
            yaxis: {
                lines: {
                    show: false
                }
            },  
            padding: {
                top: 0,
                right: 15,
                bottom: 0,
                left: 15
            },  
        },
        annotations: {
            points: [ {
                x: new Date(TimelineProps.sabbatical).getTime(),
                y: 0,
                marker: {
                    size: 0
                },
                image: {
                    path: 'mark_sabbatical.svg',
                    width: 85,
                    height: 53.5,
                    offsetX: 2,
                    offsetY: -18,
                },
                }, {
                x: new Date(new Date().toISOString().slice(0, 10)).getTime(),
                y: 0,
                marker: {
                    size: 0
                },
                image: {
                    path: 'mark_today.svg',
                    width: 50,
                    height: 50,
                    offsetX: 0,
                    offsetY: -20,
                },
                },
            ],
        },
        
        stroke: {
            curve: 'straight'
        },
        title: {
            text: '2022',
            align: 'left',
            offsetX: 10,
            offsetY: 30,
        },
        subtitle: {
            text: '3 events ->',
            align: 'right',
            margin: 10,
            offsetX: 0,
            offsetY: 40,
            style: {
              fontSize:  '12px',
              fontWeight:  'normal',
              fontFamily:  'Inter',
              color:  '#828282'
            },
        },
        dataLabels: {
          enabled: false
        },
    };

  const series = [
    {
        name: "series-1",
        type:"scatter",
        data: TimelineProps.data,
    },
  ];


  return (
  <Box sx={{ border: 0, width:'100%' }}>
    <Chart
      options={options}
      series={series}
      height={150}
      type={'scatter'}
      width={'100%'}
    />
  </Box>
  );
};

TimelineChart.propTypes = {};

export default TimelineChart;
