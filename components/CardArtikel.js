import Iseng from "../public/IMG_20210530_070910.jpg";
import Image from 'next/image'
import Link from 'next/link'

const CardArtikel = () => {
    return (  
        <Link href="/artikel/comingsoon" >
            <a className="rounded-xl lg:mx-0 my-3 lg:my-0 overflow-hidden shadow-custom transition-all bg-white">
                <figure className="h-60 w-full relative">
                    <Image src={Iseng} alt="h" layout="fill" objectFit="cover" className="rounded-xl"/>
                </figure>
                <h4 className="font-bold text-center mt-3 px-3">COMING SOON</h4>
                <p className="text-xs text-center pt-2 pb-4 px-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Fuga rerum debitis officia repellendus vero, nesciunt voluptates aspernatur eos! Cupiditate, 
                    animi molestias quae obcaecati dolor aut sequi non similique accusantium voluptates?</p>
            </a>
        </Link>
    );
}
 
export default CardArtikel;