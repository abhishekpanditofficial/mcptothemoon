export type Screen =
  | 'homeA'
  | 'homeB'
  | 'servers'
  | 'news'
  | 'events'
  | 'crew'
  | 'resources'

export type Navigate = (screen: Screen) => void
