import React, { useEffect, useState } from 'react'
import { Flex, Image, Tooltip, Typography } from 'antd'
import file from "../assets/folder.png"

import "./styles/dashBoardChip.css"

const { Text } = Typography;

type IDashboardChips = {
    title: string;
    value: string;
}
const DashBoardChips: React.FC<IDashboardChips> = ({ title, value }) => {
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

const getInnerWidth = () => {
    if(innerWidth >= 1024) {
        return 30
    }else if(innerWidth >= 425) {
        return 25
    } else if(innerWidth >=320) {
        return 20
    }else {
        return 35
    }
}

return (
    <Tooltip title={title}>
    <Flex align="center" className="dashBoard-chip-flexbox">
        <div id="chip-icon-div">
            <Image preview={false} src={file} width={getInnerWidth()} />
        </div>

        <div style={{ display: "flex" , flexDirection: "column"}}>
            <Text id="chip-title">{title}</Text>
            <Text id="chip-value">{value}</Text>
        </div>
    </Flex>
    </Tooltip>
  )
}

export default DashBoardChips