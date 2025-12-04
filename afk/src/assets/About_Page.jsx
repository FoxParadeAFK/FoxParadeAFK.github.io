import Head from './comps/head/Head';
import Card from './comps/card/Card';
import { Descriptor } from './comps/descriptor/Descriptor';
import Foot from './comps/foot/Foot';
import Book from './comps/book/Book';
import { tools } from './comps/js/softwares';
import { languages } from './comps/js/languages';
import { books } from './comps/js/books';

function About() {
  return (
    <>
      <Head />
      <Descriptor header = "Software & Tools" description = "An evergrowing collection of tools I primarily or occassionally use"/>

      <div style = {{display: 'flex', flexWrap: 'wrap'}}> 
        {tools.map((tool) => (<Card key = {tool.id} {...tool} />))}
      </div>

      <Descriptor header = "Languages & Libraries" description = "Languages & libraries I typically use for development or hobbies"/>

      <div style = {{display: 'flex', flexWrap: 'wrap'}}> 
        {languages.map((language) => (<Card key = {language.id} {...language} />))}
      </div>

      <Descriptor header = "Languages" description = "Languages I can speak or am currently learning"/>

      <div style = {{display: 'flex', flexWrap: 'wrap'}}> 
        <Card description = "English  ∙  Fluent"/>
        <Card description = "Chinese  ∙  Intermediate"/>
        <Card description = "Japanese  ∙  Begineer"/>
      </div>

      <Descriptor header = "Books" description = "Books I'm trying to finish; I've been trying to read a tad more lately..."/>
      {books.map((book) => (<Book key = {book.id} {...book} />))}
      <Foot />
    </>
  )
}

export default About