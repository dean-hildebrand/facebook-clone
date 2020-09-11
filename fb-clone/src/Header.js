import React from "react";
import HeaderCSS from "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

function MyComponent() {
  return (
    <div class="header">
      <div class="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Akash_rajoriya_Facebook_.png"
          alt="logo"
        />
        <div class="header-input">
          <SearchIcon />
          <input type="text" placeholder="search facebook..." />
        </div>
      </div>
      <div class="header-middle">
        <div class="header-option">
        <HomeIcon fontsize="large"/>
        </div>
        <div class="header-option">
        <FlagIcon fontsize="large"/>
        </div>
        <div class="header-option">
        <SubscriptionsIcon fontsize="large"/>
        </div>
        <div class="header-option">
        <StorefrontOutlinedIcon fontsize="large"/>
        </div>
        <div class="header-option">
        <SupervisedUserCircleIcon fontsize="large"/>
        </div>
      </div>
      <div class="header-right"></div>
    </div>
  );
}

export default MyComponent;
