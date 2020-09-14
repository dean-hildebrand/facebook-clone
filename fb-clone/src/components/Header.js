import React from "react";
import '../css/Header.css'
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from '../StateProvider'



function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div class="header">
      <div class="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Akash_rajoriya_Facebook_.png"
          alt="logo"
        />
        <div class="header-input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div class="header-center">
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
      <div class="header-right">
      <div class="header-info">
      <Avatar src={user.photoURL}/>
      <h4>{user.displayName}</h4>
      </div>

      <IconButton>
      <AddIcon />
      </IconButton>
      <IconButton>
      <ForumIcon />
      </IconButton>
      <IconButton>
      <NotificationsActiveIcon />
      </IconButton>
      <IconButton>
      <ExpandMoreIcon />
      </IconButton>
      </div>
    </div>
  );
}

export default Header;
