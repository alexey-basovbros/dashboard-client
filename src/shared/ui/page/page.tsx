import { FC, ReactElement, PropsWithChildren } from "react";

interface PageProps extends PropsWithChildren {
  className?: string;
};

const Page: FC<PageProps> = ({ className, children }): ReactElement => {
  const classNames = [
    "page",
    className ? className : ""
  ].join(" ");

  return <div data-testid="page-wrapper" className={classNames}>
    { children }
  </div>
};

export {
  Page
};

export type {
  PageProps
};