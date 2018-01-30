import React from "react";
import Paper from "material-ui/Paper";

const Answer = ({ nums, res, checkGuess }) => (
  <div>
    {nums
      .slice(2)
      .concat(res)
      .sort(() => 0.5 - Math.random())
      .map((a, i) => (
        <Paper
          key={i}
          className="answer"
          style={style.wrapper}
          zDepth={2}
          onClick={() => checkGuess(a)}
        >
          <div style={style.text}>{a}</div>
        </Paper>
      ))}
  </div>
);

const style = {
  wrapper: {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: "center",
    display: "inline-block",
    cursor: "pointer"
  },
  text: {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: '1.1em'
  }
};

export default Answer;
