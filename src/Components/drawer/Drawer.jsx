import React from "react";
import "./Drawerstyle.scss";
import Sidenav from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton, Typography, Divider } from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SwapCallsIcon from "@material-ui/icons/SwapCalls";
import AppsIcon from "@material-ui/icons/Apps";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchor: "left",
      drawerOpen: false,
      drawerContent: "oreo",
      left: "0px",
    };
  }

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };
  handleDrawerContent = (contentOf) => {
    this.setState({ drawerContent: contentOf });
    this.state.drawerContent === "0px"
      ? this.setState({ left: "400px" })
      : this.setState({ left: "0px" });
  };

  render() {
    let drawerContent =
      this.state.drawerContent === "oreo" ? (
        <div className="menuContent">
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            id="nested-list-subheader"
            subheader={<ListSubheader component="div">-- Main</ListSubheader>}
          >
            <div className="sideBarList">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon style={{ fontSize: 17 }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AppsIcon style={{ fontSize: 17 }} />
                </ListItemIcon>
                <ListItemText primary="App" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ShoppingCartIcon style={{ fontSize: 17 }} />
                </ListItemIcon>
                <ListItemText primary="Ecommerce" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SwapCallsIcon style={{ fontSize: 17 }} />
                </ListItemIcon>
                <ListItemText primary="User Interface (UI)" />
              </ListItem>
            </div>
          </List>
        </div>
      ) : (
        <div className="userProfile" style={{ left: this.state.left }}>
          <div className="flexColumn userData">
            <div className="userImg">
              <img src="../../Assets/profileImg.jpg" width="100px" />
            </div>
            <Typography variant="h5" gutterBottom>
              Micheal
            </Typography>
            <Typography variant="body2" gutterBottom>
              UI UX Designer
            </Typography>
            <div className="flexRow">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>

            <div>
              <Typography
                className="profileAddress"
                variant="body1"
                gutterBottom
              >
                795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
              </Typography>
            </div>
            <div className="flexRow">
              <div>
                <Typography variant="h5" gutterBottom>
                  852
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Following
                </Typography>
              </div>
              <div>
                <Typography variant="h5" gutterBottom>
                  13K
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Followers
                </Typography>
              </div>
              <div>
                <Typography variant="h5" gutterBottom>
                  234
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Post
                </Typography>
              </div>
            </div>
          </div>
          <div className="profileContact">
            <Divider />
            <div>
              <Typography variant="body1" gutterBottom>
                Email address:
              </Typography>
              <Typography variant="body2" gutterBottom>
                micheal@gmail.com
              </Typography>
            </div>
            <Divider />
            <div>
              <Typography variant="body1" gutterBottom>
                Phone:
              </Typography>
              <Typography variant="body2" gutterBottom>
                +81 25698 85214
              </Typography>
            </div>
          </div>
        </div>
      );

    return (
      <div id="drawer">
        <IconButton onClick={this.toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <div className="drawerData">
          <Sidenav
            anchor="left"
            open={this.state.drawerOpen}
            onClose={this.toggleDrawer}
          >
            <div id="drawerContainer">
              <div
                className="drawerNav"
                onClick={() => this.handleDrawerContent("oreo")}
              >
                <HomeIcon />
                <Typography>Oreo</Typography>
              </div>
              <div
                className="drawerNav"
                onClick={() => this.handleDrawerContent("user")}
              >
                <PersonIcon />
                <Typography>User</Typography>
              </div>
            </div>
            {drawerContent}
          </Sidenav>
        </div>
      </div>
    );
  }
}

export default Drawer;
