import { useState, useEffect } from "react";
import Pagination from "../../Pagination/Pagination";
import Posts from "../../Posts/Posts";
import AOS from "aos";
import "aos/dist/aos.css";

//card data
import cardData from "../../data/cardData";
// styles
import { Body } from "./styles";

function Home() {
  AOS.init();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    setLoading(true);
    setPosts(cardData);
    setLoading(false);
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Body style={{ marginTop: "5%" }}>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <Posts cardData={currentPosts} loading={loading} />
    </Body>
  );
}
export default Home;
