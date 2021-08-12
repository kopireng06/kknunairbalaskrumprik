import { useRouter } from 'next/router'
import Image from 'next/image'
import Jumbotron from "../components/Jumbotron";
import Naufal from "../public/naufal.JPG";
import Imin from "../public/imin.JPG";
import Felix from "../public/felix.JPG";
import Liza from "../public/liza.JPG";
import Feni from "../public/feni.JPG";
import Zidan from "../public/zidan.JPG";
import Rejak from "../public/rejak.JPG";
import Dandy from "../public/dandy.JPG";
import Vidi from "../public/vidi.JPG";
import Roziq from "../public/roziq.JPG";

const AnggotaKami = () => {
    const {pathname} = useRouter()

    return ( 
        <>
            <Jumbotron pathName={pathname}/>
            <div className="w-11/12 md:9/12 lg:w-8/12 mx-auto py-5">
                <p className="text-sm my-3">Halo warga Balaskrumprik, sudah gak asing lagi kan sama pepatah
                &apos;&apos;Tak Kenal Maka Tak Sayang&apos;&apos;, nah biar makin sayang, hehe yuk kenalan sama kita mahasiswa KKN Universitas Airlangga
                periode 64 kelompok 241 yang pastinya kece kece nih
                </p>
                <section className="w-full">
                    <h2 className="font-bold text-lg lg:text-2xl my-3">1. Naufal Ghani Achmani</h2>
                    <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                        <Image src={Naufal} alt="h" layout="fill" objectFit="cover"/>
                        <h2 className="absolute left-4 text-xs lg:text-xl rounded text-white bg-red-600 bottom-4 p-2 text-white font-bold">FST | KETUA</h2>
                    </div>
                </section>
                <section className="w-full">
                    <h2 className="font-bold text-lg lg:text-2xl my-3">2. Alfia Imamah Muhaimin</h2>
                    <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                        <Image src={Imin} alt="h" layout="fill" objectFit="cover"/>
                        <h2 className="absolute left-4 text-xs lg:text-xl rounded text-white bg-red-600 bottom-4 p-2 text-white font-bold">FST | SEKRETARIS 1</h2>
                    </div>
                </section>
                <section className="w-full">
                    <h2 className="font-bold text-lg lg:text-2xl my-3">3. Felix Fisabilillah Bayu</h2>
                    <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                        <Image src={Felix} alt="h" layout="fill" objectFit="cover"/>
                        <h2 className="absolute left-4 text-xs lg:text-xl rounded text-white bg-red-600 bottom-4 p-2 text-white font-bold">FEB | SEKRETARIS 2</h2>
                    </div>
                </section>
                <section className="w-full">
                    <h2 className="font-bold text-lg lg:text-2xl my-3">4. Putri Nur Halizah</h2>
                    <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                        <Image src={Liza} alt="h" layout="fill" objectFit="cover"/>
                        <h2 className="absolute left-4 text-xs lg:text-xl rounded text-white bg-red-600 bottom-4 p-2 text-white font-bold">FEB | BENDAHARA 1</h2>
                    </div>
                </section>
                <section className="w-full">
                    <h2 className="font-bold text-lg lg:text-2xl my-3">5. Feni Kurniasari</h2>
                    <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                        <Image src={Feni} alt="h" layout="fill" objectFit="cover"/>
                        <h2 className="absolute left-4 text-xs lg:text-xl rounded text-white bg-red-600 bottom-4 p-2 text-white font-bold">FST | BENDAHARA 2</h2>
                    </div>
                </section>
                <section className="w-full">
                    <h2 className="font-bold text-lg lg:text-2xl my-3">6. Zidan Nur Karim</h2>
                    <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                        <Image src={Zidan} alt="h" layout="fill" objectFit="cover"/>
                        <h2 className="absolute left-4 text-xs lg:text-xl rounded text-white bg-red-600 bottom-4 p-2 text-white font-bold">FST | SIE ACARA</h2>
                    </div>
                </section>
                <section className="w-full">
                    <h2 className="font-bold text-lg lg:text-2xl my-3">7. Muhammad Reza Zulfikarsyah</h2>
                    <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                        <Image src={Rejak} alt="h" layout="fill" objectFit="cover"/>
                        <h2 className="absolute left-4 text-xs lg:text-xl rounded text-white bg-red-600 bottom-4 p-2 text-white font-bold">FST | SIE ACARA</h2>
                    </div>
                </section>
                <section className="w-full">
                    <h2 className="font-bold text-lg lg:text-2xl my-3">8. Dandy Dwiki Pramudya</h2>
                    <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                        <Image src={Dandy} alt="h" layout="fill" objectFit="cover"/>
                        <h2 className="absolute left-4 text-xs lg:text-xl rounded text-white bg-red-600 bottom-4 p-2 text-white font-bold">FEB | SIE PERLENGKAPAN</h2>
                    </div>
                </section>
                <section className="w-full">
                    <h2 className="font-bold text-lg lg:text-2xl my-3">9. Vidi Auria Susanti</h2>
                    <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                        <Image src={Vidi} alt="h" layout="fill" objectFit="cover"/>
                        <h2 className="absolute left-4 text-xs lg:text-xl rounded text-white bg-red-600 bottom-4 p-2 text-white font-bold">FISIP | SIE PUBLIKASI, DOKUMENTASI, DEKORASI</h2>
                    </div>
                </section>
                <section className="w-full">
                    <h2 className="font-bold text-lg lg:text-2xl my-3">10. Muhammad Roziq Syarwan Evendi</h2>
                    <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                        <Image src={Roziq} alt="h" layout="fill" objectFit="cover"/>
                        <h2 className="absolute left-4 text-xs lg:text-xl rounded text-white bg-red-600 bottom-4 p-2 text-white font-bold">FST | SIE HUMAS</h2>
                    </div>
                </section>
            </div>
        </>
     );
}
 
export default AnggotaKami;