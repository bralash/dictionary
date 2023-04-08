import * as React from "react";
import "./Search.scss";
import { RiSearchLine } from "react-icons/ri";
import { useContext } from "react";
import { WordContext } from "../../contexts/word-context";

interface ISearchProps {}

const Search: React.FunctionComponent<ISearchProps> = (props) => {
  const { word, setWord } = useContext(WordContext);

  const handleSubmit = async (e: any) => {
    if (e.charCode === 13) {
      const baseUrl =
        `https://api.dictionaryapi.dev/api/v2/entries/en/${e.target.value}`;
      try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        setWord(data)
        
        console.log(word);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="Search">
      <input type="text" title="Search word" onKeyPress={handleSubmit} />
      <RiSearchLine className="searchIcon" color="#A445ED" />
    </div>
  );
};

export default Search;
