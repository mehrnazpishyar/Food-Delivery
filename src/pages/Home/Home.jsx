import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import Menu from '../../components/Menu/Menu'
import FoodList from '../../components/FoodList/FoodList'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <>
        <Header/>
        <Menu setCategory={setCategory} category={category}/>
        <FoodList category={category}/>
        <AppDownload/>
    </>
  )
}

export default Home