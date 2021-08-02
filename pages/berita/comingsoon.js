import { useRouter } from 'next/router'
import Image from 'next/image'
import Jumbotron from "../../components/Jumbotron";
import Iseng from "../../public/IMG_20210530_070910.jpg";

const ComingSoon = () => {
    const {pathname} = useRouter()

    return (  
        <>
            <Jumbotron pathName={pathname}/>
            <div className="w-11/12 md:9/12 lg:w-8/12 mx-auto py-5">
                <p className="text-sm my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam neque nisl, consequat accumsan tortor at, hendrerit luctus lorem. Cras sed tortor 
                    risus. Suspendisse laoreet nulla in mi porta egestas. Morbi ut varius ex. Fusce massa 
                    risus, interdum non sapien eu, vehicula pharetra lacus. Proin eget velit sit amet nibh
                    laoreet placerat a ut velit. Sed volutpat diam metus, ut imperdiet dolor placerat nec.
                    In placerat sed turpis a fermentum. In in augue cursus, suscipit arcu et, consectetur
                    metus. Proin fringilla dolor non neque pulvinar tincidunt in id nisl. Etiam at justo 
                    urna.
                </p>
                <p className="text-sm my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam neque nisl, consequat accumsan tortor at, hendrerit luctus lorem. Cras sed tortor 
                    risus. Suspendisse laoreet nulla in mi porta egestas. Morbi ut varius ex. Fusce massa 
                    risus, interdum non sapien eu, vehicula pharetra lacus. Proin eget velit sit amet nibh
                    laoreet placerat a ut velit. Sed volutpat diam metus, ut imperdiet dolor placerat nec.
                    In placerat sed turpis a fermentum. In in augue cursus, suscipit arcu et, consectetur
                    metus. Proin fringilla dolor non neque pulvinar tincidunt in id nisl. Etiam at justo 
                    urna.
                </p>
                <section className="w-full">
                    <h2 className="font-bold text-lg lg:text-2xl my-3">1. WIPOL</h2>
                    <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                        <Image src={Iseng} alt="h" layout="fill" objectFit="cover"/>
                    </div>
                    <p className="text-sm my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam neque nisl, consequat accumsan tortor at, hendrerit luctus lorem. Cras sed tortor 
                        risus. Suspendisse laoreet nulla in mi porta egestas. Morbi ut varius ex. Fusce massa 
                        risus, interdum non sapien eu, vehicula pharetra lacus. Proin eget velit sit amet nibh
                        laoreet placerat a ut velit. Sed volutpat diam metus, ut imperdiet dolor placerat nec.
                        In placerat sed turpis a fermentum. In in augue cursus, suscipit arcu et, consectetur
                        metus. Proin fringilla dolor non neque pulvinar tincidunt in id nisl. Etiam at justo 
                        urna.
                    </p>
                    <p className="text-sm my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam neque nisl, consequat accumsan tortor at, hendrerit luctus lorem. Cras sed tortor 
                        risus. Suspendisse laoreet nulla in mi porta egestas. Morbi ut varius ex. Fusce massa 
                        risus, interdum non sapien eu, vehicula pharetra lacus. Proin eget velit sit amet nibh
                        laoreet placerat a ut velit. Sed volutpat diam metus, ut imperdiet dolor placerat nec.
                        In placerat sed turpis a fermentum. In in augue cursus, suscipit arcu et, consectetur
                        metus. Proin fringilla dolor non neque pulvinar tincidunt in id nisl. Etiam at justo 
                        urna.
                    </p>
                    <p className="text-sm my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam neque nisl, consequat accumsan tortor at, hendrerit luctus lorem. Cras sed tortor 
                        risus. Suspendisse laoreet nulla in mi porta egestas. Morbi ut varius ex. Fusce massa 
                        risus, interdum non sapien eu, vehicula pharetra lacus. Proin eget velit sit amet nibh
                        laoreet placerat a ut velit. Sed volutpat diam metus, ut imperdiet dolor placerat nec.
                        In placerat sed turpis a fermentum. In in augue cursus, suscipit arcu et, consectetur
                        metus. Proin fringilla dolor non neque pulvinar tincidunt in id nisl. Etiam at justo 
                        urna.
                    </p>
                </section>
                <section className="w-full">
                    <h2 className="font-bold text-2xl my-3">2. DETTOL</h2>
                    <div className="w-full rounded shadow-custom overflow-hidden p-60p bg-red-100 relative">
                        <Image src={Iseng} alt="h" layout="fill" objectFit="cover"/>
                    </div>
                    <p className="text-sm my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam neque nisl, consequat accumsan tortor at, hendrerit luctus lorem. Cras sed tortor 
                        risus. Suspendisse laoreet nulla in mi porta egestas. Morbi ut varius ex. Fusce massa 
                        risus, interdum non sapien eu, vehicula pharetra lacus. Proin eget velit sit amet nibh
                        laoreet placerat a ut velit. Sed volutpat diam metus, ut imperdiet dolor placerat nec.
                        In placerat sed turpis a fermentum. In in augue cursus, suscipit arcu et, consectetur
                        metus. Proin fringilla dolor non neque pulvinar tincidunt in id nisl. Etiam at justo 
                        urna.
                    </p>
                    <p className="text-sm my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam neque nisl, consequat accumsan tortor at, hendrerit luctus lorem. Cras sed tortor 
                        risus. Suspendisse laoreet nulla in mi porta egestas. Morbi ut varius ex. Fusce massa 
                        risus, interdum non sapien eu, vehicula pharetra lacus. Proin eget velit sit amet nibh
                        laoreet placerat a ut velit. Sed volutpat diam metus, ut imperdiet dolor placerat nec.
                        In placerat sed turpis a fermentum. In in augue cursus, suscipit arcu et, consectetur
                        metus. Proin fringilla dolor non neque pulvinar tincidunt in id nisl. Etiam at justo 
                        urna.
                    </p>
                    <p className="text-sm my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam neque nisl, consequat accumsan tortor at, hendrerit luctus lorem. Cras sed tortor 
                        risus. Suspendisse laoreet nulla in mi porta egestas. Morbi ut varius ex. Fusce massa 
                        risus, interdum non sapien eu, vehicula pharetra lacus. Proin eget velit sit amet nibh
                        laoreet placerat a ut velit. Sed volutpat diam metus, ut imperdiet dolor placerat nec.
                        In placerat sed turpis a fermentum. In in augue cursus, suscipit arcu et, consectetur
                        metus. Proin fringilla dolor non neque pulvinar tincidunt in id nisl. Etiam at justo 
                        urna.
                    </p>
                </section>
            </div>
        </>
    );
}
 
export default ComingSoon;