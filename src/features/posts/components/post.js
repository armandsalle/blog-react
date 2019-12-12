import React from "react"
import { useSelector } from "react-redux"
import { Markup } from "interweave"
import { CommentContainer } from "../../comments"
import { dateToString } from "../../../shared/utils/dateToString"

const Post = ({ match }) => {
  const id = match.params.post_id
  const { posts } = useSelector(state => state.post)
  const data = posts.find(post => post.id === parseInt(id))

  return typeof data !== "undefined" ? (
    <div className="container">
      <div className="post-item">
        <div className="post-item__before">
          <div className="circle" style={{ backgroundColor: data.color }}></div>
        </div>
        <div className="post-item__content">
          <h2>{data.title}</h2>
          <div className="author">
            {data.author} <span className="date">le {dateToString(data.date)}</span>
          </div>
          <div className="content">
            <Markup content={data.body} />
          </div>
        </div>
      </div>
      <CommentContainer id={match.params.post_id} />
    </div>
  ) : (
    <p className="not-exist">Cet article n'existe pas</p>
  )
}

export default Post
