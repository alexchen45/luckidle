import { getHint } from '../logic'


export function getAnswerOfDay(day: number) {
  const [word = '', hint = ''] =  ['冰鲜妙鹅', '鹅']
  return {
    word,
    hint: hint || getHint(word),
  }
}
