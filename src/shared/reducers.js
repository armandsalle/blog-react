import { combineReducers } from "redux"
import { reducer as post } from "../features/posts"
import { reducer as comment } from "../features/comments"

export const reducers = combineReducers({
  post,
  comment
})
