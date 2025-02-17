import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import Menu from '../../components/Menu/Menu'

const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <>
        <Header/>
        <Menu setCategory={setCategory} category={category}/>
    </>
  )
}

export default Home