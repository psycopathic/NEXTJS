export default function product({params}:{
    params:{
        productId:string
    }
}){
   return <h1>Product {params.productId}</h1>
}