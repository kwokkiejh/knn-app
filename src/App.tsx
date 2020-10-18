import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import TodoList from "./Container/TodoList";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import store from "./redux/store";

const themeLight = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff4400",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    background: {
      default: "#fff5d7",
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

const App = (props: any) => {
  return (
    <Provider store={store}>
      <div>
        <MuiThemeProvider theme={themeLight}>
          <CssBaseline />
          <TodoList />
        </MuiThemeProvider>
      </div>
    </Provider>
  );
};

export default App;
