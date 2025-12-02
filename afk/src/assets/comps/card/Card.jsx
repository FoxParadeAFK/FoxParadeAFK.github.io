import styles from './Card.module.css'

function Card({
  image,
  description
}) {
  if (image) {
    return (
      <button className = {styles.button}>
        <p className = {styles.content}>    
          <img 
            className = {styles.image} 
            src = {image.path} 
            alt = {image.alt}>
          </img>
        </p>
        <p className = {styles.content}> {description} </p>
      </button>
    )
  }
  return (
    <button className = {styles.button}>
      <p className = {styles.content}> {description} </p>
    </button>
  )
}

export default Card