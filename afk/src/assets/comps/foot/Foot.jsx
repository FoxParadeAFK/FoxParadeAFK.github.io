import styles from './Foot.module.css'

function Foot() {
  return (
    <> 
      <footer> 
        <h4 className = {styles.header}> Contacts </h4>
        <address> 
          <p className = {styles.description}> Email </p>
          <p className = {styles.description}> GitHub </p>
          <p className = {styles.description}> LinkedIn </p>  
          <p className = {styles.description}> Itch.io </p>  
        </address>
      </footer>
    </>
  )
}

export default Foot