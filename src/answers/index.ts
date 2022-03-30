import { getHint } from '../logic'


export function getAnswerOfDay(day: number) {
  const [word = '', hint = ''] =  ['帝王拿波', '波']
  return {
    word,
    hint: hint || getHint(word),
  }
}
