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

        <p style = {{
          fontStyle: 'italic',
          fontSize: 12,
          textAlign: 'center'
        }}> 2025 Built with React, deployed with Vite and hosted on GitHub Pages </p>
      </footer>
    </>
  )
}

export default Foot