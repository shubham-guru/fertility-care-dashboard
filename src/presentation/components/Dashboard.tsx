import React, { Suspense, useState } from 'react'
import { Col, Row } from 'antd'

import "./styles/dashboard.css"

// Lazy Loading Components
 const SideBar = React.lazy(() => import('../hocs/Sidebar'));
 const Admin = React.lazy(() => import('./Admin'));
 const Reception = React.lazy(() => import('./Reception'));
 const Surgery = React.lazy(() => import('./Surgery'));

const Dashboard = () => {

    const [menuId, setMenuId] = useState<number>(0)

    const getSelected = (id: number) => {
        setMenuId(id)
    }

    // Conditionally render the Component on menu change
    const renderComponent = () => {
        switch (menuId) {
            case 0:
                return <Suspense fallback=""><Admin /></Suspense>;
            case 1: 
                return <Suspense fallback=""><Reception /></Suspense>;
            case 2: 
                return <Suspense fallback=""><Surgery /></Suspense>;
            default:
                return <Suspense fallback=""><Admin /></Suspense>;
        }
    }
  return (
    <Row>
        <Col xs={20} md={15} lg={5}>
            <SideBar selectedMenu={(id: number) => getSelected(id)} />
        </Col>

        <Col span={19} className="dashboard-main-components">
            {renderComponent()}
        </Col>
    </Row>
  )
}

export default Dashboard