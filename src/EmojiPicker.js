import React from "react";
import { IconButton, Paper, Grid, Menu } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
export default class extends React.Component {
  //const [anchorEl, setAnchorEl] = React.useState(null);
  state={
    anchorEl:null,
  };
  render() {
    const handleClick = (event) => {
      this.setState({anchorEl:event.currentTarget});
    };

    const handleClose = () => {
      this.setState({anchorEl:null});
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
    const {anchorEl} = this.state;
    return (
      <>
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          onMouseEnter={handleClick}
        >
          <InsertEmoticonIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onMouseLeave={handleClose}
        >
          <Grid container>
            {faces.map(function (el) {
              return (
                <Grid item xs={2} style={{ fontSize: "25px" }}>
                  {el}
                </Grid>
              );
            })}
          </Grid>
        </Menu>
      </>
    );
  }
}
