import Image from 'next/image'
import Link from 'next/link'

const CardArtikel = ({gambar,deskripsi,judul}) => {
    const linkJudul = judul.split(' ').join('-')
    return (  
        <Link href={`/artikel/${linkJudul}`} >
            <a className="rounded-xl lg:mx-0 my-3 lg:my-0 overflow-hidden shadow-custom transition-all bg-white">
                <figure className="h-60 w-full relative">
                    <Image src={gambar} alt="h" layout="fill" objectFit="cover" className="rounded-xl"/>
                </figure>
                <h4 className="font-bold text-center mt-3 px-3 uppercase">{judul}</h4>
                <p className="text-xs text-center pt-2 pb-4 px-3">
                    {deskripsi}
                </p>
            </a>
        </Link>
    );
}
 
export default CardArtikel;