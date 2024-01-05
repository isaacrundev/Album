"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
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

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://my-json-server.typicode.com/isaacrundev/Album/data"
        );
        const result = await res.json();
        setState(result);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

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
