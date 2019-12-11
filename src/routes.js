import { PostContainer } from "./features/posts/index.js"
import Post from "./features/posts/components/post.js"

const routes = [
  { path: "/", name: "home", Component: PostContainer },
  { path: "/:post_id", name: "post", Component: Post }
]

export default routes
