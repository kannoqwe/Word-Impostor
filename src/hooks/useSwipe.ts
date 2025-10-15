import { useState, useRef, useCallback } from 'react';

const MAX_SWIPE = 300;

export function useSwipe() {
   const [swipeOffset, setSwipeOffset] = useState(0);
   const startY = useRef(0);
   const isDragging = useRef(false);

   const handleTouchStart = useCallback((e: React.TouchEvent) => {
      startY.current = e.touches[0].clientY;
      isDragging.current = true;
   }, []);

   const handleTouchMove = useCallback((e: React.TouchEvent) => {
      if (!isDragging.current) return;

      const diff = startY.current - e.touches[0].clientY;
      if (diff > 0) setSwipeOffset(Math.min(diff, MAX_SWIPE));
   }, []);

   const handleTouchEnd = useCallback(() => {
      isDragging.current = false;
      setSwipeOffset(0); 
   }, []);

   const handleMouseDown = useCallback((e: React.MouseEvent) => {
      startY.current = e.clientY;
      isDragging.current = true;

      const handleMouseMove = (moveEvent: MouseEvent) => {
         if (!isDragging.current) return;
         const diff = startY.current - moveEvent.clientY;
         if (diff > 0) setSwipeOffset(Math.min(diff, MAX_SWIPE));
      };

      const handleMouseUp = () => {
         isDragging.current = false;
         setSwipeOffset(0);
         document.removeEventListener('mousemove', handleMouseMove);
         document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
   }, []);

   return {
      swipeOffset,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      handleMouseDown
   };
}
