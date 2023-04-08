import { createContext } from "react";

export const WordContext = createContext({
  word: <any[]>[],
  setWord: (word: any) => {},
});
