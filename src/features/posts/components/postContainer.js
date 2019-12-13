import React, { useEffect, useRef } from "react"
import PostItem from "./postItem"
import { useSelector } from "react-redux"
import { Helmet } from "react-helmet"
import gsap from "gsap"

const PostContainer = () => {
  let container = useRef(null)
  const posts = useSelector(state => state.post)
  useEffect(() => {
    //Créé l'animation
    gsap.from([container.children], {
      duration: 1,
      ease: "power3.inOut",
      y: 40,
      opacity: 0,
      stagger: 0.03
    })
  })

  //Tri les posts par date anti-chronologique
  const postSort = posts.posts.sort((a, b) => new Date(b.date) - new Date(a.date))

  return typeof posts !== "undefined" ? (
    <div ref={ref => (container = ref)} className="container">
      <Helmet>
        <title>React Blog</title>
        <meta name="description" content="Articles" />
      </Helmet>
      {postSort.map(item => {
        return <PostItem item={item} key={item.id} />
      })}
    </div>
  ) : (
    <p className="not-exist">Cet article n'existe pas</p>
  )
}

export default PostContainer
