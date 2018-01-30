import React from "react";
import Paper from "material-ui/Paper";

const Difficulty = ({ setDifficulty, diff }) => (
  <div>
    <Paper
      style={{ ...style.wrapper,
        backgroundColor: diff === 1 ? "#0277BD" : "",
        color: diff === 1 ? "#fff": ""
      }}
      zDepth={2}
      onClick={() => setDifficulty(1)}
    >
      <div style={style.text}>Easy</div>
    </Paper>
    <Paper
      style={{ ...style.wrapper,
        backgroundColor: diff === 2 ? "#0277BD" : "",
        color: diff === 2 ? "#fff": "" 
      }}
      zDepth={2}
      onClick={() => setDifficulty(2)}
    >
      <div style={style.text}>Medium</div>
    </Paper>
    <Paper
      style={{ ...style.wrapper,
        backgroundColor: diff === 3 ? "#0277BD" : "",
        color: diff === 3 ? "#fff": "" 
      }}
      zDepth={2}
      onClick={() => setDifficulty(3)}
    >
      <div style={style.text}>Hard</div>
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
    transform: "translateY(-50%)"
  }
};

export default Difficulty;
