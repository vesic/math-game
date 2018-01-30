import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Snackbar from "material-ui/Snackbar";
import HighScore from "./HighScore";
import Timer from "./Timer";
import { getRandomInt, isDecimal } from "./util";
import "./App.css";
import Guess from "./Guess";
import Answer from "./Answer";
import Level from "./Level";
import GameOver from "./GameOver";

class Game extends Component {
  state = {
    gameOver: false,
    level: 1,
    sublevel: 1,
    correct: 0,
    open: false,
    gameOverDialog: false
  };

  setRandomOp = () => {
    const ops = [];
    Object.keys(this.props.ops).forEach(o => {
      if (this.props.ops[o]) ops.push(o);
    });
    const op = ops[getRandomInt(ops.length)];
    this.setState({
      op: this.selectOp(op)
    });
  };

  selectOp = op => {
    switch (op) {
      case "add":
        return "+";
      case "sub":
        return "-";
      case "mul":
        return "*";
      case "div":
        return "/";
      default:
        return "";
    }
  };

  setRandomNums = () => {
    const nums = Array(5)
      .fill()
      .map(n => getRandomInt(Math.pow(10, this.props.diff + 0.2)));
    this.setState({ nums });
  };

  checkGuess = guess => {
    const { op, nums } = this.state;
    let res = op && eval(`${nums[0]} ${op} ${nums[1]}`);
    res = isDecimal(res);
    guess === res ? this.guessCorrect() : this.guessWrong();
  };

  guessCorrect = () => {
    this.setRandomNums();
    this.setRandomOp();
    this.timer.resetTimer();
    this.setLevel();
    this.setState({ correct: this.state.correct + 1 });
  };

  guessWrong = () => {
    clearInterval(this.interval);
    this.setState({ gameOverDialog: true });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  setLevel = () => {
    const { sublevel } = this.state;
    if (sublevel < 3) {
      this.setState(prev => ({
        sublevel: prev.sublevel + 1
      }));
    } else {
      this.setState(prev => ({
        level: prev.level + 1,
        sublevel: 1,
        open: true
      }));
    }
  };

  componentDidMount() {
    this.setRandomOp();
    this.setRandomNums();
  }

  handleGameOver = () => {
    this.setState({ gameOverDialog: false, gameOver: true })
  }

  handleTimeOver = () => {
    this.setState({ gameOverDialog: true })
  }

  render() {
    const { nums, op, level, open, gameOver, gameOverDialog, correct } = this.state;
    let res = op && eval(`${nums[0]} ${op} ${nums[1]}`);
    res = isDecimal(res);
    return gameOver ? (
      <HighScore togglePlay={this.props.togglePlay} />
    ) : (
      <div className="App">
        <AppBar title="Math Game" showMenuIconButton={false} />
        <GameOver
          correct={correct}
          level={level}
          open={gameOverDialog} 
          gameOver={this.handleGameOver} 
        />
        <Timer
          timeOver={this.handleTimeOver}
          ref={c => {
            this.timer = c;
          }}
        />
        {nums && <Guess key={Math.random()} l={nums[0]} r={nums[1]} op={op} />}
        <h1>=</h1>
        {nums && <Answer nums={nums} res={res} checkGuess={this.checkGuess} />}
        <Level level={level} />
        <Snackbar
          open={open}
          message={`Level ${level}`}
          autoHideDuration={1000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }

  // log = () => console.log(this.state);
}

export default Game;
