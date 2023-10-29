import React from "react";
import Helmet from 'react-helmet';
import Footer from "./Footer";
import {Toaster} from 'react-hot-toast';

const Layout = ({children, title, description, keywords, author}) => {
  return (
    <div style={{backgroundColor: "", color: "",overflowX: "hidden"}}>
    <Helmet>
      <meta charSet='utf-8' />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <title>{title}</title>
    </Helmet>
      <main style={{ minHeight: "85vh" ,paddingBottom: "0vh"}}>
        <Toaster/>
        {children}
      <Footer />
        </main>
    </div>
  );
};

Layout.defaultProps = {
  title : "Cargoa App - Home",
  description: "MERN stack project",
  keywords: "mern, react, node.js, mongoose",
  author: "Abhishek"
}

export default Layout;
