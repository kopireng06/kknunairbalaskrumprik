import CardArtikel from "./CardArtikel"

const KumpulanArtikel = () => {
    return (
    <>
        <div className="lg:container mx-auto">
            <h1 className="text-center font-bold text-3xl md:text-4xl">ARTIKEL <span className="text-red-600"> KAMI</span></h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 p-5 md:px-16 md:pt-10">
                <CardArtikel/>
                <CardArtikel/>
                <CardArtikel/>
                <CardArtikel/>
                <CardArtikel/>
                <CardArtikel/>
            </div>
        </div>    
    </>
    );
}
 
export default KumpulanArtikel;