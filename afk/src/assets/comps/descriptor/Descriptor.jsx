import styles from './Descriptor.module.css'

function Descriptor({ 
  header,
  description,
}) {
  return (
    <div className = {styles.descriptor}> 
      <h4 className = {styles.header}> {header} </h4>
      <p className = {styles.description}> {description} </p>
    </div>
  )
}

export default Descriptor