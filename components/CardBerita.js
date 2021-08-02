import Iseng from "../public/IMG_20210530_070910.jpg";
import Image from 'next/image'
import Link from 'next/link'

const CardBerita = () => {
    return (  
        <Link href="/berita/comingsoon">
            <a className="h-96 rounded-xl shadow-custom overflow-hidden relative">
                <Image src={Iseng} alt="h" layout="fill" objectFit="cover"/>
                <div className="h-full w-full absolute" style={{backgroundImage: "linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.9))"}}></div>
                <div className="h-28 p-5 absolute bottom-0 w-full">
                    <h2 className="text-white font-bold">COMING SOON</h2>
                </div>
            </a>
        </Link>
    );
}
 
export default CardBerita;