import React from "react";
import Paper from "material-ui/Paper";

const Operation = ({ toggleOp, ops }) => (
  <div>
    <Paper
      onClick={() => toggleOp("add")}
      style={{
        ...style.wrapper,
        backgroundColor: ops.add ? "#00796B" : "",
        color: ops.add ? "#fff" : ""
      }}
      zDepth={2}
      circle={true}
    >
      <div style={style.text}>+</div>
    </Paper>
    <Paper
      onClick={() => toggleOp("sub")}
      style={{
        ...style.wrapper,
        backgroundColor: ops.sub ? "#00796B" : "",
        color: ops.sub ? "#fff" : ""
      }}
      zDepth={2}
      circle={true}
    >
      <div style={style.text}>-</div>
    </Paper>
    <Paper
      onClick={() => toggleOp("mul")}
      style={{
        ...style.wrapper,
        backgroundColor: ops.mul ? "#00796B" : "",
        color: ops.mul ? "#fff" : ""
      }}
      zDepth={2}
      circle={true}
    >
      <div style={style.text}>*</div>
    </Paper>
    <Paper
      onClick={() => toggleOp("div")}
      style={{
        ...style.wrapper,
        backgroundColor: ops.div ? "#00796B" : "",
        color: ops.div ? "#fff" : ""
      }}
      zDepth={2}
      circle={true}
    >
      <div style={style.text}>/</div>
    </Paper>
  </div>
);

const style = {
  wrapper: {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: "center",
    display: "inline-block"
  },
  text: {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "2em"
  }
};

export default Operation;
