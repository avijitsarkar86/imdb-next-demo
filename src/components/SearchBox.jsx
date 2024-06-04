'use client';

import { useRouter } from "next/navigation";
import React, { useState } from 'react';

export default function SearchBox() {
  const [searchText, setSearchText] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${searchText}`)
  }

  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 max-w-6xl"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:text-gray-400" disabled={searchText === ''}
      >
        Search
      </button>
    </form>
  )
}
