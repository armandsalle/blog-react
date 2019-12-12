import React, { useRef, useEffect } from "react"
import { useSelector } from "react-redux"
import { Markup } from "interweave"
import { CommentContainer } from "../../comments"
import gsap from "gsap"
import { dateToString } from "../../../shared/utils/dateToString"

const Post = ({ match }) => {
  const id = match.params.post_id
  const { posts } = useSelector(state => state.post)

  let container = useRef(null)

  useEffect(() => {
    gsap.from([container.children], {
      duration: 1,
      ease: "power3.inOut",
      y: 10,
      opacity: 0,
      stagger: 0.2
    })
  })

  const data = posts.find(post => post.id === parseInt(id))
  return typeof data !== "undefined" ? (
    <div ref={ref => (container = ref)} className="container">
      <div className="post-item">
        <div className="post-item__before">
          <div className="circle" style={{ backgroundColor: data.color }}></div>
        </div>
        <div className="post-item__content">
          <h2>{data.title}</h2>
          <div className="author">
            {data.author} <span className="date">le {dateToString(data.date)}</span>
          </div>
          <div className="content">
            <Markup content={data.body} />
          </div>
        </div>
      </div>
      <CommentContainer id={match.params.post_id} />
    </div>
  ) : (
    <p className="not-exist">Cet article n'existe pas</p>
  )
}

export default Post
