import React from "react"
import { Link } from "react-router-dom"
import { dateToString } from "../../../shared/utils/dateToString"

const PostItem = ({ item }) => {
  return (
    <div className="post-item">
      <div className="post-item__before">
        <div className="circle" style={{ backgroundColor: item.color }}></div>
      </div>
      <div className="post-item__content">
        <Link to={"/" + item.id}>
          <h2>{item.title}</h2>
        </Link>
        <div className="author">
          {item.author} <span className="date">le {dateToString(item.date)}</span>
        </div>
        <p className="exerp">{item.exerp + "..."}</p>
      </div>
    </div>
  )
}

export default PostItem
