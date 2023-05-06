export const Publication = (publication) => {
  const dataPublication = publication.publicationData;
  console.log(dataPublication);

  return (
    <div className="main-publication">
      <h1 className="publication-title">{dataPublication.title}</h1>
      <h2 className="publictation-autor">{dataPublication.owner_username}</h2>
    </div>
  );
};