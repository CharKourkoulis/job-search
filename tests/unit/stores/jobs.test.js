import { createPinia, setActivePinia } from 'pinia'
import { useJobsStore } from '@/stores/jobs'
import axios from 'axios'

vi.mock('axios')

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('stores job listings', () => {
    const store = useJobsStore()
    expect(store.jobs).toEqual([])
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('FETCH_JOBS', () => {
    it('makes API request and stores received jobs', async () => {
      axios.get.mockResolvedValue({
        data: ['Job1', 'Job2']
      })
      const store = useJobsStore()
      await store.FETCH_JOBS()
      expect(store.jobs).toEqual(['Job1', 'Job2'])
    })
  })
})
