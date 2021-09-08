import { useRouter } from 'next/router'
import Image from 'next/image'
import Jumbotron from "../../components/Jumbotron";
import ScreenShotPembukaan from "../../public/screenshot-pembukaan.jpg";
import ScreenShotPembukaan2 from "../../public/screenshot-pembukaan-2.jpg";
import Hashtags from '../../components/Hashtags';
import { motion } from 'framer-motion';

const Berita1 = () => {
    const pathname = useRouter().pathname.match("\/([A-Za-z0-9]*)\/")[0];
    const initial = {y:-30,opacity:0};
    const transition = {delay:0.7};
    const animate = {y:0,opacity:1};

    return (  
        <motion.div layoutId={judul}>
            <Jumbotron pathName={pathname} gambar={ScreenShotPembukaan} judul="Dilakukan Secara Daring, Pembukaan KKN-BBM 64 
            Kelompok 241 Mengusung Tema KKN Urban Pollution" tanggal="Kamis, 29 Juli 2021"/>
            <motion.div initial={initial} transition={transition} animate={animate} className="w-11/12 md:9/12 lg:w-8/12 mx-auto py-5">
                <p className="text-sm my-3">
                    Kamis, 29 Juli 2021 dilaksanakan Pembukaan KKN BBM 64 Kelompok 241 dengan mengusung 
                    tema KKN Urban Pollution yang nantinya di selenggarakan di kelurahan Balas Klumprik, 
                    kecamatan Wiyung kota Surabaya. Acara berlangsung via daring melalui zoom meeting yang 
                    berlangsung selama 2 jam dimulai pukul 08.30 dan dihadiri oleh koordinator 9 KKN, 
                    Dr. Prihatini Widiyanti,drg., M.Kes, S.Bio, CCD., Dosen Pembimbing Lapangan, 
                    Dr. Yulis Setiya Dewi, S.Kep.Ns., M.Ng., Camat Wiyung, Achmad zaini, S.Sos., M.Si., 
                    yang diwakili oleh sekretaris Camat, Lurah Balas Klumprik, Dra. Sriheryanti 
                    Trisuwandani,MM. Kepala Sekolah SD, SMA Balas Klumprik, dan juga Ketua RT RW Balas 
                    Klumprik. 
                </p>
                <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                    <Image src={ScreenShotPembukaan2} alt="h" layout="fill" objectFit="cover"/>
                </div>
                <p className="text-sm my-3">
                    Pelaksanaan pembukaan KKN tersebut dilaksanakan secara daring sesuai dengan himbauan 
                    pemerintah maupun universitas, agar tidak menciptakan kerumunan. Meskipun acara
                    dilaksanakan secara daring, pembukaan KKN tersebut berjalan dengan lancar dan hikmat.
                    Pada acara pembukaan tersebut Koordinator KKN dan Dosen Pembimbing Lapangan menyampaikan 
                    pesan kepada mahasiswa yang melaksanakan KKN, agar selalu menjaga nama baik almamater 
                    Universitas Airlangga, dengan tujuan utama KKN untuk mengabdi kepada masyarakat.
                </p>
                <p className="text-sm my-3">
                    Pada acara tersebut kelompok 241 memaparkan program kerja sesuai dengan tema yang 
                    diusung yang mengaitkan dengan isu Urban pollution dari beberapa bidang seperti : 
                    Ekonomi, kesehatan, pendidikan dan lingkungan. Program kerja tersebut antara lain : 
                    1. Pemberdayaan UMKM.2. Penyebaran Booklet.3. Penyuluhan Vaksin dan Pembagian Hand 
                    Sanitizer.4. Penyuluhan Beasiswa.5. Memperindah kantor kelurahan dan Pengadaan tempat 
                    sampah di Wisata Batas Kampung.6. Mengajar.7. Pembuatan Konten edukasi. Pada saat sesi 
                    tanya jawab pak sekretaris camat memberikan saran dari salah satu program kerja yakni 
                    ketika pemberdayaan UMKM beliau memberikan saran agar melakukan pendampingan terhadap 
                    UMKM pada aspek kualitas produk yang dihasilkan dan juga proses produksi. 
                </p>
                <Hashtags/>
            </motion.div>
        </motion.div>
    );
}
 
export default Berita1;