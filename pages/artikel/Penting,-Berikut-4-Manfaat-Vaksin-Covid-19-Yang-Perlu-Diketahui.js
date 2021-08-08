import { useRouter } from 'next/router'
import Image from 'next/image'
import Jumbotron from "../../components/Jumbotron";
import Hashtags from "../../components/Hashtags";
import VaksinJokowi from "../../public/vaksin-jokowi.jpg";

const Artikel = () => {
    const pathname = useRouter().pathname.match("\/([A-Za-z0-9]*)\/")[0];
    console.log(pathname);
    return (  
        <>
            <Jumbotron pathName={pathname} gambar={VaksinJokowi} 
            judul="Penting, Berikut 4 Manfaat Vaksin Covid-19 Yang Perlu Diketahui" 
            tanggal="Kamis, 29 Juli 2021"/>
            <div className="w-11/12 md:9/12 lg:w-8/12 mx-auto py-5">
                <p className="text-sm my-3">
                    Vaksin Covid-19 merupakan “senjata” yang ampuh untuk melawan wabah penyakit akibat 
                    virus corona. Beberapa orang mungkin merasa ragu atau enggan divaksinasi karena potensi 
                    efek samping yang ditimbulkannya. Namun, Covid-19 juga memiliki risiko kesehatan yang 
                    jauh lebih serius dan merugikan dibandingkan efek samping vaksin. Menurut World Health 
                    Organization (WHO), vaksin Covid-19 yang resmi dan disetujui untuk digunakan telah 
                    melalui semua tahap untuk memastikan keamanan, kemanjuran, dan kualitas. WHO mengingatkan 
                    bahwa semua obat-obatan dan vaksin memiliki potensi efek samping. Dalam kebanyakan kasus, 
                    efek samping vaksin Covid-19 tergolong ringan.
                </p>
                <p className="text-sm my-3">
                    Mengenai hal ini, WHO meminta negara-negara untuk memiliki mekanisme yang baik dalam 
                    mengidentifikasi efek samping setelah vaksinasi Covid-19.
                    Sementara itu, setiap orang yang mendapatkan vaksin Covid-19 akan memperoleh banyak 
                    manfaat, salah satunya adalah penurunan risiko mengalami gejala Covid-19 yang parah. 
                    Selengkapnya, dilansir dari Centers for Disease Control and Prevention (CDC) dan Health 
                    Care University of Missouri, berikut adalah manfaat vaksin Covid-19.
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">1. Membantu menciptakan herd immunity</h2>
                <p className="text-sm my-3">
                    Pemberian vaksin Covid-19 bertujuan untuk mencegah dan memutus mata rantai penularan virus corona. 
                    Benar bahwa seseorang yang telah divaksinasi masih mungkin terinfeksi Covid-19, namun kemungkinan 
                    itu terus menurun seiring banyaknya jumlah orang dalam suatu kelompok yang divaksinasi hingga menciptakan herd immunity.
                    Dengan demikian, memperoleh vaksin Covid-19 tidak hanya menyelamatkan diri sendiri, tetapi juga melindungi orang-orang di sekitar.
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">2. Membangun perlindungan tubuh</h2>
                <p className="text-sm my-3">
                    Penelitian telah menunjukkan bahwa vaksinasi memberikan dorongan yang kuat untuk membangun 
                    perlindungan pada orang yang telah pulih dari Covid-19. Meski demikian, orang yang belum
                    pernah terinfeksi Covid-19 pun dapat terlindungi oleh vaksinasi.
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">3. Memperoleh kekebalan tubuh</h2>
                <p className="text-sm my-3">
                    Vaksin Covid-19 dapat memberikan kekebalan tubuh, meski CDC mengaku belum mengetahui berapa 
                    lama perlindungan yang mampu diberikan oleh vaksin. Hal yang diketahui pasti adalah Covid-19 
                    telah menyebabkan banyak sekali kematian di berbagai negara sehingga penularannya harus segera dihentikan, salah satunya melalui vaksinasi.
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">4. Menurunkan sakit parah akibat Covid-19</h2>
                <p className="text-sm my-3">
                    Orang yang sudah mendapatkan vaksin Covid-19 memiliki risiko yang lebih rendah untuk terkena gejala 
                    serius jika terinfeksi Covid-19. Sebagaimana uji klinis vaksin Pfizer-BioNTech 
                    dan Moderna yang menunjukkan bahwa vaksin ini 100 persen efektif dalam mencegah penyakit 
                    yang parah.
                </p>
                <p className="text-sm my-3 break-words">
                    Sumber : https://www.kompas.com/sains/read/2021/07/25/113200423/manfaat-vaksin-covid-19-yang-penting-diketahui-?page=all
                </p>
                <Hashtags/>
            </div>
        </>
    );
}
 
export default Artikel;