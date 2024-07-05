import { FC, ReactElement, PropsWithChildren } from "react";
import { Layout } from "antd";

const { Content } = Layout;

interface PageProps extends PropsWithChildren {
  className?: string;
};

const Page: FC<PageProps> = ({ className, children }): ReactElement => {
  const classNames = [
    "page",
    className ? className : ""
  ].join(" ");

  return <Content>
    <div data-testid="page-wrapper" className={classNames}>
      { children }
    </div>
  </Content> 
};

export {
  Page
};

export type {
  PageProps
};