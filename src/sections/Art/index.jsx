import { useEffect, useState } from "react";

function ArtsSection() {
  const [artworks, setArtWorks] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/art")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArtWorks(data);
      });
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>

      <div className="scroll-container">
        {artworks.map((artwork) => (
          <div key={artwork.id}>
            <img
              src={`https://boolean-uk-api-server.fly.dev${artwork.imageURL}`}
              alt={artwork.title}
            />

            <h3>{artwork.title}</h3>
            <p>{artwork.artist}</p>

            <ul>
              {artwork.publicationHistory.map((publication, index) => (
                <li key={index}>{publication}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArtsSection;
