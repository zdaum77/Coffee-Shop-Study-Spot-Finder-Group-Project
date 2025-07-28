import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Link as RouterLink, useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CoffeeIcon from "@mui/icons-material/Coffee";

const pages = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Add Review",
    url: "/add",
  },
  {
    label: "My Review",
    url: "/review",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#8e684f" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LEFT SIDE - Logo and Title */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <CoffeeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 900,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Coffee Shop Study Spot Finder
            </Typography>
          </Box>

          {/* HAMBURGER MENU - Mobile Only */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.url}
                  // component={RouterLink}
                  // to={page.url}
                  onClick={() => {
                    // close the nav menu
                    handleCloseNavMenu();
                    // navigate to page.url
                    navigate(page.url);
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* MOBILE TITLE - Centered only on XS */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <CoffeeIcon sx={{ mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Coffee Shop Study Spot Finder
            </Typography>
          </Box>

          {/* RIGHT SIDE - Nav Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {pages.map((page) => (
              <Button
                component={RouterLink}
                to={page.url}
                key={page.url}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
