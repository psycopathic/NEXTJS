export default function Product({ params }: { params: { productId: string } }) {
    return <h1>The product has objectId as {params.productId}</h1>;
  }
  