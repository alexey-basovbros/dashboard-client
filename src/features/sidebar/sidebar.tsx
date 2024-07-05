import { FC, ReactElement, useState } from "react";

import { Layout, Menu } from "antd";
import { 
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
 } from "@ant-design/icons"

const { Sider } = Layout;

interface SidebarProps {};
function getItem(label: string, key: string, icon?: ReactElement, children?: any[]) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const Sidebar: FC<SidebarProps> = (): ReactElement => {
  const [ collapsed, setCollapsed ] = useState(false);

  return <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
    <div className="demo-logo-vertical" />
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
  </Sider>
};

export {
  Sidebar
};