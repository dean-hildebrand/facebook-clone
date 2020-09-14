import React from 'react'
import '../css/Feed.css'
import StoryReel from './StoryReel.js'
import Post from './Post.js'
import MessageSender from './MessageSender.js'

function Feed() {
  return (
    <div className="feed">
    <StoryReel />
    <MessageSender />
    <Post
    profilePic="https://cdn.cnn.com/cnnnext/dam/assets/200615110703-marcus-rashford-manchester-united-exlarge-169.jpg"
    message="This is awesome"
    timestamp="This is a timestamp"
    username="deano88"
    image="https://i.pinimg.com/originals/55/a1/79/55a179dd73def493a38193fd3cacd278.jpg"
    />
    <Post
    profilePic="https://cdn.cnn.com/cnnnext/dam/assets/200615110703-marcus-rashford-manchester-united-exlarge-169.jpg"
    message="This is awesome"
    timestamp="This is a timestamp"
    username="deano88"
    />
    </div>
  )
}

export default Feed
