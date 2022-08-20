import { useRouter } from 'next/router' 

function Doc() {
  const router = useRouter()
  const { params = [] } = router.query
  if (params.length === 3)
  {
    return <h1>doc page {params[0]} 's {params[1]} 's  {params[2]} </h1>
  }
  else if (params.length === 2)
  {
    return <h1>doc page {params[0]} 's {params[1]}</h1>
  }
  else
  {
    return <h1>doc page {params[0]}</h1>
  }
}

export default Doc