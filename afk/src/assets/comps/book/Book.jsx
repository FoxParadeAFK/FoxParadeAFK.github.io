import styles from './Book.module.css'

function Book({
  image,
  book
}) {
  return (
    <button type = 'button' className = {styles.button}>
      <div style = {{display: 'flex'}}>
        <p className = {styles.content}>    
          <img className = {styles.image} src = {image.path} alt = {image.alt}></img>
        </p>
        <div className = {styles.description}>
          <p className = {styles.content} id = {styles.title}> {book.title} </p>
          <p className = {styles.content} id = {styles.author}> <i> {book.author} </i> </p>
        </div>
      </div>
    </button>
  )
}

export default Book