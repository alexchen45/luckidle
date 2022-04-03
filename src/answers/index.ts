import { getHint } from '../logic'
import json from 'https://alexchen45.github.io/luckidleAns.json' assert {type:"json"}




export function getAnswerOfDay(day: number) {

  const [word = '', hint = ''] =  ['小福企鹅', '鹅']

  return {
    word,
    hint: hint || getHint(word),
  }
}
