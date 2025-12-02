import Head from './comps/head/Head'
import Card from './comps/card/Card'
import Descriptor from './comps/descriptor/Descriptor'
import Foot from './comps/foot/Foot'

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
          image = {{ path: './public/_images/Logo_Godot.png', alt: "Godot" }} 
          description = "Godot  ∙  Game Engine"/>
        <Card 
          image = {{ path: "./public/_images/Logo_Aseprite.png", alt: "Aseprite" }} 
          description = "Aseprite  ∙  2D Pixel Art"/>
        <Card 
          image = {{ path: "./public/_images/Logo_VS.png", alt: "VScode" }} 
          description = "VScode  ∙  Code Editor"/>
        <Card 
          image = {{ path: "./public/_images/Logo_Git.png", alt: "Git" }} 
          description = "Git  ∙  Version Control"/>
        <Card 
          image = {{ path: "./public/_images/Logo_Linux.png", alt: "Linux" }} 
          description = "Linux  ∙  Unbuntu"/>
        <Card 
          image = {{ path: "./public/_images/Logo_Notebook.png", alt: "Jupyter Notebooks" }} 
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
        <Card description = "Python"/>
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

      <Foot />
    </>
  )
}

export default About