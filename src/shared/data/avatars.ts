import alienAvatar from '../../assets/avatars/01-alien.png';
import planetAvatar from '../../assets/avatars/02-planet.png';
import cometAvatar from '../../assets/avatars/03-comet.png';
import moonAvatar from '../../assets/avatars/04-moon.png';
import meteorAvatar from '../../assets/avatars/05-meteor.png';
import pizzaAvatar from '../../assets/avatars/06-pizza.png';
import burgerAvatar from '../../assets/avatars/07-burger.png';
import donutAvatar from '../../assets/avatars/08-donut.png';
import sodaAvatar from '../../assets/avatars/09-soda.png';
import fruitAvatar from '../../assets/avatars/10-fruit.png';
import type { PlayerAvatar } from '../types/game.types';

export const PLAYER_AVATARS = [
   { id: 'alien', src: alienAvatar },
   { id: 'planet', src: planetAvatar },
   { id: 'comet', src: cometAvatar },
   { id: 'moon', src: moonAvatar },
   { id: 'meteor', src: meteorAvatar },
   { id: 'pizza', src: pizzaAvatar },
   { id: 'burger', src: burgerAvatar },
   { id: 'donut', src: donutAvatar },
   { id: 'soda', src: sodaAvatar },
   { id: 'fruit', src: fruitAvatar },
] satisfies readonly PlayerAvatar[];
