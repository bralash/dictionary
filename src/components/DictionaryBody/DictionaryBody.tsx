import * as React from "react";
import Search from "../Search/Search";
import { useContext } from "react";
import { WordContext } from "../../contexts/word-context";

interface IDictionaryBodyProps {}

const DictionaryBody: React.FunctionComponent<IDictionaryBodyProps> = (
  props
) => {
  const [word, setWord] = React.useState<any[]>([]);

  return (
    <WordContext.Provider value={{word, setWord }}>
      <div className="Dictionary">
        <Search />
        
      </div>
    </WordContext.Provider>
  );
};

export default DictionaryBody;
