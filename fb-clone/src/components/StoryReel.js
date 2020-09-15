import React from 'react'
import '../css/StoryReel.css'
import Story from './Story.js'

function StoryReel() {
  return (
    <div className='storyReel'>
    <Story image="https://i.pinimg.com/originals/55/a1/79/55a179dd73def493a38193fd3cacd278.jpg" profileSrc="https://cdn.cnn.com/cnnnext/dam/assets/200615110703-marcus-rashford-manchester-united-exlarge-169.jpg" title="Dean Hildebrand"/>
    <Story image="https://bit.ly/3hyGMgL" profileSrc="https://bit.ly/32w5lqb" title="Autumn Tully"/>
    <Story image="https://bit.ly/3iAT9Kn" profileSrc="https://bit.ly/32xwQzO" title="Joe Thomas"/>
    <Story image="https://bit.ly/35DlfRD" profileSrc="https://bit.ly/2FwH6Q9" title="Dominique Tansy"/>
    <Story image="https://bit.ly/33xo5oM" profileSrc="https://bit.ly/2Fvgjna" title="Jimmy Jones"/>
    </div>
  )
}

export default StoryReel
