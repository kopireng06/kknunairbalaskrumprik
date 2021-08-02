import Image from 'next/image'
import Iseng from "../public/IMG_20210530_070910.jpg";

const Balaskrumprik = () => {
    return (  
        <div className="lg:container mx-auto mt-10 md:mt-0 p-5 md:p-16" id="our-history">
            <article className="w-full flex items-center flex-col md:flex-row">
                <figure className="w-9/12 md:w-5/12 h-80 rounded-xl relative shadow-custom transition-all">
                    <Image src={Iseng} alt="h" layout="fill" objectFit="cover" className="rounded-xl"/>
                    <h1 className="text-xl md:text-3xl font-bold absolute -top-3 -left-10 md:left-0  p-2 bg-white rounded shadow-custom">TENTANG<span className="text-red-600"> BALASKRUMPRIK</span></h1>
                </figure>                
                <div  className="flex-1 px-2 mt-5 lg:px-10 text-sm">
                    <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim consequuntur 
                        ratione inventore libero sint voluptatem accusamus 
                        voluptatum eligendi facilis quidem aut, ut repellat? Commodi, nulla ab! 
                        Labore facere culpa nam.
                    </p>
                    <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim consequuntur 
                        ratione inventore libero sint voluptatem accusamus 
                        voluptatum eligendi facilis quidem aut, ut repellat? Commodi, nulla ab! 
                        Labore facere culpa nam.
                    </p>
                    {/* <img className="h-8 mt-4" src="gambar/signature-2.png" alt=""/> */}
                </div>
            </article>
        </div>
    );
}
 
export default Balaskrumprik;