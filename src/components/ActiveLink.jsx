'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const ActiveLink = ({ text, path }) => {

  const style = {
    color: '#0070F3',
    textDecoration: 'underline',
  };

  const pathname = usePathname();

  return (
    <Link href={path} style={ pathname === path ? style : null }>{ text }</Link>
  )
}
