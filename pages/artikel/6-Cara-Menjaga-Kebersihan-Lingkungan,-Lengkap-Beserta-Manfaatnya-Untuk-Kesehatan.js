import { useRouter } from 'next/router'
import Image from 'next/image'
import Jumbotron from "../../components/Jumbotron";
import Hashtags from "../../components/Hashtags";
import KebersihanLingkungan from "../../public/kebersihan-lingkungan.jpeg";

const Artikel = () => {
    const pathname = useRouter().pathname.match("\/([A-Za-z0-9]*)\/")[0];
    console.log(pathname);
    return (  
        <>
            <Jumbotron pathName={pathname} gambar={KebersihanLingkungan} 
            judul="6 Cara Menjaga Kebersihan Lingkungan, Lengkap Beserta Manfaatnya Untuk Kesehatan" 
            tanggal="Kamis, 29 Juli 2021"/>
            <div className="w-11/12 md:9/12 lg:w-8/12 mx-auto py-5">
                <p className="text-sm my-3">
                Seperti yang sudah diketahui, lingkungan yang kotor dan terdapat genangan air dapat menjadi sarang 
                dari banyak bibit penyakit berbahaya. Sehingga upaya membersihkan pekarangan rumah perlu dilakukan agar terhindar dari berbagai penyakit dan 
                bencana alam. Salah satu cara paling sederhana yang bisa dilakukan untuk menjaga kebersihan 
                lingkungan adalah dengan menjaga kebersihan rumah dan halaman. Dengan membiasakan menjaga kebersihan 
                rumah dan halaman, membuat kita menjadi lebih terbiasa untuk membersihkan lingkungan lainnya.
                Banyak cara membersihkan lingkungan yang bisa dilakukan, seperti tidak membuang sampah sembarangan, membersihkan selokan, dan memisahkan jenis sampah. Dengan 
                upaya-upaya tersebut, lingkungan akan menjadi lebih bersih dan menurunkan risiko penyakit berbahaya. Berikut 6 cara untuk menjaga kebersihan desa kalian
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">1. Kegiatan gotong royong</h2>
                <p className="text-sm my-3">
                    Gotong royong menjadi salah satu cara menjaga kebersihan lingkungan sekitar yang efektif. 
                    Tidak hanya membantu membersihkan lingkungan, kebiasaan gotong royong juga dapat memperkuat 
                    jalinan kerja sama antar warga. Biasanya, kegiatan gotong royong membersihkan lingkungan sekitar 
                    ini dilakukan setidaknya sekali dalam seminggu. Dengan membiasakan kegiatan ini, 
                    lingkungan sekitar akan lebih bersih dan terhindar dari berbagai penyakit yang bisa mengancam.
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">2. Buang sampah pada tempatnya</h2>
                <p className="text-sm my-3">
                    Salah satu cara menjaga kebersihan lingkungan yang paling penting adalah membuang sampah pada 
                    tempatnya. Kebiasaan membuang sampah yang tidak pada tempatnya pasti akan memberi dampak buruk bagi lingkungan.
                    Tak hanya menyebabkan lingkungan menjadi kotor, membuang sampah sembarangan juga bisa menghambat 
                    aliran sungai, yang akhirnya memicu banjir bandang. Ketika sampah-sampah tersangkut, aliran sungai 
                    akan berhenti dan volumenya akan semakin membesar. Hal inilah yang berpotensi menimbulkan 
                    tekanan sangat besar. Dengan membuang sampah pada tempatnya, hal ini bisa mencegah risiko banjir.
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">3. Memisahkan jenis sampah</h2>
                <p className="text-sm my-3">
                    Seperti yang sudah diketahui, sampai saat ini penumpukan sampah di Indonesia masih menjadi masalah 
                    utama adanya pencemaran lingkungan. Bahkan, Indonesia dijuluki sebagai pembuang sampah plastik ke 
                    laut terbesar di dunia setelah China. Oleh karena itu, sudah seharusnya sebagai warga 
                    negara harus mengetahui jenis sampah dan cara pengelolaannya yang baik.Adapun jenis 
                    sampah berdasarkan sifatnya dibedakan menjadi dua, yaitu sampah sampah anorganik dan organik. Sampah 
                    anorganik merupakan sampah yang tidak mudah membusuk, seperti plastik wadah, botol, kertas, plastik 
                    mainan, dan gelas minuman. Jenis sampah ini juga bisa disebut sebagai limbah yang dihasilkan 
                    dari bahan-bahan yang bukan berasal dari alam (bahan hayati), melainkan barang yang buatan manusia.
                    Sedangkan, sampah organik merupakan salah satu jenis sampah yang biasa dijadikan pupuk kompos. 
                    Jenis sampah ini berlawanan dengan sampah anorganik karena sangat mudah membusuk. Beberapa contoh 
                    jenis sampah organik antara lain sisa makanan, sayuran, daun-daun, dan lain sebagainya.
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">4. Membersihkan selokan</h2>
                <p className="text-sm my-3">
                    Membersihkan selokan secara rutin juga menjadi salah satu cara menjaga kebersihan lingkungan yang 
                    sangat efektif. Rutin melakukan kegiatan gotong royong atau kerja bakti membersihkan selokan dengan 
                    lingkungan sekitar, mampu mencegah banjir dan nyamuk demam berdarah. Oleh karena itu, 
                    sebaiknya membuat program kerja bakti seminggu satu kali agar terhindar dari banjir.
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">5. Hindari menebang pohon secara liar</h2>
                <p className="text-sm my-3">
                    Sebagaimana kita tahu, pohon atau tumbuhan berperan penting untuk meresap air yang jatuh ke tanah. 
                    Jika terjadi penebangan pohon besar-besaran, dapat berpotensi memicu terjadinya banjir. Selain itu, 
                    penebangan hutan yang dilakukan secara liar juga bisa meningkatkan risiko tanah longsor.
                    Bencana longsor terjadi karena tidak mempunyai tanah untuk menahan beban dari air yang 
                    terus menerus menerpa. Kondisi ini akan semakin parah jika lokasinya berada di sekitar 
                    tebing yang curam.
                </p>
                <h2 className="font-bold text-lg lg:text-2xl my-3">6. Penghijauan</h2>
                <p className="text-sm my-3">
                    Cara menjaga kebersihan lingkungan selanjutnya, yaitu melakukan penghijauan atau menanam pohon. 
                    Tanaman hijau di sekitar rumah berperan penting untuk menjaga lingkungan tetap bersih dan terhindar dari banjir.
                    Tanaman akan menancapkan akarnya ke dalam tanah. Sehingga, lubang yang dihasilkan akar tersebut menjadi jalur air 
                    untuk masuk ke dalam tanah lebih jauh. Dengan adanya tanaman di sekitar rumah, dapat melancarkan 
                    penyerapan air hujan, yang akan menjauhkan lingkungan dari banjir. Sementara itu, jika 
                    terjadi penebangan pohon besar-besaran, dapat berpotensi memicu terjadinya banjir 
                    bandang. Selain itu, penebangan hutan yang dilakukan secara liar juga bisa meningkatkan 
                    risiko tanah longsor.
                </p>
                <p className="text-sm my-3 break-words">
                    Sumber : https://www.merdeka.com/jateng/6-cara-membersihkan-lingkungan-lengkap-beserta-manfaatnya-untuk-kesehatan-kln.html?page=4
                </p>
                <Hashtags/>
            </div>
        </>
    );
}
 
export default Artikel;