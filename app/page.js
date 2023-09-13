import Hub from "@/app/sections/Hub/Hub";
import {Skills} from "@/app/sections/Skills/Skills";
import {Footer} from "@/app/sections/Footer/Footer";

const metadata = {
  title: 'Salvatore Calo - Home Page',
  description: 'Junior Web Developer e graphic/web/ui/ux designer'
}

export default function Home() {
  return (
    <>
      <Hub />
      <Skills />
      <Footer />
    </>
  )
}
