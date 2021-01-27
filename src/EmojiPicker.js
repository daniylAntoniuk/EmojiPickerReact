import React from "react";
import { IconButton, Paper, Grid, Menu } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PropTypes from "prop-types";

export default class Emoji extends React.Component {
  //const [anchorEl, setAnchorEl] = React.useState(null);
  state = {
    anchorEl: null,
  };
  render() {
    const handleClick = (event) => {
      this.setState({ anchorEl: event.currentTarget });
    };

    const handleClose = () => {
      this.setState({ anchorEl: null });
    };

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
      "😡",
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
    const { anchorEl } = this.state;
    const { buttonColour } = this.props;
    return (
      <>
        <IconButton
          color={buttonColour == undefined ? "default" : buttonColour}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          //onMouseEnter={handleClick}
        >
          <InsertEmoticonIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          style={{ width: "100%" }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          //onMouseLeave={handleClose}
        >
          <Grid container style={{ width: "100%" }}>
            {faces.map(function (el) {
              return (
                <Grid item xs={2} style={{ fontSize: "25px" }}>
                  <IconButton>{el}</IconButton>
                </Grid>
              );
            })}
          </Grid>
        </Menu>
      </>
    );
  }
}
Emoji.propTypes = {
  buttonColour: PropTypes.oneOf(["primary", "secondary", "default"]),
};