import React, { ReactNode } from 'react'
import { Col, Row } from 'antd';

type ILayoutPage = {
    children: ReactNode;
}
const LayoutPage: React.FC<ILayoutPage> = ({ children }) => {
    
  return (
    <Row>
      <Col span={24}>
        {children}
      </Col>
    </Row>
  )
}

export default LayoutPage