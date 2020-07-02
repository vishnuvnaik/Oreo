import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import EventIcon from "@material-ui/icons/Event";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FlagIcon from "@material-ui/icons/Flag";
import SearchIcon from "@material-ui/icons/Search";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./Dashboard.scss";
import Product from "../product/Product";
import ProductList from "../productList/ProductList";
import ProductDetails from "../productDetails/ProductDetails";
import DrawerContent from "../drawerContent/DrawerContent";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#8c99e0",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen, topIcon, iconDisplay] = React.useState(
    false
  );
  const [choice, setChoice] = React.useState("Product");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const clickHome = () => {
    topIcon(!topIcon);
  };

  const showButton = () => {
    iconDisplay(!iconDisplay);
  };
  const screenChanging = (text) => {
    setChoice(text);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className="row2">
            <div className="row">
              <img src="../../Assets/oreoLogo.svg" width="30px" />
              <div className="alignment">
                <div style={{ fontSize: "18px" }}>OREO</div>
              </div>

              <div className="alignment1">
                <SwapHorizIcon
                  className="appbarIcons"
                  style={{ fontSize: "18px" }}

                  // onClick={handleDrawerToggle}
                />
              </div>

              <div className="alignment">
                <EventIcon
                  className="appbarIcons"
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div className="alignment">
                <MailIcon
                  className="appbarIcons"
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div className="alignment">
                <ContactPhoneIcon
                  className="appbarIcons"
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div className="alignment">
                <div className="notificationrotate">
                  <div className="notify">
                    <span className="heartbit"></span>
                    <span className="point"></span>
                  </div>
                  <NotificationsIcon
                    className="appbarIcons"
                    style={{ fontSize: "18px" }}
                  />
                </div>
              </div>
              <div className="alignment">
                <div className="notificationrotate">
                  <div className="notify">
                    <span className="heartbit"></span>
                    <span className="point"></span>
                  </div>
                  <FlagIcon
                    className="appbarIcons"
                    style={{ fontSize: "18px" }}
                  />
                </div>
              </div>

              <div className="alignment2">
                <div className="search">
                  <input
                    placeholder="Search..."
                    className="inputsearch"
                    style={{
                      disableUnderline: true,
                      outline: "none",
                      border: "none",
                    }}
                  />
                </div>
                <div className="alignment3">
                  <SearchIcon
                    className="blackColor"
                    style={{ fontSize: "18px" }}
                  />
                </div>
                <div></div>
              </div>
            </div>
            <div className="row1">
              <div className="alignment">
                <PowerSettingsNewIcon
                  className="appbarIcons"
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div className="alignmentrotate">
                <SettingsIcon
                  className="appbarIcons"
                  style={{ fontSize: "18px" }}
                />
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden mdDown implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <DrawerContent screenChanging={screenChanging} />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
          anchor="left"
        >
          <DrawerContent screenChanging={screenChanging} />
        </Drawer>
      </Hidden>

      <main className={classes.content}>
        <div className="rowP">
          <div className="productSizeP">
            <div className="productNameP">
              <div className="productColorP">{choice}</div>
              <small className="productWelcomeP">Welcome to Oreo</small>
            </div>
            <div className="pathP">
              <div className="homeIcon1P">
                <div>
                  <HomeIcon
                    className="iconHomeColorP"
                    style={{ fontSize: "18px" }}
                  />
                </div>
                <div className="oreo1">
                  <div className="wordStyle1">Oreo</div>
                  <div className="wordStyle">/</div>
                  <div className="wordStyle1">eCommerce</div>
                  <div className="wordStyle">/</div>
                  <div className="wordStyle">{choice}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {choice === "Product List" ? (
          <ProductList />
        ) : choice === "Product" ? (
          <Product />
        ) : choice === "Product Details" ? (
          <ProductDetails />
        ) : null}
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
