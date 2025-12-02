import styles from './Head.module.css'

function Head() {
  let profile = {
    path: "https://github.com/FoxParadeAFK.png",
    alt: "Profile Image",
    length: 100
  }
  return (
    <>
      <h3 className = {styles.username}> FoxParadeAFK </h3>
      <div className = {styles.header}>
        <img src = {profile.path} alt = {profile.alt} 
          height = {profile.length} width = {profile.length} />
        <div className = {styles.title}> 
          <p className = {styles.content}> S. Kitt Wong </p>
          <p className = {styles.content}> Student </p>
        </div>
      </div>
      <Navigation />
    </>
  )
}

function Navigation() {
  return (
    <div className = {styles.navigation}> 
      <button className = {styles.button}> 
        <p className = {styles.content}> Home </p> </button>
      <button className = {styles.button}> 
        <p className = {styles.content}> About </p> </button> 
      <button className = {styles.button}> 
        <p className = {styles.content}> Projects </p> </button>
    </div>
  )
}

export default Head