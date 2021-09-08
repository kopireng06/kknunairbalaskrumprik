import Image from 'next/image'
import Booklet1 from "../public/booklet-1.PNG";
import Booklet2 from "../public/booklet-2.PNG";


const Booklet = ({image,link,judul}) => {
  return (
    <div className="flex-1 flex flex-col items-center p-4">
        <figure className="w-full relative" style={{height:"400px"}}>
            <Image src={image} alt="h" layout="fill" objectFit="contain" className="rounded-xl"/>
        </figure>
        <a href={link} className="w-60 text-center p-3 bg-white text-red-600 rounded mt-5 font-bold" target="_blank" rel="noreferrer">Download</a>
    </div>
  );
}

const KumpulanBooklet = () => {
    return (
        <div className="w-full bg-footer my-10 p-5 lg:p-10">
            <h1 className="text-center text-white font-bold text-3xl md:text-4xl">BOOKLET <span className="text-white"> KAMI</span></h1>
            <div className="lg-container mx-auto">
                <div className="w-full flex-col lg:flex-row flex justify-center p-5 md:px-16 md:pt-10">
                    <Booklet image={Booklet1} link="https://drive.google.com/file/d/1_RfocxllyhkmUMn5Q86MOxP3kGA8TrSy/view"/>
                    <Booklet image={Booklet2} link="https://drive.google.com/file/d/1PARd0Y_Hw6pIGY0jhMijhUrubPyhIGtK/view"/>
                </div>
            </div>
        </div>
    );
}
 
export default KumpulanBooklet;