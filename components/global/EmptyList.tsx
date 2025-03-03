import { cn } from '@/lib/utils'
import React from 'react'

function EmptyList({heading = ' No item found.',className}: {heading?: string , className?:string}) {
  return (
    <h2 className={cn('text-xl', className)}>EmptyList</h2>
  )
}

export default EmptyList