import React from "react";
import { IconButton, Paper, Grid } from "@material-ui/core";
class EmojiPicker extends React.Component {
  state = {};
  render() {
    let faces = [
      "😀",
      "😁",
      "😂",
      "🤣",
      "😃",
      "😄",
      "😅",
      "😆",
      "😉",
      "😊",
      "😋",
      "😎",
      "😍",
      "😘",
      "😗",
      "😙",
      "😚",
      "🙂",
      "🤗",
      "🤔",
      "😐",
      "😑",
      "😶",
      "🙄",
      "😏",
      "😣",
      "😥",
      "😮",
      "🤐",
      "😯",
      "😪",
      "😫",
      "😴",
      "😌",
      "🤓",
      "😛",
      "😜",
      "😝",
      "🤤",
      "😒",
      "😓",
      "😔",
      "😕",
      "🙃",
      "🤑",
      "😲",
      "🙁",
      "😖",
      "😞",
      "😟",
      "😤",
      "😢",
      "😭",
      "😦",
      "😧",
      "😨",
      "😩",
      "😬",
      "😰",
      "😱",
      "😳",
      "😵",
      "😡",
      "😠",
      "😇",
      "🤠",
      "🤡",
      "🤥",
      "😷",
      "🤒",
      "🤕",
      "🤢",
      "🤧",
      "😈",
      "👿",
      "👹",
      "👺",
      "💀",
      "👻",
      "👽",
      "👾",
      "🤖",
      "💩",
    ];

    return (
      <Paper>
        <Grid>
          {faces.map(function (el) {
            return (
              <Grid item xs={2}>
                <IconButton>{el}</IconButton>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    );
  }
}

export default EmojiPicker;
