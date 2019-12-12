import React from "react"
import Comment from "./comment"
import CommentAdd from "./commentAdd"
import { useSelector } from "react-redux"

const CommentContainer = ({ id }) => {
  const { comments } = useSelector(state => state.comment)

  const ids = comments.map(a => a.id)
  const commentsFiltred = comments.filter(item => item.post_id === parseInt(id))
  const commentsSort = commentsFiltred.sort((a, b) => a.id - b.id)

  return (
    <div className="comments">
      <h3>
        Commentaires <span className="comments-length">{commentsFiltred === "undefined" ? 0 : commentsFiltred.length}</span>
      </h3>
      {commentsSort.map(comment => {
        return <Comment infos={comment} key={comment.id} />
      })}
      <CommentAdd post_id={id} ids={ids} />
    </div>
  )
}

export default CommentContainer
