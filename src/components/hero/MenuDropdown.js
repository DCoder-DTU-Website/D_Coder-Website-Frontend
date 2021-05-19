import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

import "../../helpers/NavBarStyling.css";
import "./MenuDropdown.css";

export default function SimpleMenu({ title, menuItems = [] }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menudrop">
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="no-focus-outline"
      >
        {menuItems.length === 0 ? (
          <Link
            className="NavBarIcon"
            to={`/${title.toLowerCase().replace(/ /g, "_")}`}
          >
            {title}
          </Link>
        ) : (
          <span className="NavBarIcon">{title}</span>
        )}
      </Button>
      {!(menuItems.length === 0) && (
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menuItems.map((menuItem) => (
            <MenuItem onClick={handleClose}>
              <Link to={`/${menuItem.toLowerCase().replace(/ /g, "_")}`}>
                {menuItem}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
}
