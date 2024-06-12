import React, { Suspense, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Flex } from 'antd';
import { ApexOptions } from 'apexcharts';
import { SemenData } from '../../data/SemenData';


type IRadialBarChart = {
    data: number[];
}

const SemenCollectionCard = React.lazy(() => import("./SemenCollectionData"));

const RadialBarChart: React.FC<IRadialBarChart> = ({ data }) => {

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
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: innerWidth <= 1024 ? "30%" : "45%",
                    background: "#EFEFEF"
                },
                dataLabels: {
                    name: {
                        color: '#626262',
                        fontFamily: "Nunito Sans, sans-serif",
                        fontWeight: "bold"
                    },
                    value: {
                        fontSize: '14px',
                        color: '#626262',
                        fontFamily: "Nunito Sans, sans-serif",
                        fontWeight: "bold"
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        fontSize: "1cqmax",
                        formatter: function () {
                            return data.reduce((acc, value) => acc + value, 0).toString();
                        }
                    }
                }
            }
        },
        colors: ['#6C6C6C', '#B4B4B4', '#FFE1DC', '#FBB9AD', '#EF9685'],
        labels: ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'],
    };

    const getInnerWidth = () => {
        if(innerWidth <= 1024) {
            return 200
        }else if(innerWidth <= 320) {
            return 100
        } else {
            return 250
        }
    }
    const chartSeries = [89, 58, 79, 64, 41];

    return (
        <Flex align="center" justify="center">
            <Chart options={chartOptions} series={chartSeries} type="radialBar" width={getInnerWidth()} />
            {
            SemenData.map((item, index: number) => (
                <Suspense fallback="" key={index}>
                    <SemenCollectionCard
                        title={item.title}
                        checkedInData={item.values}
                        scheduledData={item.values}
                    />
                </Suspense>
              ))}
        </Flex>
    );
};

export default RadialBarChart;
