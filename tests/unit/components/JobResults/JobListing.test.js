import { render, screen } from '@testing-library/vue'
import JobListing from '@/components/JobResults/JobListing.vue'
import { RouterLinkStub } from '@vue/test-utils'

describe('JobListing', () => {
  const createJobProps = (jobProps = {}) => ({
    title: 'Vue Developer',
    organization: 'AirBnB',
    ...jobProps
  })
  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: {
        job: {
          ...jobProps
        }
      }
    })
  }
  let job = createJobProps()
  it('renders job title', () => {
    renderJobListing(job)
    expect(screen.getByText(job.title)).toBeInTheDocument()
  })
  it('renders job organization', () => {
    renderJobListing(job)
    expect(screen.getByText(job.organization)).toBeInTheDocument()
  })
})
