import { useState, useRef, useCallback } from 'react';

const MAX_SWIPE = 300;
const REVEAL_THRESHOLD = 120;

interface UseSwipeOptions {
   onReveal: () => void;
}

export function useSwipe({ onReveal }: UseSwipeOptions) {
   const [swipeOffset, setSwipeOffset] = useState(0);
   const startY = useRef(0);
   const currentOffset = useRef(0);
   const isDragging = useRef(false);

   const handleTouchStart = useCallback((e: React.TouchEvent) => {
      startY.current = e.touches[0].clientY;
      isDragging.current = true;
   }, []);

   const handleTouchMove = useCallback((e: React.TouchEvent) => {
      if (!isDragging.current) return;

      const diff = startY.current - e.touches[0].clientY;
      if (diff > 0) {
         const nextOffset = Math.min(diff, MAX_SWIPE);
         currentOffset.current = nextOffset;
         setSwipeOffset(nextOffset);
      }
   }, []);

   const handleTouchEnd = useCallback(() => {
      if (currentOffset.current >= REVEAL_THRESHOLD) {
         onReveal();
      }

      isDragging.current = false;
      currentOffset.current = 0;
      setSwipeOffset(0); 
   }, [onReveal]);

   const handleMouseDown = useCallback((e: React.MouseEvent) => {
      startY.current = e.clientY;
      isDragging.current = true;

      const handleMouseMove = (moveEvent: MouseEvent) => {
         if (!isDragging.current) return;
         const diff = startY.current - moveEvent.clientY;
         if (diff > 0) {
            const nextOffset = Math.min(diff, MAX_SWIPE);
            currentOffset.current = nextOffset;
            setSwipeOffset(nextOffset);
         }
      };

      const handleMouseUp = () => {
         if (currentOffset.current >= REVEAL_THRESHOLD) {
            onReveal();
         }

         isDragging.current = false;
         currentOffset.current = 0;
         setSwipeOffset(0);
         document.removeEventListener('mousemove', handleMouseMove);
         document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
   }, [onReveal]);

   return {
      swipeOffset,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      handleMouseDown
   };
}
