import React from 'react';
import { Col, Row, Typography, Divider } from 'antd';

import "./styles/semenCollectionData.css"

const { Title, Text } = Typography;

type ISemenCollectionCard = {
    checkedInData: Array<string>;
    scheduledData: Array<string>;
    title: string;
}

const SemenCollectionCard: React.FC<ISemenCollectionCard> = ({
    checkedInData,
    scheduledData,
    title
}) => {
    return (
        <Row justify="space-around" style={{ width: "100%"}}>
            <Col xs={24} lg={24}>
                <Title level={4} className="semen-collection-text">{title}</Title>
                <Row>
                    <Col span={24}>
                        <Text style={{ fontSize: "1.2cqmax" }}>New</Text>
                        <Title level={2} className="semen-value-text">{checkedInData[0]}</Title>
                    </Col>
                    <Divider />
                    <Col span={24}>
                        <Text style={{ fontSize: "1.2cqmax" }}>Follow Up</Text>
                        <Title level={2} className="semen-value-text">{scheduledData[1]}</Title>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default SemenCollectionCard;
