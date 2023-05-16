import { render } from '@testing-library/vue'
import MainNav from '@components/MainNav.vue'
import { userEvent } from '@testing-library/user-event'

describe('MainNav', () => {
  it('displays compnay name', () => {
    render(MainNav)
    const companyName = screen.getByText('Tech Carreers')
    expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for nagivations', () => {
    render(MainNav)
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
      render(MainNav)
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
