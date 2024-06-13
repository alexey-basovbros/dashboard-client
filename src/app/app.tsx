import { FC, ReactNode, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {};

const App: FC<Props> = ({ children }): ReactNode => {
  return <div className="app-wrapper">
    { children }
  </div>
};

export {
  App
};