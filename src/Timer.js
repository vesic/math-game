import React, { Component } from "react";
import LinearProgress from "material-ui/LinearProgress";

class Timer extends Component {
  state = {
    completed: 0
  };

  resetTimer = () => {
    this.setState({ completed: 0 });
    clearInterval(this.timer);
    this.progress(0);
  };

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(20), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({ completed: 100 });
      this.props.timeOver();
    } else {
      this.setState({ completed });
      const diff = 20; // inc
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    const { completed } = this.state;
    return (
      <div style={style.wrapper}>
        <h3>Time left:</h3>
        <LinearProgress mode="determinate" value={completed} />
      </div>
    );
  }
}

const style = {
  wrapper: {
    width: "60%",
    margin: "0 auto"
  }
};

export default Timer;
