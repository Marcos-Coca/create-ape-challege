import { createContext, ReactElement } from "react";
import { Context, User } from "./types";

interface Props {
  children: ReactElement;
  user: User | null;
  setUser: (user: User | null) => void;
}

const SessionContext = createContext({} as Context);

export function SessionContextProvider({ children, user, setUser }: Props) {
  return (
    <SessionContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export default SessionContext;
