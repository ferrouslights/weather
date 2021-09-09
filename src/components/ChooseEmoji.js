import React from "react";
import { Typography } from "@material-ui/core";


const emoji = require("emoji-dictionary");

//Will probably add more emojis in the future

const emojis = [
  { key: 0, emoji: "umbrella" },
  { key: 1, emoji: "cowboy_hat_face" },
];

function ChooseEmoji(props) {
  const condition = props.condition;
  if (condition !== 1000) {
    return <Typography variant="h1">{emoji.getUnicode(emojis[0].emoji)}</Typography>;
  } else {
    return (
      <Typography variant="h1">
        {emoji.getUnicode(emojis[1].emoji)}
      </Typography>
    );
  }
}


export default ChooseEmoji;