import Image from "next/image";
import Iseng from "../public/bg-kkn-2.jpg";
import Iseng2 from "../public/bg-kkn-3.JPG";
import LogoIG from "../public/ig.png";
import LogoYT from "../public/yt.png";


const Jumbotron = ({pathName,gambar,judul,tanggal}) => {
    return ( 
        <>
            {
                (()=>{
                    if(pathName==='/artikel/'){
                        return(
                            <figure className="w-full h-screen relative">
                                <Image src={gambar} alt="h" layout="fill" objectFit="cover"/>
                                <div className="w-full h-full p-10 lg:p-20 flex flex-col justify-center items-center absolute top-0 uppercase" style={{background: "rgba(0,0,0,0.6)"}}>
                                    <h1 className="text-center font-bold text-white text-xl md:text-4xl">{judul}</h1>
                                    <p className="text-center font-bold text-sm mt-4 p-2 text-white">{`ARTIKEL KAMI | ${tanggal}`}</p>
                                </div>
                            </figure>
                        )
                    }
                    if(pathName==='/berita/'){
                        return(
                            <figure className="w-full h-screen relative">
                                <Image src={gambar} alt="h" layout="fill" objectFit="cover"/>
                                <div className="w-full h-full p-10 lg:p-20 flex flex-col justify-center items-center absolute top-0 uppercase" style={{background: "rgba(0,0,0,0.6)"}}>
                                    <h1 className="text-center font-bold text-white text-xl md:text-4xl">{judul}</h1>
                                    <p className="text-center font-bold text-sm mt-4 p-2 text-white">{`BERITA KAMI | ${tanggal}`}</p>
                                </div>
                            </figure>
                        )
                    }
                    if(pathName==='/anggota-kami'){
                        return(
                            <figure className="w-full h-screen relative">
                                <Image src={Iseng2} alt="h" layout="fill" objectFit="cover"/>
                                <div className="w-full h-full p-20 flex flex-col justify-center items-center absolute top-0" style={{background: "rgba(0,0,0,0.6)"}}>
                                    <h1 className="text-center font-bold text-white text-xl md:text-4xl">HAI WARGA BALAS KRUMPRIK, YUK KENALAN SAMA KITA</h1>
                                </div>
                            </figure>
                        )
                    }
                    else{
                        return(
                            <figure className="w-full h-screen relative">
                                <Image src={Iseng} alt="h" layout="fill" objectFit="cover"/>
                                <div className="w-full h-full p-20 flex flex-col justify-center items-center absolute top-0" style={{background: "rgba(0,0,0,0.3)"}}>
                                    <h1 className="text-center font-bold text-red-600 text-md md:text-4xl p-4 rounded bg-white">KKN UNAIR 64 Kel.241 BALAS KRUMPRIK</h1>
                                    <div className="w-full flex justify-center">
                                        <div className="flex-initial mx-2 mt-4 flex justify-center">
                                            <a  href="https://www.instagram.com/kkn64unair.balasklumprik/" target="_blank" rel="noreferrer"
                                            className="p-2 flex items-center text-xs lg:text-md bg-white rounded font-bold text-red-600">
                                                <Image alt="logo ig" src={LogoIG} height={15} width={15} />
                                                <span className="ml-2">Instagram</span>
                                            </a>
                                        </div>
                                        <div className="flex-initial mx-2 mt-4 flex justify-center">
                                            <a  href="https://www.youtube.com/channel/UC4O1zBzFa7xFmtapL3Q4bqg" target="_blank" rel="noreferrer"
                                            className="p-2 flex items-center text-xs lg:text-md bg-white rounded font-bold text-red-600">
                                                <Image alt="logo yt" src={LogoYT} height={15} width={25} />
                                                <span className="ml-2">Youtube</span>
                                            </a>
                                        </div>
                                    </div>
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