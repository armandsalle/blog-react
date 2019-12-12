import React from "react"
import PostItem from "./postItem"
import { connect } from "react-redux"

const PostContainer = ({ data }) => {
  const postSort = data.sort((a, b) => new Date(b.date) - new Date(a.date))

  return typeof data !== "undefined" ? (
    <div className="container">
      {postSort.map(item => {
        return <PostItem item={item} key={item.id} />
      })}
    </div>
  ) : (
    <p className="not-exist">Cet article n'existe pas</p>
  )
}

const mapStateToProps = state => {
  return {
    data: state.post
  }
}

export default connect(mapStateToProps)(PostContainer)
