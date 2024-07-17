'use client'

import { useState, useEffect } from 'react'
import EpisodeClient from './EpisodeClient'

interface Props {
  params: {id: string}
}

export default function CoursePage({ params }: Props) {
  const [dynamicTitle, setDynamicTitle] = useState('Garciaflix')

  useEffect(() => {
    document.title = dynamicTitle
  }, [dynamicTitle])

  return <EpisodeClient params={params} setDynamicTitle={setDynamicTitle}/>
}