import { FC, ReactNode } from "react";

interface LayoutProps {
  content: ReactNode
};

const Layout: FC<LayoutProps> = ({ content }): ReactNode => {
  return <div className="layout private">
    {content}
  </div>
};

export {
  Layout
};

export type {
  LayoutProps
};