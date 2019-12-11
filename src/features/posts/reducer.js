import { GET_POSTS, GET_POST_ITEM } from "../../shared/constant/ActionTypes"
import { posts as postsData } from "../../shared/api/data"

const initialState = {
  posts: [...postsData]
}

const post = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return state.posts
    case GET_POST_ITEM:
      const { postId } = action
      return state.posts.find(item => postId === item.id)
    default:
      return state.posts
  }
}

export default post
