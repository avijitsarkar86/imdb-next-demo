import Image from "next/image"
import React from 'react'

export default function loading() {
  return (
    <div className="flex justify-center mt-16">
      <img className="h-40" src="spinner.svg"  alt="loading..." />
    </div>
  )
}
