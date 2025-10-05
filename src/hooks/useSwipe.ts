import { useState, useEffect } from 'react'

export const useSwipe = (revealed: boolean, setRevealed: (v: boolean) => void) => {
  const [swipeStart, setSwipeStart] = useState(0)
  const [swipeOffset, setSwipeOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const handleTouchStart = (e: React.TouchEvent) => {
    if (revealed) return
    setSwipeStart(e.touches[0].clientY)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (revealed || !isDragging) return
    const offset = swipeStart - e.touches[0].clientY
    if (offset > 0) {
      setSwipeOffset(Math.min(offset, 400))
    }
  }

  const handleTouchEnd = () => {
    if (revealed || !isDragging) return
    setIsDragging(false)
    if (swipeOffset > 100) {
      setRevealed(true)
    }
    setSwipeOffset(0)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (revealed) return
    setSwipeStart(e.clientY)
    setIsDragging(true)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (revealed || !isDragging) return
    const offset = swipeStart - e.clientY
    if (offset > 0) {
      setSwipeOffset(Math.min(offset, 400))
    }
  }

  const handleMouseUp = () => {
    if (revealed || !isDragging) return
    setIsDragging(false)
    if (swipeOffset > 100) {
      setRevealed(true)
    }
    setSwipeOffset(0)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, swipeStart, revealed, swipeOffset])

  return {
    swipeOffset,
    isDragging,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown
  }
}
