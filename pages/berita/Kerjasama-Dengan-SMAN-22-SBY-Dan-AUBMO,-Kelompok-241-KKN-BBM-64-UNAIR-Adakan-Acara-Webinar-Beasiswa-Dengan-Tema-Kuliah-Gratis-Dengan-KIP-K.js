import { useRouter } from 'next/router'
import Image from 'next/image'
import Jumbotron from "../../components/Jumbotron";
import Hashtags from "../../components/Hashtags";
import PenyuluhanBeasiswa from "../../public/penyuluhan-beasiswa.png";
import PenyuluhanBeasiswa2 from "../../public/penyuluhan-beasiswa-2.png";
import { motion } from 'framer-motion'

const Artikel = () => {
    const pathname = useRouter().pathname.match("\/([A-Za-z0-9]*)\/")[0];
    const initial = {y:-30,opacity:0};
    const transition = {delay:0.7};
    const animate = {y:0,opacity:1};
    const judul = "Kerjasama Dengan SMAN 22 SBY Dan AUBMO, Kelompok 241 KKN-BBM 64 UNAIR Adakan Acara Webinar Beasiswa Dengan Tema “Kuliah Gratis Dengan KIP-K”" 

    return (  
        <motion.div layoutId={judul}>
            <Jumbotron pathName={pathname} gambar={PenyuluhanBeasiswa} 
            judul={judul}
            tanggal="Kamis, 12 Agustus 2021"/>
            <motion.div initial={initial} transition={transition} animate={animate} className="w-11/12 md:9/12 lg:w-8/12 mx-auto py-5">
                <p className="text-sm my-3">
                    Kamis, 12 Agustus 2021 Kelompok 241 KKN-BBM 64 UNAIR melaksanakan acara webinar Beasiswa dengan 
                    tema “Kuliah gratis dengan KIP-K” . Acara ini diselenggarakan secara online via zoom meeting dengan 
                    menghadirkan 2 pemateri dari pengurus AUBMO (Organisasi Mahasiswa Bidikmsi Universitas Airlangga) 
                    yaitu Sahrian Aditya Rahmatullah dan Lilly Shinta Amelia. Kelompok 241 241 KKN-BBM 64 UNAIR melakukan 
                    kerjasama dengan pihak SMAN 22 Kelurahan Balas Klumprik Kecamatan Wiyung Kota Surabaya agar dapat 
                    mengirim siswanya mengikuti acara webinar tersebut. Peserta webinar terbilang banyak hingga sampai di angka 150 peserta.
                </p>
                <p className="text-sm my-3">
                    Kegiatan webinar dimulai pukul 09:00 WIB, diawali dengan sambutan dari ketua Kelompok 241 
                    KKN-BBM 64 UNAIR Naufal Ghani Achmani.Lilly Shinta Amelia sebagai pembicara pertama memberi 
                    motivasi kepada peserta webinar tentang pentingnya kuliah, meskipun kuliah itu mahal tetapi 
                    Lilly menjelaskan bahwa ada Beasiswa yang bisa digunakan untuk kuliah secara gratis yaitu KIP Kuliah. Lilly juga menjelaskan tentang pengertian KIP-K dan persyaratan penerima KIP – Kuliah.  Kemudian dilanjutkan dengan pembicara kedua yaitu Sahrian Aditya 
                    Rahmatullah yang menjelaskan tentang keunggulan penerima KIP-Kuliah dan tahapan Pendaftaran KIP-K.
                </p>
                <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                    <Image src={PenyuluhanBeasiswa2} alt="h" layout="fill" objectFit="cover"/>
                </div>
                <p className="text-sm my-3">
                    Setelah kedua pembicara selesai menyampaikan materinya kemudian dibuka sesi tanya jawab. 
                    Banyak peserta webinar yang antuisas ingin bertanya kepada pembicara mengenai Beasiswa KIP-K salah 
                    satunya adalah Jane Abigail yang bertanya “apakah kelas pendapatan menengah juga bisa mengikuti 
                    beasiswa ini dan laman pendaftaran apa saja yang bisa diisi secara opsional “. Pertanyaan tersebut 
                    dijawab oleh Sahrian “Bisa dilihat lagi pada persyaratan penerima KIP Kuliah untuk bisa mendapat 
                    beasiswa ini karena nanti ada proses verifikasi berkas dari perguruan tinggi apakah layak menerima 
                    atau tidak“ ungkapnya.
                </p>
                <p className="text-sm my-3">
                    Kegiatan webinar beasiswa dengan tema “ Kuliah gratis dengan KIP-K” berakhir pada pukul 10:30 WIB, 
                    sebagian pertanyaan yang belum terjawab akan dijawab melalui grup whatsapp peserta webinar. Untuk yang ingin tahu
                    bagaimana keseruan acara kami, yuk tonton video dibawah ini.
                </p>
                <aside className="w-full rounded-xl relative">
                    <div className="container-yt">
                        <iframe src="https://www.youtube.com/embed/ccX16gsHku4" frameBorder="0" allowFullScreen className="video"></iframe>
                    </div>
                </aside>
                <Hashtags/>
            </motion.div>
        </motion.div>
    );
}
 
export default Artikel;