export default function review({params}:{
    params:{
        productId:string,
        reviewId:string
    }
}){
  return <h1>The review has objectId as {params.productId} and reviewId as {params.reviewId}</h1>
}