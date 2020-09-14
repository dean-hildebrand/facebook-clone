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
    <Post />
    <Post />
    <Post />
    </div>
  )
}

export default Feed
