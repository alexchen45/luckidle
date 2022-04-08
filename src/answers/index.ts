import { getHint } from '../logic'
import json from 'https://alexchen45.github.io/luckidleAns.json' assert {type:"json"}




export function getAnswerOfDay(day: number) {

  const [word = '', hint = ''] =  ['陈思福鹅', '陈']

  return {
    word,
    hint: hint || getHint(word),
  }
}
