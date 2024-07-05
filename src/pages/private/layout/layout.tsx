import { FC, ReactElement } from "react";
import { Layout } from "antd";

interface PrivateLayoutProps {
  navbar?: ReactElement;
  content: ReactElement;
  sidebar?: ReactElement;
  footer?: ReactElement;
};

const PrivateLayout: FC<PrivateLayoutProps> = ({ navbar, content, sidebar, footer }): ReactElement => {
  return <Layout style={{ minHeight: "100vh" }}>
    { sidebar }
    <Layout>
      { navbar }
      { content }
      { footer }
    </Layout>
  </Layout>
};

export {
  PrivateLayout
};

export type {
  PrivateLayoutProps
};