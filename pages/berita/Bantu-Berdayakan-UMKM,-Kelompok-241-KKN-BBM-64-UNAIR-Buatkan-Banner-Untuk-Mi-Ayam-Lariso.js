import { useRouter } from 'next/router'
import Image from 'next/image'
import Jumbotron from "../../components/Jumbotron";
import Hashtags from "../../components/Hashtags";
import PemberdayaanUMKM from "../../public/pemberdayaan-umkm.jpg";
import PemberdayaanUMKM2 from "../../public/pemberdayaan-umkm-2.jpg";

const Artikel = () => {
    const pathname = useRouter().pathname.match("\/([A-Za-z0-9]*)\/")[0];
    console.log(pathname);
    return (  
        <>
            <Jumbotron pathName={pathname} gambar={PemberdayaanUMKM} 
            judul="Bantu Berdayakan UMKM, Kelompok 241 KKN-BBM 64 UNAIR Buatkan Banner Untuk Mi Ayam Lariso" 
            tanggal="Selasa, 10 Agustus 2021"/>
            <div className="w-11/12 md:9/12 lg:w-8/12 mx-auto py-5">
                <p className="text-sm my-3">
                    Selasa, 10 Agustus 2021 Kelompok 241 KKN-BBM 64 Universitas Airlangga melaksanakan program kerja 
                    pemberdayaan UMKM. Dalam Kegiatan ini Kelompok 241 Membuatkan desain banner yang isinya merupakan 
                    identitas UMKM baik dari segi pengenalan UMKM tersebut maupun produk yang dijualnya serta membantu 
                    memasarkan produk jualan dari UMKM tersebut ke aplikasi pemasaran online seperti 
                    GoFood, GrabFood, dan Shopee Food, dan juga membuatkan peta lokasi UMKM tersebut di google maps.
                </p>
                <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                    <Image src={PemberdayaanUMKM2} alt="h" layout="fill" objectFit="cover"/>
                </div>
                <p className="text-sm my-3">
                    UMKM yang yang telah mendapatkan pemberdayaan dari Kelompok 241 adalah penjual mie ayam “Lariso“
                    yang terletak di RW 02 Kelurahan Balas Klumprik Kecamatan Wiyung Kota Surabaya. Dengan adanya 
                    pemberdayaan ini, kelompok 241 berharap UMKM tersebut bisa bertahan dalam keadaan pandemi  dan dapat menaikkan omset dari penjualan sebelumnya.
                </p>
                <Hashtags/>
            </div>
        </>
    );
}
 
export default Artikel;