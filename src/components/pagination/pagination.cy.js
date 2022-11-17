import CustomPagination from './index';

describe('<MaterialUISwitch>', () => {
  it('mounts', () => {
    cy.mount(<CustomPagination />)
  })

  it('clicking pagination and show highlight in different page number', () => {
    cy.mount(<CustomPagination/>)
    cy.get("li").eq(1).find("Button").click();
    cy.get(".Mui-selected").contains("1");
    cy.get("li").eq(2).find("Button").click();
    cy.get(".Mui-selected").contains("2");
    cy.get("li").eq(-2).find("Button").click();
    cy.get(".Mui-selected").contains("10");
  })
})