const Footer = () => {
    return ( 
        <div className="w-full bg-footer mt-10">
            <div className="lg:container p-5 md:p-16 flex items-center flex-col md:flex-row mx-auto">
                <article className="text-white flex-1 py-5">
                    <h1 className="text-xl inline-block md:text-4xl font-bold p-2 mb-5 bg-white text-black rounded shadow-navbar">YOUTUBE <span className="text-red-600">KAMI</span></h1>
                    <p className="my-2 text-sm">
                        Halo warga Balaskrumprik, selain punya web dan instagram kita juga punya youtube loh.
                        Pasti kepo kan yaaa, langsung aja klik link youtube disebelah kanan yaa
                    </p>
                </article>
                <aside className="w-10/12 md:w-6/12 rounded-xl relative">
                    <div className="container-yt">
                        <iframe src="https://www.youtube.com/embed/66ZLi7OvdU8" frameBorder="0" allowFullScreen className="video"></iframe>
                    </div>
                </aside>
            </div>
            <p className="text-white text-xs p-2 w-full text-center">
                Copyright &copy; 2021 by KKN 241 UNIVERSITAS AIRLANGGA. All Rights Reserved
            </p>
        </div>
     );
}
 
export default Footer;