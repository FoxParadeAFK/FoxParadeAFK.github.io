import Head from './comps/head/Head'
import Foot from './comps/foot/Foot'

function Home() {
  return (
    <>
      <Head />
      <p> Hello, My name is Kitt, or if we addressing usernames, FoxParadeAFk or AFK. </p>

      <p> I am a final year student at the University of Westminster, studying Computer Science. I gravitate mostly towards machine learning and cloud computing but I dabble with most things tech. </p>

      <p> In my free time, you may find me perhaps tinkering as a hobbyist games developer, working on my drawing skills, or praticing my Japanese</p>

      <p> I am currently researching and developing my final year project; a study into anomaly detection for MRI brain tumour segmentation via U-Net. </p>
      <Foot />
    </>
  )
}

export default Home