import React from 'react'
import './Tags.css'
const TagList = ({ tag}) => {
  return (
    <div className='tag'>
        <h5>{tag.tagName}</h5>
        <p>{tag.description}</p>
    </div>
  )
}

export default TagList