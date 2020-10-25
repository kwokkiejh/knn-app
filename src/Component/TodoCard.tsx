import React, { useEffect } from "react";
import { addTodo, deleteTodo, addSelectedTodo, clearSelectedTodo } from "../redux/todos/actions";
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

const useStyles = makeStyles({
  root: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  id: {
    marginLeft: 4,
    fontSize: 14,
  },
  title: {
    fontSize: 14,
  },
  message: {
    marginTop: 12,
    fontSize: 18,
  },
});

interface Props {
  todoIndex: Todo;
  addTodo: typeof addTodo;
  deleteTodo: typeof deleteTodo;
  addSelectedTodo: (todo: Todo) => void;
  clearSelectedTodo: () => void;
  disabledButton: boolean;
  selectedTodoId: number;
}

const TodoCard = (props: Props) => {
  const classes = useStyles();

  useEffect(() => {
    //console.log(props.addTodo(props.todoIndex));
    console.log(props.disabledButton);
  }, []);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Box display="flex" justifyContent="flex-end" css={{ width: "100%" }}>
          {props.selectedTodoId === props.todoIndex.id ? (
            <>
              <Box>
                <IconButton aria-label="edit" size="small" onClick={() => {}}>
                  <SaveOutlinedIcon fontSize="small" />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  aria-label="edit"
                  size="small"
                  onClick={() => {
                    props.clearSelectedTodo();
                  }}
                >
                  <ClearOutlinedIcon fontSize="small" />
                </IconButton>
              </Box>
            </>
          ) : (
            <Box>
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
            </Box>
          )}
        </Box>
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
