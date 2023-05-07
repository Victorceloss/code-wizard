import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showPostContent } from "../services/TabnewsAPI";

import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer/footer";

const Post = () => {
  const { name, slug } = useParams();
  const [postContent, setPostContent] = useState([]);

  const getPostContent = async () => {
    const contentData = await showPostContent(name, slug);
    setPostContent(contentData);
  }

  useEffect(() => {
    getPostContent();
  }, []);

  console.log(postContent);

  return (
    <>
    <Header />
    <main className="main-post">

    </main>
    <Footer />
    </>
  );
};

export default Post;