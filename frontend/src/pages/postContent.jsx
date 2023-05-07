import { useParams } from "react-router-dom";

import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer/footer";

const Post = () => {
  const { name, slug } = useParams();

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