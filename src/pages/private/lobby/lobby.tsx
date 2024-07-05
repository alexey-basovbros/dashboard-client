import { FC, ReactNode } from "react";
import { Page } from "@shared-ui";

interface Props {};

const LobbyPage: FC<Props> = (): ReactNode => {
  return <Page className="lobby">
    Lobby page
  </Page>
};

export {
  LobbyPage
};