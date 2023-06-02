import { render } from '@testing-library/vue'
import MainNav from '@components/Navigation/MainNav.vue'
import { userEvent } from '@testing-library/user-event'
import { RouterLinkStub } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

describe('MainNav', () => {
  const renderMainNav = () => {
    const pinia = createTestingPinia({ stubActions: false })
    const $route = { name: 'Home' }
    render(MainNav, {
      global: {
        plugins: [pinia],
        mocks: {
          $route
        },
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    })
  }
  it('displays compnay name', () => {
    renderMainNav()
    const companyName = screen.getByText('Tech Carreers')
    expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for nagivations', () => {
    renderMainNav()
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)
    console.log(navigationMenuTexts)
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Tech Carreers',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })

  describe('when the user logs in', () => {
    it('displays user profile picture', async () => {
      renderMainNav()
      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })
      await userEvent.click(loginButton)
      profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
