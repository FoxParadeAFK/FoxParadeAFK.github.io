import styles from './Card.module.css'

function Card({
  image,
  description
}) {
  if (image) {
    return (
      <button type = 'button' className = {styles.button}>
        <div style = {{display: 'flex'}}>
          <span className = {styles.content}>    
            <img className = {styles.image} src = {image.path} alt = {image.alt}></img>
          </span>
          <span className = {styles.content}> {description} </span>
        </div>
      </button>
    )
  }
  return (
    <button type = 'button' className = {styles.button}>
      <p className = {styles.content}> {description} </p>
    </button>
  )
}

export default Card