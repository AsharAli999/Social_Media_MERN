import React from 'react'
import classes from './posts.module.css'
import NewPost from '../newPost/NewPost.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import { request } from '../../utils/request.js'
import { useSelector } from 'react-redux'
import Share from '../share/Share.jsx'

const AllPosts = () => {
  const [posts, setPosts] = useState([])
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    const fetchTimelinePosts = async () => {

      const headers = {
        'Authorization': `Bearer ${token}`
      }

      const data = await request(`/post/timelinePosts`, 'GET', headers)
      console.log(data)
      setPosts(data)
    }
    fetchTimelinePosts()
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Share />
        <div className={classes.posts}>
          {posts?.map((post) => (
            <NewPost post={post} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllPosts