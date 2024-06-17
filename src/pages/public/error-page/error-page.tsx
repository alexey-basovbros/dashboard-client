import { FC, ReactNode } from "react";
import { useRouteError } from "react-router-dom";

interface Props {};

const ErrorPage: FC<Props> = (): ReactNode => {
  const error: any = useRouteError();

  return <div className="page error">
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      <i>{ error.statusText || error.message }</i>
    </p>
  </div>
};

export {
  ErrorPage
};