import { useRouter } from 'next/router'

const Currency = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Currency: {id}</p>
}

export default Currency