import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { TODO_LIST } from "../constants";
import { RootState } from "../redux/store";
import { addTodo, deleteTodo, addSelectedTodo, clearSelectedTodo } from "../redux/todos/actions";
import TodoCard from "../Component/TodoCard";
import { Todo } from "../redux/todos/types";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
  todo: state.todo,
});

const mapDispatchToProps = { addTodo, deleteTodo, addSelectedTodo, clearSelectedTodo };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const TodoList = (props: Props) => {
  const classes = useStyles();
  const [isEditable, setIsEditable] = useState(true);
  const [selectedTodoId, setSelectedTodoId] = useState(-1);

  useEffect(() => {
    TODO_LIST.map((todo: Todo) => props.addTodo(todo));
  }, []);

  const handleIsDisabledButton = (todo: Todo) => {
    return !isEditable && todo !== props.todo.todo;
  };

  const handleDeleteSelectedTodo = (id: number) => {
    props.deleteTodo(id);
    handleClearSelectedTodo();
  };

  const handleAddSelectedTodo = (todo: Todo) => {
    props.addSelectedTodo(todo);
    setIsEditable(false);
    setSelectedTodoId(todo.id);
  };

  const handleClearSelectedTodo = () => {
    props.clearSelectedTodo();
    setIsEditable(true);
    setSelectedTodoId(-1);
  };

  return (
    <div>
      <Grid container direction="row" justify="flex-start" spacing={1}>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => props.addTodo({ id: 4, title: "New todo", message: "Dynamically add new todo" })}
          >
            Add Todo
          </Button>
        </Grid>
        <Grid item>
          <Button
            style={{ marginLeft: "4px" }}
            variant="contained"
            color="secondary"
            onClick={() => {
              props.deleteTodo(TODO_LIST[0].id);
            }}
          >
            Delete Todo
          </Button>
        </Grid>
        <Grid item>
          <Button
            style={{ marginLeft: "4px" }}
            variant="contained"
            color="secondary"
            onClick={() => {
              console.log(props.todo);
              console.log(props.todos);
            }}
          >
            Get Todo State
          </Button>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={1}>
        {props.todos.todos.map((todo: Todo, index: number) => (
          <Grid item xs={12} md={4} lg={4} key={index}>
            <TodoCard
              todoIndex={todo}
              addTodo={(todo: Todo) => props.addTodo(todo)}
              deleteTodo={(id: number) => handleDeleteSelectedTodo(id)}
              addSelectedTodo={(todo: Todo) => handleAddSelectedTodo(todo)}
              clearSelectedTodo={() => handleClearSelectedTodo()}
              disabledButton={handleIsDisabledButton(todo)}
              selectedTodoId={selectedTodoId}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
