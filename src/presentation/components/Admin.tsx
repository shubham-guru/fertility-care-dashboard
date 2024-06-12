import React, { Suspense, useEffect, useState } from 'react'
import { Col, DatePicker, Divider, Flex, Row, Segmented, Table, Typography } from 'antd'
import type { DatePickerProps } from 'antd';
import { DashBoardChipData } from '../../data/DashBoardChipData';
import { patientColumns } from '../../data/PatientTableColumns';
import dayjs from 'dayjs';

import "./styles/admin.css"
import { PatientData } from '../../data/PatientData';

const { Text, Title } = Typography;

const DashboardReport = React.lazy(() => import("../hocs/DashboardReport"))
const DashBoardChips = React.lazy(() => import("../hocs/DashBoardChips"))
const UserDropDown = React.lazy(() => import("../hocs/UserDropDown"))

const Admin = () => {

  const dateFormat = 'YYYY/MM/DD';

  const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

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

  return (
    <Row gutter={[0, 20]}>
      {/* Header */}
      <Col span={24}>
        <Flex justify='space-between' align="center">
          <Text className="admin-heading">Admin</Text>
          <Suspense fallback=""><UserDropDown /></Suspense>
        </Flex>
      </Col>

      {/* Body */}
      <Col span={24} className="dashboard-main-layout">

        <Flex vertical={innerWidth <= 500 ? true : false} justify="space-between" align="center">
          <div>
            <Text id="summary">Summary</Text>
          </div>

          <div>
            <Segmented<string>
              className="segemented"
              options={['Day', 'Month', 'Year']}
              onChange={(value) => {
                console.log(value);
              }}
            />
            <DatePicker onChange={onDateChange} defaultValue={dayjs('2024/06/11', dateFormat)} format={dateFormat} />
          </div>
        </Flex>

        <Divider />

        {/* Dashboard  Head Chip */}
        <Row gutter={[10, 10]}>
          {
            DashBoardChipData.map((item, index: number) => {
              return (
                <Col xs={12} lg={6} key={index}>
                  <Suspense fallback=""><DashBoardChips title={item.title} value={item.value} /></Suspense>
                </Col>
              )
            })
          }
        </Row>

        {/* Dashboard Report Cards and Graphs */}
        <Row gutter={10}>
          <Col md={24} lg={12}>
            <Suspense fallback=""><DashboardReport heading="Witness Report" /></Suspense>
          </Col>
          <Col md={24} lg={12}>
            <Flex align="center">
              <Suspense fallback=""><DashboardReport heading="Semen Collection" /></Suspense>
            </Flex>
          </Col>
        </Row>

        <Row style={{ marginTop: 20 }}>
          <Title level={4} style={{ fontSize: "2cqmax" }}>Today's Pending Patients</Title>
          <Col span={24}>
            <Table columns={patientColumns} dataSource={PatientData} scroll={{ x: 'max-content' }} pagination={false} /> 
          </Col>
        </Row>
      </Col>

    </Row>
  )
}

export default Admin