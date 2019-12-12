import React from "react"

const Comment = ({ infos }) => {
  return (
    <div className="comment-item">
      <p className="comment-item__author">{infos.author}</p>
      <p className="comment-item__content">{infos.content}</p>
    </div>
  )
}

export default Comment
