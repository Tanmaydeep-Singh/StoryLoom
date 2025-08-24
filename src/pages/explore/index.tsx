import Explore from '@/components/Explore'
import { useRouter } from 'next/router'
import React from 'react'

const ExplorePage = () => {
  const router = useRouter()
  const { q } = router.query
  const query = Array.isArray(q) ? q[0] : q || ''

  return <Explore query={query} />
}

export default ExplorePage
