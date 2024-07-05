import { FC, ReactElement } from "react";

import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

interface FooterProps {};

const Footer: FC<FooterProps> = (): ReactElement => {
  return <AntFooter>COPYRIGHT © 2024</AntFooter>
};

export {
  Footer
};