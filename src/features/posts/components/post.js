import React from "react"
import { useSelector } from "react-redux"
import { Markup } from "interweave"
import { CommentContainer } from "../../comments"
import { dateToString } from "../../../shared/utils/dateToString"
import { Helmet } from "react-helmet"

const Post = ({ match }) => {
  const id = match.params.post_id
  const { posts } = useSelector(state => state.post)

  //Recupere le post correspondant au parametre de l'URL
  const data = posts.find(post => post.id === parseInt(id))

  return typeof data !== "undefined" ? (
    <div className="container">
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.body.substr(0, 100)} />
      </Helmet>
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
    <>
      <Helmet>
        <title>Aucun résultat</title>
        <meta name="description" content="Oups y a pas d'article" />
      </Helmet>
      <p className="not-exist">Cet article n'existe pas</p>
    </>
  )
}

export default Post
