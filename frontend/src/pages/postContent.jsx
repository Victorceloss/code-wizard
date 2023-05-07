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
      <section className="post-info">
        <div className="post-identification">
          <div className="post-user">
            <h2 className="user-name">{postContent.owner_username}</h2>
          </div>
          <h1 className="post-title">{postContent.title}</h1>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default Post;