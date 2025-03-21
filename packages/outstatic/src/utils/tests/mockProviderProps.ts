import { OutstaticData } from '@/app'

const mockProviderProps = {
  repoOwner: 'anything',
  repoSlug: 'anything',
  repoBranch: 'anything',
  contentPath: 'anything',
  monorepoPath: 'anything',
  ostPath: 'outstatic',
  session: null,
  initialApolloState: null,
  collections: ['collection1', 'collection2', 'collection3'],
  pages: [],
  hasOpenAIKey: false,
  hasChanges: false,
  setHasChanges: () => {},
  basePath: '',
  missingEnvVars: { required: {}, optional: {} },
  ostDetach: false,
  ostContent: 'anything',
  dashboardRoute: '/outstatic',
  githubGql: 'https://api.github.com/graphql',
  csrfToken: null,
  publicMediaPath: 'anything',
  repoMediaPath: 'anything'
} as OutstaticData

export default mockProviderProps
