import { Link } from "react-router-dom";
import "./Publication.css";

export const Publication = (publication) => {
  const dataPublication = publication.publicationData;
  console.log(dataPublication);

  return (
    <Link className="publication-link" to={`/${dataPublication.owner_username}/${dataPublication.slug}`}>
      <div className="main-publication">
        <h1 className="publication-title">{dataPublication.title}</h1>
        <h2 className="publictation-autor">Created By {dataPublication.owner_username}</h2>
      </div>
    </Link> 
  );
};