import CardBerita from "./CardBerita";

const KumpulanBerita = () => {
    return (
        <>
        <div className="lg:container mx-auto">
            <h1 className="text-center font-bold text-3xl md:text-4xl">BERITA <span className="text-red-600"> KAMI</span></h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 p-5 md:px-16 md:pt-10">
                <CardBerita/>
                <CardBerita/>
                <CardBerita/>
                <CardBerita/>
                <CardBerita/>
                <CardBerita/>
            </div>
        </div>    
    </>
    );
}
 
export default KumpulanBerita;