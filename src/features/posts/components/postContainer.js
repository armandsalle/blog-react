import React from "react"
import PostItem from "./postItem"
import { connect } from "react-redux"

const PostContainer = ({ data }) => {
  return (
    <div className="container">
      {data.map(item => {
        return <PostItem item={item} key={item.id} />
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    data: state.post
  }
}

export default connect(mapStateToProps)(PostContainer)
