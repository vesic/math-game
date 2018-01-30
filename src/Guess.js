import React from "react";
import { Card, CardText } from "material-ui/Card";

const Guess = ({ l, r, op }) => (
  <Card style={style.card}>
    <CardText>
      <div className={["animated", "fadeIn"].join(" ")} style={style.text}>
        {`${l} ${op} ${r}`}
      </div>
    </CardText>
  </Card>
);

const style = {
  text: {
    fontSize: "6.5em",
    opacity: 1,
    transition: "opacity 1s"
  },
  card: {
    width: "60%",
    margin: "0 auto",
    marginTop: 20
  }
};

export default Guess;
