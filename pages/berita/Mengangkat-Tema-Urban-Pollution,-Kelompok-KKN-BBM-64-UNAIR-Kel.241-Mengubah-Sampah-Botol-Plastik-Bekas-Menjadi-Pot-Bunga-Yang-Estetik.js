import { useRouter } from 'next/router'
import Image from 'next/image'
import Jumbotron from "../../components/Jumbotron";
import Hashtags from "../../components/Hashtags";
import PembuatanPot from "../../public/pembuatan-pot.jpg";
import PembuatanPot2 from "../../public/pembuatan-pot-2.jpg";
import PembuatanPot3 from "../../public/pembuatan-pot-3.jpg";
import { motion } from 'framer-motion'

const Artikel = () => {
    const pathname = useRouter().pathname.match("\/([A-Za-z0-9]*)\/")[0];
    const initial = {y:-30,opacity:0};
    const transition = {delay:0.7};
    const animate = {y:0,opacity:1};

    return (  
        <motion.div layoutId={judul}>
            <Jumbotron pathName={pathname} gambar={PembuatanPot2} 
            judul="Mengangkat Tema Urban Pollution, Kelompok KKN-BBM 64 UNAIR Kel.241 Mengubah Sampah Botol Plastik Bekas Menjadi Pot Bunga Yang Estetik" 
            tanggal="Senin, 9 Agustus 2021"/>
            <motion.div initial={initial} transition={transition} animate={animate} className="w-11/12 md:9/12 lg:w-8/12 mx-auto py-5">
                <p className="text-sm my-3">
                    Guna mengurangi sampah botol plastik kelompok 241 KKN-BBM 64 Universitas Airlangga membuat 
                    program kerja memperindah taman kantor Kelurahan Balas Klumprik, Kecamatan Wiyung, Kota Surabaya 
                    dengan mengolah sampah botol plastik bekas menjadi pot bunga yang memiliki nilai jual dan estetik.
                </p>
                <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                    <Image src={PembuatanPot} alt="h" layout="fill" objectFit="cover"/>
                </div>
                <p className="text-sm my-3">
                    Program kerja ini dilaksanakan secara offline selama 2 hari oleh kelompok 241. Meskipun pelaksaannya 
                    secara offline, kelompok 241 sangat mentaati protokol kesehatan sesuai yang dianjurkan Pemerintah. 
                    Pada hari pertama Senin, 9 Agustus 2021 Kelompok 241 membuat pot bunga dari botol plastik bekas 
                    sebanyak 21 pot yang akan digunakan untuk memperindah kantor Kelurahan Balas Klumprik, Kecamatan 
                    Wiyung, Kota Surabaya. Kegiatan ini disertai dengan pembuatan video tutorial bagaimana cara membuat 
                    pot bunga dari botol plastik bekas dan dapat dilihat di youtube KKN-BBM 64 UNAIR kelompok 241. 
                    Langkah dalam mengolah sampah botol plastik bekas menjadi pot bunga yang estetik sangatlah mudah, 
                    sehingga bisa ditiru oleh masyarakat agar dapat mengurangi sampah botol plastik yang menumpuk.
                </p>
                <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                    <Image src={PembuatanPot3} alt="h" layout="fill" objectFit="cover"/>
                </div>
                <p className="text-sm my-3">
                    Pada hari kedua Selasa, 10 Agustus 2021 Kelompok 241 melakukan kegiatan memperindah taman kantor 
                    Kelurahan Balas Klumprik, Kecamatan Wiyung, Kota Surabaya dengan memberi 21 pot bunga yang sudah
                    dibuat sebelumnya. Pot bunga tersebut sudah berisi tanaman bunga yang sangat cantik sehingga taman
                    kantor kelurahan menjadi lebih indah dari sebelumnya.  Kelompok 241 juga menempel 5 poster
                    himbauan dan edukasi kesehatan di papan mading kelurahan. Dari kegiatan tersebut diharapkan
                    masyarakat dapat mengatasi urban poluttion yang ada di sekitar Kelurahan Balas Klumprik,
                    Kecamatan Wiyung, Kota Surabaya dengan mengolah sampah menjadi barang yang bermanfaat dan bernilai estetik.
                </p>
                <Hashtags/>
            </motion.div>
        </motion.div>
    );
}
 
export default Artikel;