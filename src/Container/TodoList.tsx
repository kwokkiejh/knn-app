import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { TODO_LIST } from "../constants";
import { RootState } from "../redux/store";
import { addTodo, deleteTodo, addSelectedTodo, clearSelectedTodo } from "../redux/todos/actions";
import TodoCard from "../Component/TodoCard";
import { Todo } from "../redux/todos/types";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import Typography from "@material-ui/core/Typography";

const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
  todo: state.todo,
});

const mapDispatchToProps = { addTodo, deleteTodo, addSelectedTodo, clearSelectedTodo };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  todoTitle: {
    marginTop: 0,
    color: "#000",
    fontSize: 32,
    fontWeight: "bold",
  },
  gridContainerTodos: {
    marginTop: 12,
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
      <Grid container direction="row" justify="space-between" spacing={1}>
        <Grid item>
          <Typography className={classes.todoTitle}>Todo List</Typography>
        </Grid>
        <Grid item>
          <IconButton
            aria-label="edit"
            size="medium"
            color="primary"
            onClick={() => props.addTodo({ id: 4, title: "New todo", message: "Dynamically add new todo" })}
          >
            <AddOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="space-between" spacing={1} className={classes.gridContainerTodos}>
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
