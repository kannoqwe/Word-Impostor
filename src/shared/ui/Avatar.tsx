import React, { useMemo } from 'react';
import { Bot, Bug, Cat, Ghost, Rocket, type LucideIcon } from 'lucide-react';

interface AvatarProps {
   name: string
   size?: number
   src?: string
   avatarId?: string
}

const COLORS = [
   '#ff201a', '#00ccf9', '#e9c400', '#ffb59e',
   '#4cd6ff', '#ffe170', '#ff6f61', '#8edcf0',
   '#ffe170', '#ffdbd0'
];

const FALLBACK_ICONS: LucideIcon[] = [Bot, Cat, Ghost, Rocket, Bug];

function hashAvatarSeed(seed: string): number {
   let hash = 0;
   for (let index = 0; index < seed.length; index += 1) {
      hash = (hash * 31 + seed.charCodeAt(index)) >>> 0;
   }
   return hash;
}

export const Avatar = React.memo<AvatarProps>(({ name, size = 128, src, avatarId }) => {
   const { bgColor, FallbackIcon } = useMemo(() => {
      const hash = hashAvatarSeed(avatarId ?? name);
      return {
         bgColor: COLORS[hash % COLORS.length],
         FallbackIcon: FALLBACK_ICONS[hash % FALLBACK_ICONS.length]
      };
   }, [avatarId, name]);
  
   const style: React.CSSProperties = useMemo(() => ({
      backgroundColor: bgColor,
      width: size,
      height: size,
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      color: '#1b1b1c',
      border: '4px solid #1b1b1c',
      boxShadow: '0 5px 0 #00ccf9, 0 8px 0 #1b1b1c'
   }), [bgColor, size]);
  
   return (
      <div
         style={style}
         role="img"
         aria-label={`${name} avatar`}
         data-avatar-id={avatarId}
      >
         {src ? (
            <img
               src={src}
               alt=""
               className="h-full w-full object-cover"
            />
         ) : (
            <FallbackIcon
               aria-hidden="true"
               style={{ width: Math.round(size * 0.52), height: Math.round(size * 0.52) }}
               strokeWidth={2.8}
            />
         )}
      </div>
   );
});
