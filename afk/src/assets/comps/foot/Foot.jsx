import styles from './Foot.module.css'

function Foot() {
  return (
    <> 
      <footer> 
        <h3 className = {styles.header}> Contacts </h3>
        <address> 
          <p className = {styles.description}>
            <a className = {styles.description} href = "mailto:siuwon010@gmail.com"> Email </a>  
          </p>
          <p className = {styles.description}>
            <a className = {styles.description} href = "https://github.com/FoxParadeAFK"> GitHub </a>  
          </p>
          <p className = {styles.description}>
            <a className = {styles.description} href = "https://www.linkedin.com/in/siu-kitt-wong-07b89a299/"> Linkedln </a>  
          </p>
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