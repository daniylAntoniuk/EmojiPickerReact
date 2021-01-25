import React from "react";
import { IconButton, Paper, Grid } from "@material-ui/core";

const EmojiPicker = props => {
  let faces = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "😙", "😚", "🙂", "🤗", "🤔", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "😴", "😌", "🤓", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "🙁", "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩", "😬", "😰", "😱", "😳", "😵", "😡", "😠", "😇", "🤠", "🤡", "🤥", "😷", "🤒", "🤕", "🤢", "🤧", "😈", "👿", "👹", "👺", "💀", "👻", "👽", "👾", "🤖", "💩"];
  return /*#__PURE__*/React.createElement(Paper, null, /*#__PURE__*/React.createElement(Grid, {
    container: true
  }, faces.map(function (el) {
    return /*#__PURE__*/React.createElement(Grid, {
      item: true,
      sm: 2,
      md: 12,
      style: {
        fontSize: "25px"
      }
    }, el);
  })));
};

export default EmojiPicker;
