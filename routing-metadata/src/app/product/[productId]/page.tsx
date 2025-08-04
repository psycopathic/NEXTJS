import { Metadata } from "next";

type Props = {
    params:{
        productId: string
    }
}

// export const generateMetadata = ({params}:Props):Metadata =>{
//     return{
//         title:` ${params.productId}`
//     }
// }

// it can also be written in async function
export const generateMetadata = async ({params}:Props):Promise<Metadata>=>{
    console.log(`params ${params}`)
    const title1 = await new Promise((resolve) =>{
        setTimeout(() => {
            resolve(`iphone ${params.productId}`)  
        },100);
    });
    return{
        title:`product ${title1}`
    };
};

export default function review({params}: Props) {
  return <h1>Product {params.productId}</h1>;
}