import React, { useMemo } from 'react';

interface AvatarProps {
   name: string
   size?: number
}

const COLORS = [
   '#8b5cf6', '#7c3aed', '#6d28d9', '#06b6d4', 
   '#0891b2', '#ec4899', '#d946ef', '#f59e0b', 
   '#10b981', '#3b82f6'
];

export const Avatar = React.memo<AvatarProps>(({ name, size = 128 }) => {
   const { initial, bgColor } = useMemo(() => {
      const initial = name?.charAt(0).toUpperCase() || '?';
      const colorIndex = (name?.length ?? 0) % COLORS.length;
      const bgColor = COLORS[colorIndex];
    
      return { initial, bgColor };
   }, [name]);
  
   const style: React.CSSProperties = useMemo(() => ({
      backgroundColor: bgColor,
      width: size,
      height: size,
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: Math.round(size / 2.5),
      fontWeight: 700,
      boxShadow: '0 10px 15px rgba(2,6,23,0.6)'
   }), [bgColor, size]);
  
   return <div style={style}>{initial}</div>;
});