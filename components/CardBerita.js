import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const CardBerita = ({gambar,judul}) => {
    const linkJudul = judul.split(' ').join('-')
    return (  
        <Link href={`/berita/${linkJudul}`}>
            <motion.a layoutId={judul} className="h-96 rounded-xl shadow-custom overflow-hidden relative">
                <Image src={gambar} alt="h" layout="fill" objectFit="cover"/>
                <div className="h-full w-full absolute" style={{backgroundImage: "linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.9))"}}></div>
                <div className="h-30 p-5 pt-0 absolute bottom-0 w-full">
                    <h2 className="text-white font-bold uppercase">{judul}</h2>
                </div>
            </motion.a>
        </Link>
    );
}
 
export default CardBerita;