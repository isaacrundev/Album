"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type State = {
  user: { username: string; email: string }[];
  albums: Album[];
};

export type Album = {
  title: string;
  images: string[];
  id: string;
};

type Context = { state: State; setState: Dispatch<SetStateAction<State>> };

export const AppContext = createContext<Context | null>(null);

const ContextWrapper = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<State>({
    user: [{ username: "", email: "" }],
    albums: [{ title: "", images: [""], id: "" }],
  });

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Must be used with Provider");
  }
  return context;
};

export default ContextWrapper;
