import { ADD_COMMENT } from "../../shared/constant/ActionTypes"

export const addComment = (author, content, post_id, last_id) => {
  return {
    type: ADD_COMMENT,
    author,
    content,
    post_id,
    last_id
  }
}
