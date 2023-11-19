import React from 'react'
// import Friends from '../../components/friends/Friends'
import Navbar from '../../components/navbar/Navbar'
import AllPosts from '../../components/allPosts/AllPosts'
import Sidebar from '../../components/sidebar/Sidebar'
import classes from './home.module.css'

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Navbar />
        <main className={classes.main}>
          <Sidebar />
          <AllPosts />
          {/* <Friends />  */}
        </main>
      </div>
    </div>
  )
}

export default Home