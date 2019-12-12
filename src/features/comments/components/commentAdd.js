import React from "react"
import { addComment } from "../actions"
import { useDispatch } from "react-redux"

const CommentAdd = ({ post_id, ids }) => {
  let max_id = Math.max.apply(
    Math,
    ids.map(i => i)
  )
  const last_id = max_id + 1

  let inputName, inputComment
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addComment(inputName.value, inputComment.value, parseInt(post_id), last_id))
    inputName.value = ""
    inputComment.value = ""
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input ref={node => (inputName = node)} type="text" id="name" placeholder="Nom" required />
      <input ref={node => (inputComment = node)} type="text" id="comment" placeholder="Commentaire" required />
      <button>Envoyer</button>
    </form>
  )
}

export default CommentAdd
