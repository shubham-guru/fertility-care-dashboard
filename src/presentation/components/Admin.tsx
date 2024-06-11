import React from 'react'
import { Col, Flex, Row, Typography } from 'antd'
import UserDropDown from '../hocs/UserDropDown';

import "./styles/admin.css"

const { Text } = Typography;

const Admin = () => {
  return (
    <Row>
        <Col span={24}>
            <Flex justify='space-between'>
                <Text className="admin-heading">Admin</Text>
                <UserDropDown />
            </Flex>
        </Col>
    </Row>
  )
}

export default Admin