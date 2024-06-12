import React, { Suspense } from 'react'
import { Col, Flex, Typography } from 'antd'
import { DonutChartData } from '../../data/DonutChartData';
import "./styles/dashBoardReports.css"

const { Text } = Typography;

type IDashboardReport = {
    heading: string;
}

const DonutChart = React.lazy(() => import("./DonutChart"))
const RadialBarChart = React.lazy(() => import("./RadialBarChart"))

const DashboardReport: React.FC<IDashboardReport> = ({ heading }) => {

    const typeOf = heading.includes("Witness") ? true : false;
  return (
    <Col span={24} className="dashboard-report-col">
        <Text className="dashboard-report-heading">{heading}</Text>
        {
            typeOf ? 
            // Witness Report Chart
            <>
            <Flex align="center" justify="center">
                {
                    DonutChartData.map((data, index) => {
                        return(
                            <Suspense fallback="" key={index}><DonutChart color={data.color} total={data.total} legend={data.legend} /></Suspense>
                        )
                    })
                }
            </Flex>
            </> : 
            // Semen Collection Chart
            <>
                <Suspense fallback="">
                    <RadialBarChart data={[30, 40, 50, 60, 70]}/>
                </Suspense>
            </>
        }
    </Col>
  )
}

export default DashboardReport