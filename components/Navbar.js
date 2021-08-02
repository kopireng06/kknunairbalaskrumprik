import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import LogoKKN from '../public/LOGO KKN.png'
import LogoHome from '../public/icon-home.png'

const Navbar = () => {
    
    const [isTransparent,setIsTransparent] = useState(true)

    useEffect(()=>{
        document.addEventListener('scroll', () => {
            if(window.scrollY > 10){
                if(isTransparent){
                    setIsTransparent(false);
                }
            }
            else{
                setIsTransparent(true)
            }
          });
    })

    return (  
        <header className={`${isTransparent ? '' : 'bg-white shadow-custom'} transition-all duration-700 w-full fixed z-10 left-0 top-0`}>
            <div className="w-full h-20 px-5 lg:px-10 flex justify-between items-center">
                <div className="px-2 flex items-center">
                    <Image src={LogoKKN} alt="Logo Laskar 2021" height={40} width={40} />
                    <h1 className={`text-xs lg:text-lg mx-2 lg:mx-5 font-bold ${isTransparent ? 'text-white' : 'text-red-600'} `}>KKN 241 BALASKRUMPRIK</h1>                
                </div>
                <div className="px-2 flex items-center">
                    <Link href="/anggota-kami">
                        <a className={`text-xs lg:text-lg mx-2 lg:mx-5 font-bold ${isTransparent ? 'text-white' : 'text-red-600'} `}>
                            ANGGOTA KAMI
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <Image src={LogoHome} alt="Logo Laskar 2021" className={`cursor-pointer ${isTransparent ? 'filter-white' : 'filter-red-600'}`} height={40} width={40} />
                        </a>
                    </Link>
                </div>
            </div>
                
        </header>
    );
}
 
export default Navbar;