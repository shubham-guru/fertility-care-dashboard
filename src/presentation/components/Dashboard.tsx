import React, { Suspense, useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons"

import "./styles/dashboard.css"

// Lazy Loading Components
const SideBar = React.lazy(() => import('../hocs/Sidebar'));
const Admin = React.lazy(() => import('./Admin'));
const Reception = React.lazy(() => import('./Reception'));
const Surgery = React.lazy(() => import('./Surgery'));

const Dashboard = () => {

    const [menuId, setMenuId] = useState<number>(0);
    const [isClicked, setIsClicked] = useState<boolean>(false);
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
            <Col xs={isClicked ? 0 : 20} md={5} lg={5}>
                <SideBar selectedMenu={(id: number) => getSelected(id)} />
                {(innerWidth < 450 && !isClicked) ? (
                    <RightCircleOutlined
                        id="side-bar-icon"
                        onClick={() => setIsClicked(!isClicked)}
                        style={{ fontSize: '24px' }}
                    />
                ) : null}
            </Col>

            <Col xs={isClicked ? 24 : 0} md={19} lg={19} className="dashboard-main-components">
                {renderComponent()}
                {
                    (isClicked && innerWidth < 450) ? (
                        <LeftCircleOutlined
                            onClick={() => setIsClicked(!isClicked)}
                            id="side-bar-icon2"
                            style={{ fontSize: '24px' }}
                        />
                    ) : null
                }
            </Col>
        </Row>
    )
}

export default Dashboard