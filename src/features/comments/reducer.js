import { ADD_COMMENT } from "../../shared/constant/ActionTypes"
import { comments } from "../../shared/api/data"

const initialState = {
  comments: [...comments]
}

const comment = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        comments: [
          ...state.comments,
          {
            id: action.last_id,
            post_id: action.post_id,
            author: action.author,
            content: action.content
          }
        ]
      }
    default:
      return state
  }
}

export default comment
