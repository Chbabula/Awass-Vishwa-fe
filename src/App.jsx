import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import NotFound404 from './pages/NotFound404'
import CreateAdPage from './pages/CreateAdPage'
import EditAdPage from './pages/EditAdPage'
import WishlistPage from './pages/WishlistPage'
import MainLayOut from './layouts/MainLayOut'
import ItemDetailPage from './pages/ItemDetailPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayOut />} >
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/create-ad' element={<CreateAdPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/item/:itemId' element={<ItemDetailPage />} />
      <Route path='/*' element={<NotFound404/>}/>

      </Route>
    </Routes>
  )
}

export default App