import { ru } from './ru'
import { en } from './en'
import type { Language } from '../types/game'

export const texts: Record<Language, typeof ru | typeof en> = {
  ru, en
}
