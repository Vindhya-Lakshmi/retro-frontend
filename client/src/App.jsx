import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Homepage'
import PropertyPages from './Pages/PropertyPages'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import AccountPage from './Pages/AccountPage'
import EditAccountPage from './Pages/EditAccountPage'
import BookEnqueryPage from './Pages/BookEnqueryPage'
import Enquery from './components/Enquery'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='view' element={<PropertyPages/>} />
        <Route path='login' element={<LoginPage/>} />
          <Route path='signup' element={<SignUpPage/>} />
           <Route path='account' element={<AccountPage/>} />
            <Route path='editaccount' element={<EditAccountPage/>} />
             <Route path='book' element={<BookEnqueryPage/>} />
             <Route path='enquery' element={<Enquery/>} />
      </Routes>

    </>
  )
}

export default App
