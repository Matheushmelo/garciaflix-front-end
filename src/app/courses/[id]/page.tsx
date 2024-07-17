'use client'

import { useState, useEffect } from 'react'
import CourseClient from './CourseClient'

interface Props {
  params: {id: string}
}

export default function CoursePage({ params }: Props) {
  const [dynamicTitle, setDynamicTitle] = useState('Garciaflix')

  useEffect(() => {
    document.title = dynamicTitle
  }, [dynamicTitle])

  return <CourseClient params={params} setDynamicTitle={setDynamicTitle}/>
}