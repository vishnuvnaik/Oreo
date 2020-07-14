import React from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import { connect } from "react-redux";
import { search } from "../../constants/action";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
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
import "./Dashboard.scss";
import Product from "../product/Product";
import ProductList from "../productList/ProductList";
import ProductDetails from "../productDetails/ProductDetails";
import DrawerContent from "../drawerContent/DrawerContent";
import DashboardEcomm from "../dashboardEcommerce/dashboardTab/DashboardTab";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    display: "inline-block",
    postion: "sticky",
    backgroundColor: "#8c99e0",
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
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
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [choice, setChoice] = React.useState("Dashboard");
  // const [spinner, setSpinner] = React.useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const screenChanging = (text) => {
    setChoice(text);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="rootClass">
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className="rootToolbar">
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
              <div className="oreoName1">
                <div className="oreoName">OREO</div>
              </div>

              <div className="toolBar2">
                <SwapHorizIcon
                  className="appbarIcons"
                  style={{ fontSize: "18px" }}
                  onClick={handleDrawerToggle}
                />
              </div>

              <div className="toolBar1">
                <EventIcon
                  className="appbarIcons"
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div className="toolBar1">
                <MailIcon
                  className="appbarIcons"
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div className="toolBar1">
                <ContactPhoneIcon
                  className="appbarIcons"
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div className="toolBar1">
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
              <div className="toolBar1">
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

              <div className="toolBar2">
                <div className="search">
                  <input
                    placeholder="Search..."
                    style={{
                      disableUnderline: true,
                      outline: "none",
                      border: "none",
                    }}
                    value={props.search}
                    onChange={(e) => {
                      props.handleSearch(e.target.value);
                    }}
                  />
                </div>
                <SearchIcon
                  className="blackColor"
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div className="row1">
                <div className="toolBar1">
                  <PowerSettingsNewIcon
                    className="appbarIcons"
                    style={{ fontSize: "18px" }}
                  />
                </div>
                <div className="settingsRotate">
                  <SettingsIcon
                    className="appbarIcons"
                    style={{ fontSize: "18px" }}
                  />
                </div>
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
      <Hidden mdDown implementation="css">
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
        <div className="rowProduct">
          <div className="productSizePro">
            <div className="productNamePro">
              <div className="productColorPro">{choice}</div>
              <small className="productWelcomePro">Welcome to Oreo</small>
            </div>
            <div className="pathProduct">
              <div className="homeIcon1Product">
                <div>
                  <HomeIcon
                    className="iconHomeColorProduct"
                    style={{ fontSize: "18px" }}
                  />
                </div>
                <div className="oreoNew">
                  <div className="wordStyles">Oreo</div>
                  <div className="wordStyle">/</div>
                  <div className="wordStyles">eCommerce</div>
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
          <Product screenChanging={screenChanging} />
        ) : choice === "Product Details" ? (
          <ProductDetails />
        ) : choice === "Dashboard" ? (
          <DashboardEcomm />
        ) : null}
      </main>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (value) => dispatch(search(value)),
  };
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ResponsiveDrawer));
