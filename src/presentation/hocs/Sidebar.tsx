import React, { useState } from 'react'
import { Col, Flex, Row, Typography, Image } from 'antd';
import { SideBarMenus } from '../../data/SideBarMenus';
import logo from "../assets/logo.png"

import "./styles/sidebar.css"

const { Text } = Typography;

type ISideBar = {
    selectedMenu: (id: number) => void
}

const Sidebar: React.FC<ISideBar> = ({ selectedMenu }) => {

    const [selected, setSelected] = useState<number>(0);

    const handleMenuClick = (index: number) => {
        setSelected(index);
        selectedMenu(index);
    };

    return (
        <Row className="sidebar-row">
            <Image preview={false} src={logo} />
            {
                SideBarMenus.map((menus, index: number) => {
                    const IconComponent = menus.icon;
                    return (
                        <Col key={index} span={24}
                            className={`sidebar-menu-col ${selected === index ? 'selected' : ''}`}
                            onClick={() => handleMenuClick(index)}
                        >
                            <Flex align="center" className="sidebar-flexbox">
                                <IconComponent className={`icon-component ${selected === index ? 'selected' : ''}`} />
                                <Text id="menus-text">{menus.name}</Text>
                            </Flex>
                        </Col>
                    )
                })
            }
        </Row>
    );
}

export default Sidebar