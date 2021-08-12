import { useRouter } from 'next/router'
import Image from 'next/image'
import Jumbotron from "../../components/Jumbotron";
import Hashtags from "../../components/Hashtags";
import PengadaanTempatSampah from "../../public/pengadaan-tempat-sampah.jpeg";
import PengadaanTempatSampah2 from "../../public/pengadaan-tempat-sampah-2.jpeg";

const Artikel = () => {
    const pathname = useRouter().pathname.match("\/([A-Za-z0-9]*)\/")[0];
    console.log(pathname);
    return (  
        <>
            <Jumbotron pathName={pathname} gambar={PengadaanTempatSampah} 
            judul="Membantu Mengurangi Pencemaran Lingkungan, Kelompok 241 KKN-BBM 64 UNAIR Adakan Pengadaan Tempat Sampah Dari Ban Bekas" 
            tanggal="Senin, 9 Agustus 2021"/>
            <div className="w-11/12 md:9/12 lg:w-8/12 mx-auto py-5">
                <p className="text-sm my-3">
                    Senin, 9 Agustus 2021 kelompok 241 KKN-BBM 64 Universitas Airlangga melaksanakan program kerja 
                    pengadaan tempat sampah di kelurahan balas klumprik, kecamatan wiyung, kota surabaya. Program 
                    kerja tersebut dilaksanakan oleh perwakilan dari kelompok 241 yakni 4 orang, agar tidak 
                    menciptakan kerumunan di lapangan, meskipun program kerja tersebut  
                    dilaksanakan secara offline, kelompok 241 tetap mentaati prokes atau protokol kesehatan. 
                </p>
                <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                    <Image src={PengadaanTempatSampah2} alt="h" layout="fill" objectFit="cover"/>
                </div>
                <p className="text-sm my-3">
                    Program kerja tersebut tidak terlepas dari tema KKN yang diusung yaitu untuk mengurangi permasalahan 
                    urban pollution. Pengadaan tempat sampah tersebut dilakukan secara offline di kantor kelurahan balas klumprik dan Wisata Batas Kampung (WBK). 
                </p>
                <Hashtags/>
            </div>
        </>
    );
}
 
export default Artikel;