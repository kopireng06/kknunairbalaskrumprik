import Image from "next/image";
import Iseng from "../public/IMG_20210530_070910.jpg";

const Jumbotron = ({pathName}) => {
    return ( 
        <>
            {
                (()=>{
                    if(pathName==='/artikel/comingsoon'){
                        return(
                            <figure className="w-full h-screen relative">
                                <Image src={Iseng} alt="h" layout="fill" objectFit="cover"/>
                                <div className="w-full h-full p-20 flex flex-col justify-center items-center absolute top-0" style={{background: "rgba(0,0,0,0.6)"}}>
                                    <h1 className="text-center font-bold text-white text-xl md:text-4xl">HALO REK UDAH VAKSIN BELOM, BERIKUT 5 MANFAAT VAKSIN BUAT TUBUH KAMU</h1>
                                    <p className="font-bold text-xs mt-4 p-2 text-white">ARTIKEL KAMI | Senin, 12 Agustus 2021</p>
                                </div>
                            </figure>
                        )
                    }
                    if(pathName==='/berita/comingsoon'){
                        return(
                            <figure className="w-full h-screen relative">
                                <Image src={Iseng} alt="h" layout="fill" objectFit="cover"/>
                                <div className="w-full h-full p-20 flex flex-col justify-center items-center absolute top-0" style={{background: "rgba(0,0,0,0.6)"}}>
                                    <h1 className="text-center font-bold text-white text-xl md:text-4xl">USUNG TEMA URBAN POLLUTION KKN 241 UNAIR MENGHIAS KANTOR KELURAHAN DARI BARANG BEKAS</h1>
                                    <p className="font-bold text-xs mt-4 p-2 text-white">BERITA KAMI | Senin, 12 Agustus 2021</p>
                                </div>
                            </figure>
                        )
                    }
                    if(pathName==='/anggota-kami'){
                        return(
                            <figure className="w-full h-screen relative">
                                <Image src={Iseng} alt="h" layout="fill" objectFit="cover"/>
                                <div className="w-full h-full p-20 flex flex-col justify-center items-center absolute top-0" style={{background: "rgba(0,0,0,0.6)"}}>
                                    <h1 className="text-center font-bold text-white text-xl md:text-4xl">HAI WARGA BALASKRUMPRIK, YUK KENALAN SAMA KITA</h1>
                                </div>
                            </figure>
                        )
                    }
                    else{
                        return(
                            <figure className="w-full h-screen relative">
                                <Image src={Iseng} alt="h" layout="fill" objectFit="cover"/>
                                <div className="w-full h-full p-20 flex flex-col justify-center items-center absolute top-0" style={{background: "rgba(0,0,0,0.3)"}}>
                                    <h1 className="font-bold text-red-600 text-md md:text-4xl p-4 rounded bg-white">KKN 241 UNAIR BALASKRUMPRIK</h1>
                                    <p className="text-white italic text-sm md:text-lg mt-4">the second home for you</p>
                                </div>
                            </figure>
                        )
                    }
                })()
            }
        </>
     );
}
 
export default Jumbotron;