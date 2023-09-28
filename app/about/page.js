import {MyImg} from "@/app/components/MyImg/MyImg";
import './About.css'
import {KnowMore} from "@/app/components";
import Link from "next/link";

const metadata = {
  title: 'Salvatore Calò - Informazioni su di me',
  description: 'Informazioni su Salvatore Calò, sviluppatore web e graphic/ui/ux/web designer',
  openGraph: {
    title: 'Salvatore Calò - Informazioni su di m',
    description: 'Informazioni su Salvatore Calò, sviluppatore web e graphic/ui/ux/web designer...',
  },
}

export default function about() {
  return (
    <section className="aboutSection">
      <MyImg />
      <h2>Chi sono</h2>
      <p>Piacere di fare la tua conoscenza, mi chiamo Salvatore Calò
        (brevemente Salvo), ho 18 anni e fin da piccolo è nata in me
        questa passione per la grafica e il mondo dell’informatica.
        Ormai però son passati anni dalla prima volta che ho acceso
        il computer aperto il primo programma di grafica e/o sviluppo
        web e mobile, e sono fiero che tu ora stia leggendo queste poche
        righe su di me!
      </p>
      <Link href="/" className="router-link">Torna alla Home Page del sito</Link>
    </section>
  )
}
