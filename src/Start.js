import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const Start = ({ togglePlay, text }) => (
  <div style={style.wrapper}>
    <RaisedButton
      style={style.start}
      label={text}
      primary={true}
      onClick={togglePlay}
    />
  </div>
);

const style = {
  wrapper: {
    marginTop: 35
  },
  start: {
    width: "30%",
    height: 50
  }
};

export default Start;
