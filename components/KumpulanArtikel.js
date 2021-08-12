import CardArtikel from "./CardArtikel"
import CardArtikelPolos from "./CardArtikelPolos";
import VaksinJokowi from "../public/vaksin-jokowi.jpg";
import KebersihanLingkungan from "../public/kebersihan-lingkungan.jpeg";
import Edukasi5M from "../public/edukasi-5m.jpg";
import MemakaiMasker from "../public/memakai-masker.PNG";
import PenyuluhanVaksin from "../public/penyuluhan-vaksin.jpg";

const KumpulanArtikel = () => {
    return (
    <>
        <div className="lg:container mx-auto">
            <h1 className="text-center font-bold text-3xl md:text-4xl">ARTIKEL <span className="text-red-600"> KAMI</span></h1>
            <div className="w-full items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 p-5 md:px-16 md:pt-10">
                <CardArtikel gambar={PenyuluhanVaksin} judul="Penting, Berikut 4 Manfaat Vaksin Covid-19 Yang Perlu Diketahui"
                 tanggal="Kamis, 25 Juli 2021" deskripsi="Vaksin Covid-19 merupakan “senjata” yang ampuh untuk melawan 
                 wabah penyakit akibat virus corona. Beberapa orang mungkin merasa ragu atau enggan divaksinasi 
                 karena potensi efek samping yang ditimbulkannya." />
                <CardArtikel gambar={KebersihanLingkungan} judul="6 Cara Menjaga Kebersihan Lingkungan, Lengkap Beserta Manfaatnya Untuk Kesehatan"
                 tanggal="Kamis, 25 Juli 2021" deskripsi="Seperti yang sudah diketahui, lingkungan yang kotor dan 
                 terdapat genangan air dapat menjadi sarang dari banyak bibit penyakit berbahaya. Sehingga upaya 
                 membersihkan pekarangan rumah perlu dilakukan agar terhindar dari berbagai penyakit dan bencana alam." />
                <CardArtikel gambar={MemakaiMasker} judul="Mengenal Protokol Kesehatan 5M Untuk Cegah COVID-19"
                 tanggal="Kamis, 25 Juli 2021" deskripsi="Meski sudah lebih dari satu tahun, pandemi virus corona 
                 masih terus menyerang penduduk dunia tanpa henti. Di Indonesia, angka kasus positif virus corona 
                 sudah di atas 1,5 juta jiwa (02/07/2021). " />
                {/* <CardArtikelPolos/>
                <CardArtikelPolos/>
                <CardArtikelPolos/> */}
            </div>
        </div>    
    </>
    );
}
 
export default KumpulanArtikel;