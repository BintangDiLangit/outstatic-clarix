import { InitialDataContext } from '@/utils/hooks/useInitialData'
import mockProviderProps from '@/utils/tests/mockProviderProps'
import { TestWrapper } from '@/utils/TestWrapper'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { Sidebar } from './'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null
    }
  },
  usePathname: () => '/test-path'
}))

jest.mock('js-cookie', () => ({
  get: jest.fn(() => null),
  set: jest.fn()
}))

jest.mock('@/utils/generateUniqueId', () => jest.fn())

jest.mock('@/utils/hooks/useCollections', () => ({
  useCollections: () => ({
    data: ['collection1', 'collection2', 'collection3']
  })
}))

describe('<Sidebar />', () => {
  const mockCollections = ['collection1', 'collection2', 'collection3']

  const fetchMock = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          title: 'Test Title',
          content: 'Test Content',
          link: 'Test Link'
        })
    })
  )

  global.fetch = fetchMock as jest.Mock

  it('should render the component correctly', async () => {
    await act(async () => {
      render(
        <TestWrapper>
          <InitialDataContext.Provider value={mockProviderProps}>
            <Sidebar isOpen={true} />
          </InitialDataContext.Provider>
        </TestWrapper>
      )
    })

    expect(screen.getByLabelText('Sidebar')).toBeInTheDocument()
    expect(screen.getByText('Collections')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Documentation')).toBeInTheDocument()

    mockCollections.forEach((collection) => {
      expect(screen.getByText(collection)).toBeInTheDocument()
    })
  })
})
