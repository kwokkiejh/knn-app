import React, { useEffect } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import "./App.css";
import Home from "./Container/Home";
import TodoList from "./Container/TodoList";
import Sidebar from "./Component/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";

const themeLight = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff4400",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#fff",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    background: {
      default: "#ffffff",
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "ffffff",
        color: "000000",
      },
    },
  },
});

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#ffffff",
  },
  toolbarFont: {
    marginLeft: 12,
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content2: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    padding: theme.spacing(1),
    marginTop: 64,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const App = (props: RouteComponentProps) => {
  const classes = useStyles();
  const { match, location, history } = props;

  useEffect(() => {
    console.log(props);
    console.log("you are now at " + location.pathname);
    console.log();
  }, []);

  const nav = () => {
    history.push(location.pathname);
    console.log(history);
  };

  return (
    <MuiThemeProvider theme={themeLight}>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar} elevation={0}>
          <Toolbar>
            <Avatar alt="Ares Maltipoo" src="/iconic.png" />
            <Typography className={classes.toolbarFont} variant="h6" noWrap>
              Kwok N Niv
            </Typography>
          </Toolbar>
          <Divider />
        </AppBar>
        <Sidebar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <TodoList />
            </Route>
          </Switch>
        </main>
      </div>
    </MuiThemeProvider>
  );
};

export default withRouter(App);
