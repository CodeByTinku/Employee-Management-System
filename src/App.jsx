import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './index.css'
import Employees from './components/employees/Employees'
import EmployeePopup from './components/employeePopup/EmployeePopup'
import DeletePopup from './components/deletePopup/DeletePopup'
import { useDispatch } from 'react-redux'
import { getEmployees } from './store/features/employee/employee.thunk'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import LoginPage from './components/auth/LoginPage'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [])

  return (
    <>
      {/* Show login page when user is NOT signed in */}
      <SignedOut>
        <LoginPage />
      </SignedOut>

      {/* Show main app when user IS signed in */}
      <SignedIn>
        <div className='min-h-screen w-full flex flex-col bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'>
          <EmployeePopup />
          <DeletePopup />
          <Navbar />
          <div className='flex-1 py-10'>
            <Employees />
          </div>
          <Footer />
        </div>
      </SignedIn>
    </>
  )
}

export default App