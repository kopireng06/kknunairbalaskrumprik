import Image from 'next/image'
import Iseng from "../public/IMG_20210530_070910.jpg";

const Balaskrumprik = () => {
    return (  
        <div className="lg:container mx-auto mt-10 md:mt-0 p-5 md:p-16">
                        <h1 className="text-center font-bold mb-10 text-3xl md:text-4xl">TENTANG <span className="text-red-600"> BALAS KRUMPRIK</span></h1>
            <article className="w-full flex items-center flex-col md:flex-row">
                <figure className="w-full md:w-5/12 h-80 rounded-xl relative shadow-custom transition-all">
                    <Image src={Iseng} alt="h" layout="fill" objectFit="cover" className="rounded-xl"/>
                </figure>                
                <div  className="flex-1 px-2 mt-5 lg:px-10 text-sm">
                    <p className="my-2">
                    Kelurahan Balas Klumprik merupakan salah satu Kelurahan yang ada di Kecamatan Wiyung Kota Surabaya. 
                    Kelurahan ini memiliki 8 RW, yang terdiri dari RW 01, 02, 03 dan 04 yang merupakan daerah 
                    perkampungan dan RW 05, 06, 07 dan 08 yang merupakan daerah perumahan. Berdasarkan data dari BPS, 
                    pada tahun 2019 Kelurahan ini memiliki jumlah penduduk dengan kisaran 13,379 jiwa dengan jumlah 
                    penduduk pria sebesar 7,038 jiwa dan jumlah penduduk wanita sebesar 6,935 jiwa dan memiliki luas wilayah seluas 2.01 Km2.
                    </p>
                    <p className="my-2">
                    Di Kelurahan ini terdapat fasilitas kesehatan berupa Puskesmas, fasilitas pendidikan pada 
                    tingkat PAUD, SD, SMP dan SMA. Selain itu, juga terdapat fasilitas bagi umkm yang bergerak di 
                    sektor makanan dan minuman berupa sentra wisata kuliner, fasilitas pelayanan publik berupa kantor 
                    kelurahan, dan tempat wisata di wisata batas kampung yang terletak di RW 04 dan Taman Kelurahan yang 
                    terletak di RW 01. Kelurahan ini juga memiliki LPMK yang merupakan Lembaga Pemberdayaan Masyarakat 
                    Kelurahan, Karang Taruna dan PKK yang merupakan sebuah organisasi bagi ibu-ibu Kelurahan Balas Klumprik.
                    </p>
                </div>
            </article>
        </div>
    );
}
 
export default Balaskrumprik;