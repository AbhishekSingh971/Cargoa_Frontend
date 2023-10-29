import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom'
import { Button, Result } from 'antd';

const Pagenotfound = () => {
  return (
    <Layout title={"go back - page not found"}>
  <Result
  style={{ height: "fit-content",color: "#363636" }}
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to={'/'}><Button type="primary">Back Home</Button></Link>}
  />
        {/* <div className='pnf'>
            <h1 className='pnf-title'> 404 </h1>
            <h2 className='pnf-heading'>Oops ! Page Not Found</h2>
            <Link to={'/'} className='pnf-btn'>
              Go Back
            </Link>
        </div> */}
    </Layout>
  )
}

export default Pagenotfound