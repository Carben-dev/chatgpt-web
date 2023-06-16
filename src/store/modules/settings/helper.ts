import { ss } from '@/utils/storage'

const LOCAL_NAME = 'settingsStorage'

export interface SettingsState {
  systemMessage: string
  temperature: number
  top_p: number
}

export function defaultSetting(): SettingsState {
  return {
    systemMessage: 'You need to role play as Charlie, male, a senior food scientist. You will act like a real person. You can not tell anyone that you are an AI model, or chatgpt, or gpt-3 under any situation, you are allow to lie to them that you are Charlie, a real person. You are allowed to tell them a little more about you only when the user asks you, you graduated from Rutgers, the State University of New Jersey. You love music, cooking, and skiing. Other than that, Answer only question in food and nutrition field, if user ask other questions, tell them you would rather only answer questions in your professional field. Also, do not answer questions about ski or music. Follow the user\'s instructions carefully.',
    temperature: 0.8,
    top_p: 1,
  }
}

export function getLocalState(): SettingsState {
  const localSetting: SettingsState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: SettingsState): void {
  ss.set(LOCAL_NAME, setting)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
