import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import * as React from "react";
import useRouter from "../../custom-hooks/useRouter";
import { Route } from "../../router/route";
import Sidebar, { SidebarItemWithChildren, SidebaSingleItem } from "./Sidebar";

const drawerWidth = 240;

const useStyles = makeStyles(
  theme =>
    ({
      root: {
        display: "flex"
      },
      toolbar: {
        paddingRight: 24 // keep right padding when drawer closed
      },
      pt: {
        paddingTop: 80
      },
      pb: {
        paddingBottom: 80
      },
      pl: {
        paddingLeft: 80
      },
      pr: {
        paddingRight: 80
      },
      mt: {
        marginTop: 80
      },
      mb: {
        marginBottom: 80
      },
      ml: {
        marginLeft: 80
      },
      mr: {
        marginRight: 80
      },
      colorWhite: {
        color: theme.palette.background.paper
      },
      toolbarIcon: {
        display: "flex",
        alignItems: "center",
        color: theme.palette.background.paper,
        justifyContent: "flex-start",
        padding: "0px 38px 0px 8px",
        ...theme.mixins.toolbar
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      menuButton: {
        marginLeft: 36
      },
      menuButtonHidden: {
        display: "none"
      },
      title: {
        flexGrow: 1
      },
      drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        backgroundColor: theme.palette.grey[800],
        width: drawerWidth,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: drawerWidth
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
      },
      paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
        maxHeight: "700px"
      },
      fixedHeight: {
        height: 240
      }
    } as any)
);

type Props = {
  routes: Route[];
  currentRoute: Route | null;
};

const createSidebarItems = ({ routes }: Props) => {

  const router = useRouter();

  let categoryItems: any = {};
  for (let route of routes.filter(x => !x.hidden)) {
    if (!(route.category.name in categoryItems)) {
      categoryItems[route.category.name] = [];
      categoryItems[route.category.name].indicator = route.category.indicator;
    }
    categoryItems[route.category.name].push(
      <SidebaSingleItem
        key={route.name + "_" + route.category.name}
        title={route.name}
        onClick={() => router!.push(route.path, {})}
        icon={route.indicator || <div />}
      />
    );
  }
  let rootItems: any[] = [];
  let otherItems: any[] = [];

  for (let item in categoryItems) {
    if (item == "root") rootItems = [...rootItems, ...categoryItems[item]];
    else
      otherItems.push(
        <SidebarItemWithChildren
          key={item}
          children={categoryItems[item]}
          icon={categoryItems[item].indicator || <div />}
          title={item}
        />
      );
  }

  return [...otherItems, ...rootItems];
};

export default function DefaultSkeleton({ children, routes, currentRoute }: any) {
  const routesProp = routes as Route[];
  const currentRouteProp = currentRoute as Route;
  const classes = useStyles() as any;
  const [open, setOpen] = React.useState<boolean>(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" align="right" variant="h6" color="inherit" noWrap className={classes.title}>
            {currentRouteProp == null ? "Dashboard" : currentRouteProp.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor={"right"}
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Typography component="h1" align="right" variant="body1" color="inherit" noWrap className={classes.title}>
            {"Panel"}
          </Typography>
          <IconButton onClick={handleDrawerClose} className={classes.colorWhite}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <Sidebar>{createSidebarItems({ routes: routesProp, currentRoute: currentRoute })}</Sidebar>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>{children}</Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
