import React, { FC } from "react";

import "./Definition.scss";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import { WordMeaning } from "../Meaning/Meaning";
import { v4 as uuidv4, v5 as uuidv5 } from "uuid";

type Defined = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
};

type License = {
  name: string;
  url: string;
};

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

type Phonetic = {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: License;
};

const Definition: FC<Defined> = (props): JSX.Element => {
  let audio = props.phonetics.find((item) => item.audio != "");
  return (
    <div className="Definition">
      <div className="wordWrapper">
        <div className="word">
          <h1>{props.word}</h1>
          <span>{props.phonetic}</span>
        </div>
        {audio?.audio ? <AudioPlayer audio={audio.audio} /> : ""}
      </div>
      {props.meanings.map((item) => {
        return (
          <WordMeaning
            key={uuidv4()}
            partOfSpeech={item.partOfSpeech}
            definitions={item.definitions}
            synonyms={item.synonyms}
            antonyms={item.antonyms}
          />
        );
      })}
    </div>
  );
};

export default Definition;
