import { Head, Foot } from './assets/Framework'

function Card({
  image,
  description
}) {
  return (
    <>
      <img 
        src = {image.image} 
        alt = {image.alt}
        width = {image.length}
        height = {image.length}
      />
      <p> {description.header} </p>
      <p> {description.subtitle} </p>
    </>
  )
}

function Skills() {
  return (
    <>
      <Head />
        <h3> Skills </h3>
        <p> An evergrowing collection of tools I have learnt and used academically or personally ... </p>

        <h3> Languages </h3>
        <p> The languages and libaries I use everyday in my work </p>
        <ul>
          <li> Python </li>
          <li> Scikit-learn, Sk-learn </li>
          <li> Medical open network for AI, MONAI </li>
          <li> NumPy </li>
          <li> Jupyter Notebooks </li>
          <li> React </li>
          <li> Node.js </li>
          <li> Markdown </li>
          <li> PyTorch </li>
          <li> GDscript </li>
        </ul>

        <h3> Software </h3>
        <p> Collection of my most used tools and software </p>

        <Card 
        image = {{image: "../src/assets/Logo_Aseprite.png", alt: "Aseprite", length: 50}}
        description = {{header: 'Aseprite', subtitle: '2D pixel art and animations'}}
        />

        <Card 
        image = {{image: "../src/assets/Logo_Godot.png", alt: "Aseprite", length: 50}}
        description = {{header: 'Aseprite', subtitle: '2D pixel art and animations'}}
        />

        <Card 
        image = {{image: "../src/assets/Logo_Godot.png", alt: "Aseprite", length: 50}}
        description = {{header: 'Aseprite', subtitle: '2D pixel art and animations'}}
        />

        <h3> Books </h3>
        <p> Books I'm trying to finish </p>
      <Foot />
    </>
  )
}

export default Skills