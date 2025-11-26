function Head() {
  var length = 100

  return (
    <> 
      <div>
        <img 
          src = "https://github.com/FoxParadeAFK.png" 
          alt = "Profile Picture"
          width = {length}
          height = {length}
        />
      </div>

      <div>
        <p> S. Kitt Wong </p>
        <p> Student</p>
      </div>

      <div> 
        <nav> 
          <button> Home </button>
          <button> Abouts </button>
          <button> Favourites </button>
        </nav>
      </div>
    </>
  )
}

function Foot() {
  return (
    <> 
      <footer> 
        <h2> Contacts</h2>
        <nav> 
          <p> Email </p>
          <p> Discord </p>  
          <p> Itch </p>  
        </nav>
      </footer>
    </>
  )
}

export { Head, Foot }

