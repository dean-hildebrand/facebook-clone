import React from 'react'
import '../css/MessageSender.css'
import { Avatar } from '@material-ui/core'
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";


function MessageSender() {

const handleSubmit = e => {
  e.preventDefault()
  console.log(e.target.value);
}
  return (
    <div className="message-sender">
    <div className="message-sender-top">
    <Avatar />
    <form>
    <input className="message-sender-input" placeholder="What's on your mind?"></input>
    <input placeholder="image URL (Optional)"></input>
    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
    </form>
    </div>
    <div className="message-sender-bottom">
    <div className="message-sender-option">
    <VideocamIcon style={{ color: "red" }} />
    <h3>Live Video</h3>
    </div>
    <div className="message-sender-option">
    <PhotoLibraryIcon style={{ color: "green" }} />
    <h3>Photo/Video</h3>
    </div><div className="message-sender-option">
    <InsertEmoticonIcon style={{ color: "orange" }} />
    <h3>Feeling/Activity</h3>
    </div>
    </div>
    </div>
  )
}

export default MessageSender
