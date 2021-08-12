import CardBeritaPolos from "./CardBeritaPolos";
import CardBerita from "./CardBerita";
import ScreenShotPembukaan from "../public/screenshot-pembukaan.jpg";
import NgasihMasker2 from "../public/ngasih-masker-2.jpg";
import PengadaanTempatSampah from "../public/pengadaan-tempat-sampah.jpeg";
import PembuatanPot2 from "../public/pembuatan-pot-2.jpg";
import PemberdayaanUMKM from "../public/pemberdayaan-umkm.jpg";

const KumpulanBerita = () => {
    return (
        <>
        <div className="lg:container mx-auto">
            <h1 className="text-center font-bold text-3xl md:text-4xl">BERITA <span className="text-red-600"> KAMI</span></h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 p-5 md:px-16 md:pt-10">
                <CardBerita gambar={ScreenShotPembukaan} judul="Dilakukan Secara Daring, Pembukaan KKN-BBM 64 Kelompok 241 Mengusung Tema KKN Urban Pollution"/>
                <CardBerita gambar={NgasihMasker2} judul="Dilaksanakan di 3 RW, KKN-BBM 64 UNAIR Kel.241 Adakan Pembagian Hand Sanitizer, Masker Serta Penyuluhan Vaksin"/>
                <CardBerita gambar={PengadaanTempatSampah} judul="Membantu Mengurangi Pencemaran Lingkungan, Kelompok 241 KKN-BBM 64 UNAIR Adakan Pengadaan Tempat Sampah Dari Ban Bekas"/>
                <CardBerita gambar={PembuatanPot2} judul="Mengangkat Tema Urban Pollution, Kelompok KKN-BBM 64 UNAIR Kel.241 Mengubah Sampah Botol Plastik Bekas Menjadi Pot Bunga Yang Estetik"/>
                <CardBerita gambar={PemberdayaanUMKM} judul="Bantu Berdayakan UMKM, Kelompok 241 KKN-BBM 64 UNAIR Buatkan Banner Untuk Mi Ayam Lariso"/>
                <CardBeritaPolos/>
            </div>
        </div>    
    </>
    );
}
 
export default KumpulanBerita;