import '../assets/styling/style_framework.css';

function Head() {
  var length = 100

  return (
    <> 
      <div className = 'header'>
        <div>
          <img 
            src = "https://github.com/FoxParadeAFK.png" 
            alt = "Profile Picture"
            width = {length}
            height = {length}
          />
        </div>

        <div className = 'description'>
          <p> S. Kitt Wong </p>
          <p> Student</p>
        </div>
      </div>

      <div className = 'navigation'> 
        <nav> 
          <button> Abouts </button> { /* General information and introduction */ }
          <button> Projects </button> { /* All skills, projects, indie or academic */ }
          <button> Skills </button> { /* Software, books */ }
        </nav>
      </div>
    </>
  )
}

function Foot() {
  return (
    <> 
      <footer className = 'footer'> 
        <h2> Contacts</h2>
        <address> 
          <p> Email </p>
          <p> GitHub </p>
          <p> LinkedIn </p>  
          <p> Itch.io </p>  
        </address>
      </footer>
    </>
  )
}

export { Head, Foot }

