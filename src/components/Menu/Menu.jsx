import React, { useContext } from 'react'
import './Menu.css'
import { StoreContext } from '../../Context/StoreContext'


const Menu = ({category,setCategory}) => {
    const {menu_list} = useContext(StoreContext);
  return (
    <div className='menu' id='menu'>
    <h1>Explore our menu</h1>
    <p className='menu-text'>Explore our diverse menu filled with mouthwatering dishes crafted to delight your taste buds. Our goal is to satisfy your cravings and make every meal a memorable experience.</p>
    <div className="menu-list">
      {menu_list.map((item,index)=>{
          return (
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='menu-list-item'>
                  <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                  <p>{item.menu_name}</p>
              </div>
          )
      })}
    </div>
    <hr />
  </div>  )
}

export default Menu