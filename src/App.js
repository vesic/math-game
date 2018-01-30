import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import "./App.css";
import Game from "./Game";
import Start from "./Start";
import Difficulty from "./Difficulty";
import Operation from "./Operation";

class App extends Component {
  state = {
    ops: {
      add: true,
      sub: false,
      mul: false,
      div: false
    },
    diff: 1,
    isPlaying: false
  };

  toggleOp = op => {
    const ops = { ...this.state.ops, [op]: !this.state.ops[op] };
    this.setState({ ops });
  };

  setDifficulty = diff => {
    this.setState({ diff });
  };

  togglePlay = () => this.setState({ isPlaying: !this.state.isPlaying });

  render() {
    return this.state.isPlaying ? (
      <Game
        ops={this.state.ops}
        diff={this.state.diff}
        togglePlay={this.togglePlay}
      />
    ) : (
      <div className="App">
        <AppBar title="Math Game" showMenuIconButton={false} />
        <h2 style={{ marginBottom: -5 }}>*Operations*</h2>
        <Operation toggleOp={this.toggleOp} ops={this.state.ops} />
        <h2 style={{ marginBottom: -5 }}>*Difficulty*</h2>
        <Difficulty setDifficulty={this.setDifficulty} diff={this.state.diff} />
        <Start togglePlay={this.togglePlay} text="Start" />
      </div>
    );
  }
}

export default App;
