function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import { IconButton, Paper, Grid, Menu } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
export default class extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      anchorEl: null
    });
  }

  render() {
    const handleClick = event => {
      this.setState({
        anchorEl: event.currentTarget
      });
    };

    const handleClose = () => {
      this.setState({
        anchorEl: null
      });
    };

    let faces = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "😙", "😚", "🙂", "🤗", "🤔", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "😴", "😌", "🤓", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "🙁", "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩", "😬", "😰", "😱", "😳", "😵", "😠", "😇", "🤠", "🤡", "🤥", "😷", "🤒", "🤕", "🤢", "🤧", "😡", "😈", "👿", "👹", "👺", "💀", "👻", "👽", "👾", "🤖", "💩"];
    const {
      anchorEl
    } = this.state;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      "aria-controls": "simple-menu",
      "aria-haspopup": "true",
      onClick: handleClick,
      onMouseEnter: handleClick
    }, /*#__PURE__*/React.createElement(InsertEmoticonIcon, null)), /*#__PURE__*/React.createElement(Menu, {
      id: "simple-menu",
      anchorEl: anchorEl,
      keepMounted: true,
      open: Boolean(anchorEl),
      onClose: handleClose,
      onMouseLeave: handleClose
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true
    }, faces.map(function (el) {
      return /*#__PURE__*/React.createElement(Grid, {
        item: true,
        xs: 2,
        style: {
          fontSize: "25px"
        }
      }, el);
    }))));
  }

}
