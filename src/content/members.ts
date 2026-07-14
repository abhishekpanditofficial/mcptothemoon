export type MemberColor = 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'orange'

export interface Member {
  name: string
  /** Designation / title, e.g. "Community Lead". */
  role: string
  /** Photo path under /public (e.g. "/members/satyam.jpg"). Falls back to initials when omitted. */
  image?: string
  /** Optional org / affiliation. */
  org?: string
  color: MemberColor
  /** Optional profile link (LinkedIn, personal site, etc.). */
  link?: string
  /** Optional X / Twitter handle without the leading @. */
  x?: string
}

/**
 * The MEMBERS — people in the MCP to the Moon community.
 *
 * TODO: `role` values below are placeholders — replace with each person's real
 * designation. Drop photos in public/members/ and uncomment the `image` line.
 */
export const MEMBERS: Member[] = [
  {
    name: 'Satyam Soni',
    role: 'Community Member', // TODO: real designation
    image: '/members/satyam-soni.jpg',
    color: 'purple',
    link: 'https://www.linkedin.com/in/satyampsoni/',
    x: 'satyampsoni',
  },
  {
    name: 'Abhishek Dutta',
    role: 'Community Member', // TODO: real designation
    image: '/members/abhishek-dutta.jpg',
    color: 'blue',
    link: 'https://www.linkedin.com/in/abhishek-dutta-/',
    x: 'aviduttaaa',
  },
  {
    name: 'Luis Felipe Hernandez Mora',
    role: 'Community Member', // TODO: real designation
    image: '/members/luis-hernandez.jpg',
    color: 'green',
    link: 'https://www.linkedin.com/in/luis-felipe-hernandez-mora-5b0348160/',
  },
  {
    name: 'Yash Israni',
    role: 'Community Member', // TODO: real designation
    image: '/members/yash-israni.jpg',
    color: 'orange',
    link: 'https://www.linkedin.com/in/yashisrani/',
    x: 'yashh_twt',
  },
]
