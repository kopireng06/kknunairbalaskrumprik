import { useRouter } from 'next/router'
import Image from 'next/image'
import Jumbotron from "../../components/Jumbotron";
import Hashtags from "../../components/Hashtags";
import Edukasi5M from "../../public/edukasi-5m.jpg";
import MencuciTangan from "../../public/mencuci-tangan.jpg";
import MemakaiMasker from "../../public/memakai-masker.jpg";
import MenjagaJarak from "../../public/menjaga-jarak.jpg";
import MenjauhiKerumuman from "../../public/menjauhi-kerumunan.jpg";
import MengurangiMobilitas from "../../public/mengurangi-mobilitas.jpg";

const Artikel = () => {
    const pathname = useRouter().pathname.match("\/([A-Za-z0-9]*)\/")[0];
    console.log(pathname);
    return (  
        <>
            <Jumbotron pathName={pathname} gambar={Edukasi5M} 
            judul="Mengenal Protokol Kesehatan 5M Untuk Cegah COVID-19" 
            tanggal="Kamis, 29 Juli 2021"/>
            <div className="w-11/12 md:9/12 lg:w-8/12 mx-auto py-5">
                <p className="text-sm my-3">
                    Meski sudah lebih dari satu tahun, pandemi virus corona masih terus menyerang penduduk dunia 
                    tanpa henti. Di Indonesia, angka kasus positif virus corona sudah di atas 1,5 juta jiwa (02/07/2021). 
                    Kabar baiknya sekitar lebih dari 1,3 juta orang berhasil pulih dari serangan virus SARS-CoV-2 
                    penyebab COVID-19. Mengalahkan penyebaran dan penularan virus corona di dunia tidak mudah. Namun, 
                    beragam upaya terus dilakukan para ahli dan penduduk global demi mengakhiri ancaman virus yang 
                    terus menyerang bertubi-tubi. Di beberapa negara, termasuk Indonesia, pemerintah membuat 
                    pendoman dan protokol kesehatan untuk menghadapi virus corona. Di negara kita, protokol 
                    kesehatan ini dikenal dengan sebutan 5M. Sudah tahu apa saja protokol kesehatan 5M untuk 
                    membantu pencegahan penularan virus corona? Berikut ini protokol kesehatan 5M tersebut:
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">1. Mencuci tangan</h2>
                <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                    <Image src={MencuciTangan} alt="h" layout="fill" objectFit="cover"/>
                </div>
                <p className="text-sm my-3">
                    Rutin mencuci tangan hingga bersih adalah salah satu protokol kesehatan yang cukup 
                    efektif untuk mencegah penularan virus corona. Untuk hasil yang maksimal, 
                    kita disarankan untuk mencuci tangan setidaknya selama 20 detik beberapa kali sehari, 
                    terutama saat: 
                    <li className="text-sm mt-2">Sebelum memasak atau makan</li>
                    <li className="text-sm my-1">Setelah menggunakan kamar mandi</li>
                    <li className="text-sm mb-2">Setelah menutup hidung saat batuk atau bersin</li>
                    Untuk membunuh virus dan kuman-kuman lainnya, gunakan sabun dan air atau pembersih 
                    tangan dengan alkohol setidaknya dengan kadar 60 persen. 
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">2. Memakai masker</h2>
                <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                    <Image src={MemakaiMasker} alt="h" layout="fill" objectFit="cover"/>
                </div>
                <p className="text-sm my-3">
                    Pada awal pandemi virus corona tahun lalu, Organisasi Kesehatan Dunia (WHO) mengatakan bahwa 
                    penggunaan masker hanya direkomendasikan untuk orang sakit, 
                    bukan orang sehat. Namun, virus corona jenis SARS-CoV-2 yang merajalela hingga saat ini membuat 
                    protokol kesehatan bisa berubah-ubah seiring bergulirnya waktu.
                    Beberapa waktu selang kebijakan WHO di atas, WHO akhirnya mengeluarkan himbauan agar semua 
                    orang (baik yang sehat atau sakit) agar selalu menggunakan masker saat beraktivitas di luar rumah. 
                    Kebijakan WHO ini juga sempat ditegaskan oleh Presiden Joko Widodo.
                    Protokol kesehatan virus corona terkait masker pun semakin digalakkan di beberapa negara. 
                    Di Amerika Serikat (AS), Centers for Disease Control and Prevention (CDC), memperbarui pedoman 
                    terkait penggunaan masker. CDC mengimbau masyarakat AS harus memakai masker meski berada di dalam 
                    rumah pada kondisi tertentu. Menurut CDC, penggunaan masker di dalam rumah perlu dilakukan ketika:
                    <li className="text-sm mt-2">Terdapat anggota keluarga yang terinfeksi COVID-19.</li>
                    <li className="text-sm my-1">Terdapat anggota keluarga yang berpotensi terkena COVID-19 karena aktivitas di luar rumah.</li>
                    <li className="text-sm my-1">Merasa terjangkit atau mengalami gejala COVID-19.</li>
                    <li className="text-sm my-1">Ruangan sempit.</li>
                    <li className="text-sm mb-2">Tidak bisa menjaga jarak minimal dua meter.</li>
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">3. Menjaga jarak</h2>
                <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                    <Image src={MenjagaJarak} alt="h" layout="fill" objectFit="cover"/>
                </div>
                <p className="text-sm my-3">
                    Protokol kesehatan lainnya yang perlu dipatuhi adalah menjaga jarak. Protokol kesehatan ini dimuat dalam 
                    Keputusan Menteri Kesehatan RI dalam “Protokol Kesehatan Bagi Masyarakat di Tempat dan 
                    Fasilitas Umum Dalam Rangka Pencegahan dan Pengendalian COVID-19.”
                    Di sana disebutkan, menjaga jarak minimal 1 meter dengan orang lain untuk menghindari terkena 
                    droplets dari orang yang bicara, 
                    batuk, atau bersin, serta menghindari kerumunan, keramaian, dan berdesakan. Bila 
                    tidak memungkinkan melakukan jaga jarak, maka dapat dilakukan berbagai rekayasa 
                    administrasi dan teknis lainnya. 
                    Rekayasa administrasi dapat berupa pembatasan jumlah orang, pengaturan jadwal, 
                    dan sebagainya. Sedangkan rekayasa teknis, antara lain dapat berupa pembuatan 
                    partisi, pengaturan jalur masuk dan keluar, dan sebagainya.
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">4. Menjauhi kerumunan</h2>
                <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                    <Image src={MenjauhiKerumuman} alt="h" layout="fill" objectFit="cover"/>
                </div>
                <p className="text-sm my-3">
                    Selain tiga hal di atas, menjauhi kerumunan merupakan protokol kesehatan yang juga harus dilakukan. Menurut 
                    Kementerian Kesehatan RI (Kemenkes), masyarakat diminta untuk menjauhi kerumunan saat berada di luar rumah. Ingat, semakin 
                    banyak dan sering kamu bertemu orang, maka kemungkinan terinfeksi virus corona pun semakin tinggi.
                    Oleh sebab itu, hindari tempat keramaian terutama bila sedang sakit atau berusia di atas 60 tahun (lansia). 
                    Menurut riset lansia dan pengidap penyakit kronis memiliki risiko yang lebih tinggi terserang virus corona. 
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">5. Mengurangi mobilitas</h2>
                <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                    <Image src={MengurangiMobilitas} alt="h" layout="fill" objectFit="cover"/>
                </div>
                <p className="text-sm my-3">
                    Virus penyebab corona bisa berada di mana saja. Jadi, semakin banyak dirimu menghabiskan waktu 
                    di luar rumah, maka semakin tinggi pula terpapar virus jahat ini. 
                    Oleh karena itu, bila tidak ada keperluan yang mendesak, tetaplah berada di rumah. Menurut Kemenkes, 
                    meski sehat dan tidak ada gejala penyakit, belum tentu dirimu pulang ke rumah dengan keadaan yang 
                    masih sama. Pasalnya, virus corona dapat menyebar dan menginfeksi seseorang dengan cepat.
                </p>
                <p className="text-sm my-3">
                    Yuk, terapkan protokol kesehatan 5M untuk mencegah penularan dan penyebaran virus corona di 
                    Indonesia. Selain itu, jangan pula 
                    lupa untuk selalu meningkatkan sistem kekebalan tubuh agar terhindar dari infeksi COVID-19. 
                </p>
                <p className="text-sm my-3 break-words">
                    Sumber : https://www.halodoc.com/artikel/mengenal-protokol-kesehatan-5m-untuk-cegah-covid-19
                </p>
                <Hashtags/>
            </div>
        </>
    );
}
 
export default Artikel;