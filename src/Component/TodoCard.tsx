import React, { useEffect } from "react";
import { addTodo } from "../redux/todos/actions";
import { Todo } from "../redux/todos/types";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  button: {
    marginTop: 16,
  },
  id: {
    marginLeft: 4,
    fontSize: 14,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  message: {
    marginTop: 12,
    fontSize: 16,
  },
});

interface Props {
  todoIndex: Todo;
  addTodo: typeof addTodo;
  deleteTodo: (id: number) => void;
  addSelectedTodo: (todo: Todo) => void;
  clearSelectedTodo: () => void;
  disabledButton: boolean;
  selectedTodoId: number;
}

const TodoCard = (props: Props) => {
  const classes = useStyles();

  useEffect(() => {
    //console.log(props.addTodo(props.todoIndex));
    //console.log(props.disabledButton);
  }, []);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container justify="flex-end">
          {props.selectedTodoId === props.todoIndex.id ? (
            <>
              <Grid item xs={1}>
                <IconButton
                  aria-label="edit"
                  size="small"
                  color="primary"
                  onClick={() => {
                    props.deleteTodo(props.todoIndex.id);
                  }}
                >
                  <DeleteForeverOutlinedIcon fontSize="small" />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton aria-label="edit" size="small" color="secondary" onClick={() => {}}>
                  <SaveOutlinedIcon fontSize="small" />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label="edit"
                  size="small"
                  color="default"
                  onClick={() => {
                    props.clearSelectedTodo();
                  }}
                >
                  <ClearOutlinedIcon fontSize="small" />
                </IconButton>
              </Grid>
            </>
          ) : (
            <Grid item xs={1}>
              <IconButton
                aria-label="edit"
                size="small"
                onClick={() => {
                  props.addSelectedTodo(props.todoIndex);
                }}
                disabled={props.disabledButton}
              >
                <EditOutlinedIcon fontSize="small" />
              </IconButton>
            </Grid>
          )}
        </Grid>
        <Box display="flex" justifyContent="flex-start" css={{ width: "100%" }}>
          <Box>
            <Typography className={classes.title} component="h2">
              {props.todoIndex.title}
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.id} color="textSecondary" gutterBottom>
              #{props.todoIndex.id}
            </Typography>
          </Box>
        </Box>
        <Typography className={classes.message} component="p">
          {props.todoIndex.message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
