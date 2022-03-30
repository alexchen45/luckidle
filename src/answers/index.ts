import { getHint } from '../logic'


export function getAnswerOfDay(day: number) {
  const [word = '', hint = ''] =  ['小福企鵝', '鵝']
  return {
    word,
    hint: hint || getHint(word),
  }
}
