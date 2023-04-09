import React, { FC } from "react";

import "./Definition.scss";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

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
  let audio = props.phonetics.find(item => item.audio != "")
    console.log(audio);
  return (
    <div className="Definition">
      <div className="wordWrapper">
        <div className="word">
          <h1>{props.word}</h1>
          <span>{props.phonetic}</span>
        </div>
        { audio?.audio ? <AudioPlayer audio={audio.audio}  /> : ''}
      </div>
    </div>
  );
};

export default Definition;
