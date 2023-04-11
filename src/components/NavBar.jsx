import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NavbarIcon from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthCalls from "../hooks/useAuthCalls";

const pages = ["DASHBOARD", "NEW BLOG", "ABOUT"];
const settings = ["My Blogs", "Profile", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { currentUser, image } = useSelector((state) => state.auth);
  const { logout } = useAuthCalls();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();

  return (
    <AppBar sx={{ bgcolor: "red" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            onClick={() => navigate("/")}
            sx={{
              cursor: "pointer",
              display: { xs: "none", md: "flex" },
              mr: 1,
              height: "55px",
            }}
          >
            <img src={NavbarIcon} alt="" />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/");
                  handleCloseNavMenu();
                }}
              >
                <Typography>DASHBOARD</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/new-blog");
                  handleCloseNavMenu();
                }}
              >
                <Typography>NEW BLOG</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/about");
                  handleCloseNavMenu();
                }}
              >
                <Typography>ABOUT</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            onClick={() => navigate("/")}
            sx={{
              cursor: "pointer",
              display: { xs: "flex", md: "none" },
              mr: 1,
              height: "55px",
            }}
          >
            <img src={NavbarIcon} alt="" />
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem onClick={() => navigate("/")}>
              <Typography>DASHBOARD</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate("/new-blog")}>
              <Typography>NEW BLOG</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate("/about")}>
              <Typography>ABOUT</Typography>
            </MenuItem>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={image} />
              </IconButton>
            </Tooltip>
            {currentUser && (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/myblogs");
                    handleCloseNavMenu();
                  }}
                >
                  <Typography>My Blogs</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/profile");
                    handleCloseNavMenu();
                  }}
                >
                  <Typography>Profile</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    logout();
                    handleCloseNavMenu();
                  }}
                >
                  <Typography>Logout</Typography>
                </MenuItem>
              </Menu>
            )}
            {!currentUser && (
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/login");
                    handleCloseNavMenu();
                  }}
                >
                  <Typography>Login</Typography>
                </MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
