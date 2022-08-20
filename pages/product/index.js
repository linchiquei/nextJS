import Link from "next/link"
import Router, { useRouter } from 'next/router'

function Product( { productId = 100 } ) {
  const router = useRouter()
  const handleClick = ()=>{
    console.log('A')
    router.push('/blog')
  }
  return (
    <>
      <Link href="/">
        <a>
          Home
        </a>
      </Link>
      <Link href={`/product/1`}>
        <a>
          Product 1
        </a>
      </Link>
      <Link href={`/product/${productId}`}>
        <a>
          Product {productId}
        </a>
      </Link>
      <button onClick={handleClick}>Go Blog</button>
    </>
  )
}

export default Product