import React from "react";
import playBtn from "./../../assets/images/icon-play.svg";
import "./AudioPlayer.scss";

type Props = {
  audio: string;
};

const AudioPlayer = (props: Props) => {
  let audio = new Audio(props.audio);
  const start = () => {
    audio.play();
  };
  return (
    <div className="Audio" onClick={start}>
      <img src={playBtn} alt="Play audio" />
    </div>
  );
};

export default AudioPlayer;
