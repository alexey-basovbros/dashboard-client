import { FC, PropsWithChildren, ReactNode } from "react";

const App: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return <div className="app-wrapper">
    {children}
  </div>
};

export {
  App
};