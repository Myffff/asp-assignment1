import MaterialUISwitch from './index';

describe('<MaterialUISwitch>', () => {
  it('mounts', () => {
    cy.mount(<MaterialUISwitch />)
  })

  it('clicking switch and show different span', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<MaterialUISwitch onChange={onChangeSpy} />)
    cy.get(".PrivateSwitchBase-root")
    cy.get('input').click();
    cy.get(".Mui-checked")
  })
})