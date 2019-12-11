import { GET_COMMENTS } from "../../shared/constant/ActionTypes"
import { comments } from "../../shared/api/data"

const initialState = {
  comments: [...comments]
}

const comment = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return state
    default:
      return state
  }
}

export default comment
