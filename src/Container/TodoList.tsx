import React from "react";
import { connect } from "react-redux";
import { TODO_LIST } from "../constants";
import { RootState } from "../redux/store";
import { addTodo, deleteTodo } from "../redux/todos/actions";
import TodoCard from "../Component/TodoCard";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const mapStateToProps = (state: RootState) => ({
  todos: state.todos,
});

const mapDispatchToProps = { addTodo, deleteTodo };

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

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} elevation={1}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <TodoCard />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
        <Button variant="contained" color="secondary" onClick={() => props.addTodo(TODO_LIST[0])}>
          Add Todo
        </Button>
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
        <Button
          style={{ marginLeft: "4px" }}
          variant="contained"
          color="secondary"
          onClick={() => console.log(props.todos)}
        >
          Get Todo State
        </Button>
      </main>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
