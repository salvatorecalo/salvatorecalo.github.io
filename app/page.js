import {Footer, Hub, Projects, Skills} from "@/app/sections";
import {FeedbackSection} from "@/app/sections/Feedback/FeedbackSection";


const metadata = {
  title: 'Salvatore Calo - Home Page',
  description: 'Junior Web Developer e graphic/web/ui/ux designer'
}

export default function Home() {
  return (
    <>
      <Hub />
      <Skills />
      <FeedbackSection />
      <Projects />
      <Footer />
    </>
  )
}
