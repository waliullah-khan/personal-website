"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

interface ImageWithFallbackProps {
  src: string
  fallbackSrc: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
}

export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  fill = false,
  className,
  ...rest
}: ImageWithFallbackProps &
  Omit<React.ComponentProps<typeof Image>, "src" | "alt" | "width" | "height" | "fill" | "className">) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  return (
    <Image
      {...rest}
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={className}
      onError={() => {
        if (!hasError) {
          setImgSrc(fallbackSrc)
          setHasError(true)
        }
      }}
    />
  )
}
