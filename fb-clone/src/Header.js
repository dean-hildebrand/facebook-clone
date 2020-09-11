import React from 'react'
import HeaderCSS from './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';

function MyComponent() {
  return (
    <div class="header">
    <div class="header-left">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Akash_rajoriya_Facebook_.png" alt='logo'></img>
    <div class="header-input">
    <SearchIcon />
    <input type='text' placeholder='search facebook...'></input>
    </div>
    </div>
    <div class="header-middle"></div>
    <div class="header-right"></div>
</div>
  )
}

export default MyComponent
