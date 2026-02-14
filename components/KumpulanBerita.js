import CardBeritaPolos from './CardBeritaPolos'
import CardBerita from './CardBerita'
import ScreenShotPembukaan from '../public/screenshot-pembukaan.jpg'
import NgasihMasker2 from '../public/ngasih-masker-2.jpg'
import PengadaanTempatSampah from '../public/pengadaan-tempat-sampah.jpeg'
import PembuatanPot2 from '../public/pembuatan-pot-2.jpg'
import PemberdayaanUMKM from '../public/pemberdayaan-umkm.jpg'
import PenyuluhanBeasiswa from '../public/penyuluhan-beasiswa.png'

const berita = [
  {
    gambar: ScreenShotPembukaan,
    judul: 'Dilakukan Secara Daring, Pembukaan KKN-BBM 64 Kelompok 241 Mengusung Tema KKN Urban Pollution',
    pathName: 'dilakukan-secara-daring-pembukaan-kkn-bbm-64-kelompok-241-mengusung-tema-kkn-urban-pollution',
    tanggal: 'Kamis, 25 Juli 2021',
    deskripsi: 'Dilakukan Secara Daring, Pembukaan KKN-BBM 64 Kelompok 241 Mengusung Tema KKN Urban Pollution'
  },
  {
    gambar: NgasihMasker2,
    judul:
      'Dilaksanakan di 3 RW, KKN-BBM 64 UNAIR Kel.241 Adakan Pembagian Hand Sanitizer, Masker Serta Penyuluhan Vaksin',
    pathName:
      'dilaksanakan-di-3-rw-kkn-bbm-64-unair-kel.241-adakan-pembagian-hand-sanitizer-masker-serta-penyuluhan-vaksin',
    tanggal: 'Kamis, 25 Juli 2021',
    deskripsi:
      'Dilaksanakan di 3 RW, KKN-BBM 64 UNAIR Kel.241 Adakan Pembagian Hand Sanitizer, Masker Serta Penyuluhan Vaksin'
  },
  {
    gambar: PengadaanTempatSampah,
    judul:
      'Membantu Mengurangi Pencemaran Lingkungan, Kelompok 241 KKN-BBM 64 UNAIR Adakan Pengadaan Tempat Sampah Dari Ban Bekas',
    pathName:
      'membantu-mengurangi-pencemaran-lingkungan-kelompok-241-kkn-bbm-64-unair-adakan-pengadaan-tempat-sampah-dari-ban-bekas',
    tanggal: 'Kamis, 25 Juli 2021',
    deskripsi:
      'Membantu Mengurangi Pencemaran Lingkungan, Kelompok 241 KKN-BBM 64 UNAIR Adakan Pengadaan Tempat Sampah Dari Ban Bekas'
  },
  {
    gambar: PembuatanPot2,
    judul:
      'Mengangkat Tema Urban Pollution, Kelompok KKN-BBM 64 UNAIR Kel.241 Mengubah Sampah Botol Plastik Bekas Menjadi Pot Bunga Yang Estetik',
    pathName:
      'mengangkat-tema-urban-pollution-kelompok-kkn-bbm-64-unair-kel.241-mengubah-sampah-botol-plastik-bekas-menjadi-pot-bunga-yang-estetik',
    tanggal: 'Kamis, 25 Juli 2021',
    deskripsi:
      'Mengangkat Tema Urban Pollution, Kelompok KKN-BBM 64 UNAIR Kel.241 Mengubah Sampah Botol Plastik Bekas Menjadi Pot Bunga Yang Estetik'
  },
  {
    gambar: PemberdayaanUMKM,
    judul: 'Bantu Berdayakan UMKM, Kelompok 241 KKN-BBM 64 UNAIR Buatkan Banner Untuk Mi Ayam Lariso',
    pathName: 'bantu-berdayakan-umkm-kelompok-241-kkn-bbm-64-unair-buatkan-banner-untuk-mi-ayam-lariso',
    tanggal: 'Kamis, 25 Juli 2021',
    deskripsi: 'Bantu Berdayakan UMKM, Kelompok 241 KKN-BBM 64 UNAIR Buatkan Banner Untuk Mi Ayam Lariso'
  },
  {
    gambar: PenyuluhanBeasiswa,
    judul:
      'Kerjasama Dengan SMAN 22 SBY Dan AUBMO, Kelompok 241 KKN-BBM 64 UNAIR Adakan Acara Webinar Beasiswa Dengan Tema Kuliah Gratis Dengan KIP-K',
    pathName:
      'kerjasama-dengan-sman-22-sby-dan-aubmo-kelompok-241-kkn-bbm-64-unair-adakan-acara-webinar-beasiswa-dengan-tema-kuliah-gratis-dengan-kip-k',
    tanggal: 'Kamis, 25 Juli 2021',
    deskripsi:
      'Kerjasama Dengan SMAN 22 SBY Dan AUBMO, Kelompok 241 KKN-BBM 64 UNAIR Adakan Acara Webinar Beasiswa Dengan Tema Kuliah Gratis Dengan KIP-K'
  }
]

const KumpulanBerita = () => {
  return (
    <>
      <div className='lg:container mx-auto'>
        <h1 className='text-center font-bold text-3xl md:text-4xl'>
          BERITA <span className='text-red-600'> KAMI</span>
        </h1>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 p-5 md:px-16 md:pt-10'>
          {berita.map((berita) => (
            <CardBerita key={berita.judul} {...berita} />
          ))}
        </div>
      </div>
    </>
  )
}

export default KumpulanBerita
