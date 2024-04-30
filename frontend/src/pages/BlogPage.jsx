import React from "react";
import Blogs from "../components/Blogs/Blog";
import "../components/Blogs/Blog.css";

export const BlogPage = () => {
  return (
    <React.Fragment>
      <div className="blog-page">
        <Blogs />
      </div>
    </React.Fragment>
  );
};

export default BlogPage;