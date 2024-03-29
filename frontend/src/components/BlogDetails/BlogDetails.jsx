import Reviews from "../Reviews/Reviews";
import "./BlogDetails.css";

const BlogDetails = () => {
  return (
    <section className="single-blog">
      <div className="container">
        <Reviews />
      </div>
    </section>
  );
};

export default BlogDetails;