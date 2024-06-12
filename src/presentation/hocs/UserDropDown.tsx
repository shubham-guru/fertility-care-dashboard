import { Flex, Image, Typography } from 'antd'
import userImg from "../assets/user.jpg"
import { DownOutlined } from '@ant-design/icons';

const { Text } = Typography;
const UserDropDown = () => {
  
  return (
    <Flex align='center' justify='space-between' style={{ width: "13cqmax" }}>
        <Image preview={false} src={userImg} width={50} className="user-img" />
        <Flex vertical>
            <Text className="user-name">Kate Russell</Text>
            <Text className="user-post">Receptionist</Text>
        </Flex>
        <DownOutlined />
    </Flex>
  )
}

export default UserDropDown