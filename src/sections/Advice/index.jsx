import { useEffect, useState } from "react";

function AdviceSection() {
  const [advice, setAdvice] = useState(null)
  const [favourites, setFavourites] = useState([])

  function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip)
      })
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  function addFavourite() {
    setFavourites([...favourites, advice])
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        {advice && (
          <>
            <p>{advice.advice}</p>

            <button onClick={fetchAdvice}>
              Get new Advice
            </button>

            <button onClick={addFavourite}>
              Save Favourite
            </button>
          </>
        )}
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice</h3>
        <ul>
          {favourites.map((fav, index) => (
            <li key={index}>{fav.advice}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection
