export type Screen =
  | 'homeA'
  | 'homeB'
  | 'servers'
  | 'news'
  | 'events'
  | 'crew'
  | 'community'
  | 'partners'
  | 'members'
  | 'creators'
  | 'blog'
  | 'resources'

export type Navigate = (screen: Screen) => void
