import Head from './comps/head/Head'
import Card from './comps/card/Card'
import Descriptor from './comps/descriptor/Descriptor'
import Foot from './comps/foot/Foot'
import Book from './comps/book/Book'

function About() {
  return (
    <>
      <Head />
      <Descriptor 
        header = {
          "Software & Tools"
        }
        description = {
          "An evergrowing collection of tools I primarily or occassionally use"
        }/>

      <div style = {{display: 'flex', flexWrap: 'wrap'}}> 
        <Card 
          image = {{ path: '/images/Logo_Godot.png', alt: "Godot" }} 
          description = "Godot  ∙  Game Engine"/>
        <Card 
          image = {{ path: "/images/Logo_Aseprite.png", alt: "Aseprite" }} 
          description = "Aseprite  ∙  2D Pixel Art"/>
        <Card 
          image = {{ path: "/images/Logo_VS.png", alt: "VScode" }} 
          description = "VScode  ∙  Code Editor"/>
        <Card 
          image = {{ path: "/images/Logo_Git.png", alt: "Git" }} 
          description = "Git  ∙  Version Control"/>
        <Card 
          image = {{ path: "/images/Logo_Linux.png", alt: "Linux" }} 
          description = "Linux  ∙  Ubuntu"/>
        <Card 
          image = {{ path: "/images/Logo_Notebook.png", alt: "Jupyter Notebooks" }} 
          description = "Jupyter Notebooks  ∙  Notebooks"/>
      </div>

      <Descriptor 
        header = {
          "Languages & Libraries"
        }
        description = {
          "Languages & libraries I typically use for development or hobbies"
        }/>

      <div style = {{display: 'flex', flexWrap: 'wrap'}}> 
        <Card
        image = {{ path: "/images/Logo_Python.png", alt: "Python" }} 
        description = "Python"/>
        <Card description = "NumPy"/>
        <Card description = "SymPy"/>
        <Card description = "MONAI  ∙  Medical Open Network for AI"/>
        <Card description = "PyTorch"/>
        <Card description = "Markdown"/>
        <Card description = "GDscript"/>
        <Card description = "React"/>
        <Card description = "HTML"/>
        <Card description = "CSS"/>
        <Card description = "JSX  ∙  JavaScript XML"/>
        <Card description = "Node.js"/>
        <Card description = "Vite"/>
      </div>

      <Descriptor 
        header = {
          "Languages"
        }
        description = {
          "Languages I can speak or am currently learning"
        }/>
        <div style = {{display: 'flex', flexWrap: 'wrap'}}> 
          <Card description = "English  ∙  Fluent"/>
          <Card description = "Chinese  ∙  Intermediate"/>
          <Card description = "Japanese  ∙  Begineer"/>
        </div>

      <Descriptor 
        header = {
          "Books"
        }
        description = {
          "Books I'm trying to finish; I've been trying to read a tad more..."
        }/>

        <Book 
          image = {{ path: "/images/Lonely_City.jpg", alt: "The Lonely City" }} 
          book = {{title: "The Lonely City: Adventures in the Art of Being Alone", author: "Olivia Laing"}}/>

      <Foot />
    </>
  )
}

export default About