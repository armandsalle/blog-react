import { posts as postsData } from "../../shared/api/data"

const initialState = {
  posts: [...postsData]
}

const post = (state = initialState) => {
  return state
}

export default post
