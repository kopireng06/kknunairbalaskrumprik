import { useRouter } from 'next/router'
import Image from 'next/image'
import Jumbotron from "../../components/Jumbotron";
import Hashtags from "../../components/Hashtags";
import NgasihMasker2 from "../../public/ngasih-masker-2.jpg"
import NgasihMasker from "../../public/ngasih-masker.jpg"
import NgasihMaskerPoster from "../../public/ngasih-masker-poster.jpg"
import { motion } from 'framer-motion';

const Artikel = () => {
    const pathname = useRouter().pathname.match("\/([A-Za-z0-9]*)\/")[0];
    const initial = {y:-30,opacity:0};
    const transition = {delay:0.7};
    const animate = {y:0,opacity:1};
    const judul = "Dilaksanakan di 3 RW, KKN-BBM 64 UNAIR Kel.241 Adakan Pembagian Hand Sanitizer, Masker Serta Penyuluhan Vaksin"

    return (  
        <motion.div layoutId={judul}>
            <Jumbotron pathName={pathname} gambar={NgasihMasker2} 
            judul={judul}  tanggal="Sabtu, 7 Agustus 2021"/>
            <motion.div initial={initial} transition={transition} animate={animate} className="w-11/12 md:9/12 lg:w-8/12 mx-auto py-5">
                <p className="text-sm my-3">
                    Pada hari sabtu tanggal 7 Agustus 2021, kelompok 241 KKN-BBM 64 Universitas Airlangga melaksanakan 
                    penyuluhan vaksin dan pembagian hand sanitizer di wilayah Kelurahan Balas Klumprik, Kecamatan Wiyung, Kota Surabaya.
                </p>
                <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                    <Image src={NgasihMasker} alt="h" layout="fill" objectFit="cover"/>
                </div>
                <p className="text-sm my-3">
                    Penyuluhan vaksin dan pembagian hand sanitiser dilaksanakan secara offline oleh kelompok 241. 
                    Dalam kegiatan tersebut dilakukan melalui media poster dan melakukan kegiatan pembagian hand 
                    sanitizer dan masker kepada warga. Meskipun kegiatan tersebut dilaksanakan secara offline, 
                    kegiatan tersebut dilaksanakan dengan mematuhi prokes atau protokol kesehatan yakni memakai masker 
                    dan menjaga jarak. Dalam kelompok 241 memiliki anggota sejumlah 10 orang, dengan dibagi menjadi 
                    3 tim sesuai dengan wilayah pembagian yakni RW 2 RW 3 dan RW 4 agar tidak menciptakan kerumunan.
                </p>
                <p className="text-sm my-3">
                    Pada kegiatan tersebut dijelaskan kepada warga setempat tentang seberapa pentingnya vaksin itu 
                    dilakukan, meluruskan informasi hoax terkait pemberian vaksin yang beredar di masyarakat dan 
                    emudian melakukan pembagian hand sanitizer dan juga masker agar mengurangi kemungkinan penyebaran 
                    covid-19. Hand sanitizer dan masker tersebut dibagikan di tempat umum seperti rumah makan dan warung kopi.
                </p>
                <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                    <Image src={NgasihMaskerPoster} alt="h" layout="fill" objectFit="cover"/>
                </div>
                <Hashtags/>
            </motion.div>
        </motion.div>
    );
}
 
export default Artikel;