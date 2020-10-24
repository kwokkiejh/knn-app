import React, { useState, useEffect } from "react";
import { addTodo, deleteTodo } from "../redux/todos/actions";
import { Todo } from "../redux/todos/types";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

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
  todo: Todo;
  addTodo: typeof addTodo;
  deleteTodo: typeof deleteTodo;
}

const TodoCard = (props: Props) => {
  const classes = useStyles();

  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(-1);

  useEffect(() => {
    console.log(props.todo);
  }, []);

  const handleDisabledButton = (id: number) => {
    if (isEdit && selectedId !== id) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Box display="flex" justifyContent="flex-end" css={{ width: "100%" }}>
          <Box>
            <IconButton
              aria-label="edit"
              size="small"
              onClick={() => {
                setSelectedId(props.todo.id);
                setIsEdit(true);
              }}
              disabled={handleDisabledButton(props.todo.id)}
            >
              <EditOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-start" css={{ width: "100%" }}>
          <Box>
            <Typography className={classes.title} component="h2">
              {props.todo.title}
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.id} color="textSecondary" gutterBottom>
              #{props.todo.id}
            </Typography>
          </Box>
        </Box>
        <Typography className={classes.message} component="p">
          {props.todo.message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
