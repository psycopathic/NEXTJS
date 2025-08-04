import found from "@/app/not-found";

export default function review({params}:{
    params:{
        productId:string,
        review:string
    }
}){
    if(parseInt(params.productId) > 1000)
        return found();
    return <h1>Review of product {params.productId} is {params.review}</h1>;
}