import React, { useEffect, useRef } from "react"
import PostItem from "./postItem"
import { useSelector } from "react-redux"
import gsap from "gsap"

const PostContainer = () => {
  let container = useRef(null)

  useEffect(() => {
    gsap.from([container.children], {
      duration: 1,
      ease: "power3.inOut",
      y: 40,
      opacity: 0,
      stagger: 0.03
    })
  })

  const posts = useSelector(state => state.post)
  const postSort = posts.posts.sort((a, b) => new Date(b.date) - new Date(a.date))

  return typeof posts !== "undefined" ? (
    <div ref={ref => (container = ref)} className="container">
      {postSort.map(item => {
        return <PostItem item={item} key={item.id} />
      })}
    </div>
  ) : (
    <p className="not-exist">Cet article n'existe pas</p>
  )
}

export default PostContainer
