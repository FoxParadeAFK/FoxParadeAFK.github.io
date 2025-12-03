import styles from './Descriptor.module.css'

function Descriptor({ 
  header,
  description,
}) {
  return (
    <div className = {styles.descriptor}> 
      <h3 className = {styles.header}> {header} </h3>
      <p className = {styles.description}> {description} </p>
    </div>
  )
}

function Header({
  header
}) {
  <div className = {styles.descriptor}> 
    <h3 className = {styles.header}> {header} </h3>
  </div>
}

function Description({
  description
}) {
  <div className = {styles.descriptor}> 
    <p className = {styles.description}> {description} </p>
  </div>
}

export { Descriptor, Header, Description }