import React, { useRef } from "react"
import { addComment } from "../actions"
import { useDispatch } from "react-redux"

const CommentAdd = ({ post_id, ids }) => {
  const dispatch = useDispatch()

  let inputName = useRef(null)
  let inputComment = useRef(null)

  let last_id = Math.max.apply(
    Math,
    ids.map(i => i)
  )
  const new_id = last_id + 1

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addComment(inputName.value.toString(), inputComment.value.toString(), parseInt(post_id), new_id))
    inputName.value = ""
    inputComment.value = ""
  }

  const handleChange = () => {
    inputName.value = inputName.value.replace(/[^A-Za-z0-9]+/g, "")
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input ref={node => (inputName = node)} type="text" id="name" placeholder="Nom" value={inputName.value} onChange={handleChange} required />
      <input ref={node => (inputComment = node)} type="text" id="comment" placeholder="Commentaire" required />
      <button>Envoyer</button>
    </form>
  )
}

export default CommentAdd
