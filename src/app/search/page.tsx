'use client'

import { useState, useEffect } from 'react';
import SearchClient from "./SearchClient"

export default function SearchPage() {
  const [dynamicTitle, setDynamicTitle] = useState('Garciaflix');

  useEffect(() => {
    document.title = dynamicTitle;
  }, [dynamicTitle]);

  return <SearchClient setDynamicTitle={setDynamicTitle} />
}