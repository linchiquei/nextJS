// If you want to access the `router` object inside any function component in your app, use the useRouter hook
import { useRouter } from 'next/router' 

function Detail() {
  const router = useRouter()
  // `query` The query string parsed to an object, including dynamic route parameters. It will be an empty object during prerendering if the page doesn't use Server-side Rendering. Defaults to `{}`
  const productID = router.query.productId
  return <h1>Product Detail {productID}</h1>
}

export default Detail