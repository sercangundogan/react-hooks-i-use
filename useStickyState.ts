import { useEffect, useState } from 'react'

export function useStickyState<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stickyValue = localStorage.getItem(key)
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}