import { Flex, Typography } from 'antd';
import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

type IDonutChart = {
    color: string;
    total: string;
    legend: string;
};

const { Text } = Typography;
const DonutChart: React.FC<IDonutChart> = ({ color, total, legend }) => {

  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
        setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, [])

    const chartOptions: ApexOptions = {
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
            }
        }],
        colors: [color, '#898989'],
        plotOptions: {
            pie: {
                donut: {
                    size: "70%",
                    background: "#EFEFEF",
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: () => total,
                            color: '#626262',
                            fontFamily: "Nunito Sans, sans-serif",
                            fontWeight: "bold",
                            fontSize: "1cqmax"
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
    };

    const chartSeries = [parseInt(total), 100 - parseInt(total)];

    const getInnerWidth = () => {
        if(innerWidth >= 1024 || innerWidth >= 768) {
            return 200
        }else if(innerWidth >= 375) {
            return 150
        } else {
            return 150
        }
    }

    return (
        <Flex vertical align="center">
            <Chart options={chartOptions} series={chartSeries} type="donut"  width={getInnerWidth()}  />
            <Text className="chart-legend-text">{legend}</Text>
        </Flex>
    );
};

export default DonutChart;
