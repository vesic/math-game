import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class GameOver extends React.Component {
  render() {
    const { open, gameOver, correct, level } = this.props;
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={gameOver} />
    ];

    return (
      <div>
        <Dialog title="Game Over!" actions={actions} modal={false} open={open}>
          <h2>{correct} correct answers</h2>
          <h3>Level {level}</h3>
        </Dialog>
      </div>
    );
  }
}

export default GameOver;
