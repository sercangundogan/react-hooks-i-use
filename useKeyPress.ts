import { useEffect } from 'react'

export function useKeyPress(targetKey: string, callback: () => void) {
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === targetKey) callback()
    }

    window.addEventListener('keydown', keyHandler)
    return () => window.removeEventListener('keydown', keyHandler)
  }, [targetKey, callback])
}