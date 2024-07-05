import { FC, ReactElement } from "react";

import { Layout, Menu } from "antd";

const { Header } = Layout;

interface NavbarProps {};

const Navbar: FC<NavbarProps> = (): ReactElement => {
  return <Header>
    <Menu></Menu>
  </Header>
};

export {
  Navbar
};