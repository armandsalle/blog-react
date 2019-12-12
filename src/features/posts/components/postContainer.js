import React from "react"
import PostItem from "./postItem"
import { useSelector } from "react-redux"

const PostContainer = () => {
  const posts = useSelector(state => state.post)
  const postSort = posts.posts.sort((a, b) => new Date(b.date) - new Date(a.date))

  return typeof posts !== "undefined" ? (
    <div className="container">
      {postSort.map(item => {
        return <PostItem item={item} key={item.id} />
      })}
    </div>
  ) : (
    <p className="not-exist">Cet article n'existe pas</p>
  )
}

export default PostContainer
