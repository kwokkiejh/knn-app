import React from "react";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import { addTodo, deleteTodo, addSelectedTodo, clearSelectedTodo } from "../redux/todos/actions";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
  todo: state.todo,
});

const mapDispatchToProps = { addTodo, deleteTodo, addSelectedTodo, clearSelectedTodo };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const useStyles = makeStyles((theme) => ({
  homeTitle: {
    marginTop: 0,
    color: "#000",
    fontSize: 32,
    fontWeight: "bold",
  },
}));

const Home = (props: Props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row" justify="space-between" spacing={1}>
        <Grid item>
          <Typography className={classes.homeTitle}>Home</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
