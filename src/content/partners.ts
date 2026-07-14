export type PartnerColor = 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'orange'

export interface Partner {
  name: string
  /** One-line description of what the partner does for the MCP community. */
  blurb: string
  /** Logo image path under /public (e.g. "/partners/nitrostack.png"). */
  logo: string
  url: string
  linkLabel: string
  /** Accent color for the card frame. */
  color: PartnerColor
}

/** The PARTNERS — companies backing MCP to the Moon. */
export const PARTNERS: Partner[] = [
  {
    name: 'NitroStack',
    blurb:
      'The MCP developer platform — SDK, MCP CLI, NitroStudio IDE and NitroCloud for shipping MCP servers fast.',
    logo: '/partners/nitrostack.png',
    url: 'https://nitrostack.ai',
    linkLabel: 'NITROSTACK ↗',
    color: 'blue',
  },
  // Add more partners here — drop the logo in public/partners/ and reference it above.
]
