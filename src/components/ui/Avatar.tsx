import React, { useMemo } from 'react';

interface AvatarProps {
   name: string
   size?: number
}

const COLORS = [
   '#f97316', '#84cc16', '#06b6d4', '#f43f5e',
   '#eab308', '#14b8a6', '#a855f7', '#38bdf8',
   '#fb7185', '#22c55e'
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
      boxShadow: '0 18px 40px rgba(0,0,0,0.35)'
   }), [bgColor, size]);
  
   return <div style={style}>{initial}</div>;
});
