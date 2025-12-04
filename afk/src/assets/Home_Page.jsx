import Head from './comps/head/Head';
import Foot from './comps/foot/Foot';
import { Header, Description} from './comps/descriptor/Descriptor'; 

function Home() {
  return (
    <>
      <Head />
      <Header header = "Introduction" />
      <Description description = "Hello, My name is Kitt, or if we addressing usernames, FoxParadeAFk or AFK." />

      <Description description = "I am a final year student at the University of Westminster studying Computer Science. I gravitate towards machine learning and cloud computing but I dabble most thing tech." />

      <Description description = "Currently, I am researching anomaly detection in MRI brain tumour segmentation for my final year project" />

      <Description description = "In my free time, you will either see tinkering as a hobbyist games developer or praticing my drawings and pixel art" />


      <Foot />
    </>
  )
}

export default Home