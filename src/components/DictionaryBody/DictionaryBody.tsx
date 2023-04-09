import * as React from "react";
import { RiSearchLine } from "react-icons/ri";
import Definition from "../Definition/Definition";
import "./DictionaryBody.scss";
import axios from "axios";
import { v4 as uuidv4, v5 as uuidv5 } from "uuid";

interface IDictionaryBodyProps {}

const DictionaryBody: React.FunctionComponent<IDictionaryBodyProps> = (
  props
) => {
  const [word, setWord] = React.useState<any[]>([]);

  const handleSubmit = async (e: any) => {
    if (e.target.value != "" && e.charCode === 13) {
      const baseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${e.target.value}`;
      try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        setWord(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const newSubmit = (e: any) => {
    if (e.target.value != "" && e.charCode === 13) {
      axios
        .get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${e.target.value}`
        )
        .then((res) => {
          setWord((prev) => res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="Dictionary">
      <div className="Search">
        <input type="text" title="Search word" onKeyPress={newSubmit} />
        <RiSearchLine className="searchIcon" color="#A445ED" />
      </div>
      <div className="results">
        {word.map((w) => {
          return <Definition key={uuidv4()} {...w} />;
        })}
      </div>
    </div>
  );
};

export default DictionaryBody;
