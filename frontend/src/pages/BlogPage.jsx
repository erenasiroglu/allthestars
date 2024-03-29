import React from "react";
import Header from "../components/Layout/Header/Header";
import Blogs from "../components/Blogs/Blog";
import Footer from "../components/Layout/Footer/Footer";
import "../components/Blogs/Blog.css";

const BlogPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="blog-page">
        <Blogs />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default BlogPage;