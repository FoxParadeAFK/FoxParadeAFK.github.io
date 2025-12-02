import styles from './Book.module.css'

function Book({
  image,
  book
}) {
  return (
    <button className = {styles.button}>
      <p className = {styles.content}>    
        <img 
          className = {styles.image} 
          src = {image.path} 
          alt = {image.alt}>
        </img>
      </p>
      <div className = {styles.description}>
        <p className = {styles.content}> {book.title} </p>
        <p className = {styles.content}> <i> {book.author} </i> </p>
      </div>
    </button>
  )
}

export default Book