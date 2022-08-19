import React from 'react'
import styles from './styles.module.css'
const SavedFavs = ({ favorites, setFavorites, setSelectedFav }) => {
  const deleteFavorite = (i) => {
    const newFavs = favorites.filter((fav, index) => index !== i)
    setFavorites(newFavs)
  }
  const handleFav = (fav) => {
    setSelectedFav(fav)
  }
  return (
    <section className={styles.savedFavs}>
      <h2>saved</h2>
      <ul>
        {
          favorites.map((fav, i) => {
            return (
              <li key={i} onClick={() => handleFav(fav)}>
                <p>
                  {`${fav.input} ${fav.inputType} -> ${fav.result} ${fav.resulType}`}
                </p>
                  <button onClick={() => deleteFavorite(i)}>X</button>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default SavedFavs
