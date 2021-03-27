import React from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

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

const NavBar = (props: any) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar>
          <Avatar alt="Ares Maltipoo" src="/iconic.png" />
          <Typography className={classes.toolbarFont} variant="h6" noWrap>
            Kwok N Niv
          </Typography>
        </Toolbar>
        <Divider />
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
            {["Feature 1", "Feature 2", "Feature 3", "Todo"].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default NavBar;
