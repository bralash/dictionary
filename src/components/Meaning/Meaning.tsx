import React from "react";
import "./Meaning.scss";
import { v4 as uuidv4, v5 as uuidv5 } from "uuid";

type Meaning = {
  partOfSpeech: string;
  definitions: DefinitionElement[];
  synonyms: string[];
  antonyms: any[];
};

type DefinitionElement = {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example?: string;
};

const Meaning = (props: Meaning) => {
  console.log(props.definitions);
  return (
    <div className="Meaning">
      <div className="speech">
        <div className="partOfSpeech">{props.partOfSpeech}</div>
        <div className="spacer"></div>
      </div>

      <div className="definitions">
        <h3>Meaning</h3>
        <ul>
          {props.definitions.map((item) => {
            return <li key={uuidv4()}>{item.definition}</li>;
          })}
        </ul>
      </div>
      {props.synonyms.length > 0 ? (
        <div className="synonyms">
          <span className="label">Synonyms</span> <span className="synonym">{props.synonyms}</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { Meaning as WordMeaning };
