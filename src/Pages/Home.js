import React from 'react'
import MHome from './Manufacturer/MHome'
import THome from './Transporter/THome'
import { useAuth } from '../context/auth'

const Home = () => {
    const [auth] = useAuth();
  return (
    <>
    <div>
        {auth?.user?.role===1?(<MHome/>):(<THome/>)}
    </div>
    </>
  )
}

export default Home