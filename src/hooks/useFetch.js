import { useState, useEffect } from 'react'

const useFetch = (url, defaultData) => {
  const [data, updateData] = useState(defaultData)

  useEffect(async () => {
    const resp = await fetch(url)
    const json = await resp.json()
    updateData(json)
  }, [url])

  return data
}

export default useFetch
