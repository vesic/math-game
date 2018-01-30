import React from "react";
import { Card, CardText } from "material-ui/Card";

const Guess = ({ l, r, op }) => (
  <Card style={style.card}>
    <CardText style={style.text}>{`${l} ${op} ${r}`}</CardText>
  </Card>
);

const style = {
  text: {
    fontSize: "6.5em"
  },
  card: {
    width: "60%",
    margin: "0 auto",
    marginTop: 20
  }
};

export default Guess;
