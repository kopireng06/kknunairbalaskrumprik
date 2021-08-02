import { useEffect } from "react";
import { useRouter } from 'next/router'
import Jumbotron from "../../components/Jumbotron";

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
            </div>
        </>
    );
}
 
export default ComingSoon;