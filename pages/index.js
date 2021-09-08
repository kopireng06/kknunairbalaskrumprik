import Balaskrumprik from "../components/Balaskrumprik";
import Booklet from "../components/Booklet";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import KumpulanArtikel from "../components/KumpulanArtikel";
import KumpulanBerita from "../components/KumpulanBerita";

export default function Home() {
  return (
    <>
      <Jumbotron/>
      <Balaskrumprik/>
      <KumpulanArtikel/>
      <Booklet/>
      <KumpulanBerita/>
    </>
  )
}
