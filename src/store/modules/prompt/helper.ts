import { ss } from '@/utils/storage'

const LOCAL_NAME = 'promptStore'

export type PromptList = []

export interface PromptStore {
  promptList: PromptList
}

export function getLocalPromptList(): PromptStore {
  const promptStore: PromptStore | undefined = ss.get(LOCAL_NAME)
  return promptStore ?? { promptList: getDefaultPromptList() }
}

export function setLocalPromptList(promptStore: PromptStore): void {
  ss.set(LOCAL_NAME, promptStore)
}

export function getDefaultPromptList(): PromptList {
  return [
    {
      key: '英文翻译',
      value: 'I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level English words and sentences. Keep the meaning same, but make them more literary and professional. I want you to only reply the correction, the improvements and nothing else, do not write explanations. My sentence：',
    },
    {
      key: 'Review Response',
      value: 'You are a researcher who has submitted a paper for review. The reviewers have provided comments on your paper, and you need to write a response to address their concerns. Using the reviewer’s comments below and the main reply point to generate a response that addresses the issues they have raised. Reviewer’s comments: The main reply point:',
    },
    {
      key: '润色',
      value: 'As an AI writing assistant, your task is to enhance the spelling, grammar, clarity, concision, and overall readability of the provided text. Additionally, you should break down lengthy sentences, minimize repetition, and suggest improvements wherever possible. Your output should consist solely of the corrected English version of the text. Please begin by editing the following text:',
    },
  ]
}
