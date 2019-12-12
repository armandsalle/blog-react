import React from "react"
import { connect } from "react-redux"
import { Markup } from "interweave"

const Post = ({ data }) => {
  return typeof data !== "undefined" ? (
    <div className="container">
      <div className="post-item">
        <div className="post-item__before">
          <div className="circle" style={{ backgroundColor: data.color }}></div>
        </div>
        <div className="post-item__content">
          <h2>{data.title}</h2>
          <div className="author">
            {data.author} <span className="date">{data.date}</span>
          </div>
          <div className="content">
            <Markup content={data.body} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p className="not-exist">Cet article n'existe pas</p>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id
  return {
    data: state.post.find(post => post.id === parseInt(id))
  }
}

export default connect(mapStateToProps)(Post)
