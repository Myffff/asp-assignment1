# Movies App
Yifei Ma

GitLab:https://gitlab.com/YifeiMa/asp-assignment1

YouTube:https://www.youtube.com/watch?v=hdbvSPpuyTI

Website Demo: https://moviehub-asp-yifei.netlify.app/

![homePage](https://gitlab.com/YifeiMa/asp-assignment1/-/raw/main/pic/homePage.jpg)
## Object
Automate the build process of a React SPA project.

## Automated E2E Tests.
### Functionality and navigation test:
+ `base.cy.is` - discover trending today and show trending page successfully(which is home page of the app).
+ `baseTestofOtherPage.cy.js` - discover movies , tv series, popular people,etc. and show them successfully in different pages.
+ `genres.cy.js` - select genre(s), show related movies/tv series on the page.
+ `navigation.cy.js` - 1. jump from trending page to other pages, including: movies page; tv series page; search page; top rating page; People page. 2. jump from trending page to movie/tv detail modal.
+ `pagination.cy.js` - jump from current page to selected page. in trending page, only show 10 pages. in movies/tv series page, show all pages.
+ `search.cy.js` - search name related movies/tv series.

### Error/Exception testing in:
+ [search.cy.js - line 60](https://gitlab.com/YifeiMa/asp-assignment1/-/blob/main/cypress/e2e/search.cy.js).
### Test case structure (nesting):
Contains informative test documentation, multi-layer describe.
### Cypress Custom commands in :
+ [navigation.cy.js - line 58](https://gitlab.com/YifeiMa/asp-assignment1/-/blob/main/cypress/e2e/navigation.cy.js).
+ [genres.cy.js - line 28, line 71](https://gitlab.com/YifeiMa/asp-assignment1/-/blob/main/cypress/e2e/genres.cy.js).

## Bundling/Code splitting：
+ `pages/Movies/index.js`
+ `pages/Series/index.js`

![code-splitting](https://gitlab.com/YifeiMa/asp-assignment1/-/raw/main/pic/codeSplitting.jpg)

## Source control
### Log history
screenshots of git history:

![git-log](https://gitlab.com/YifeiMa/asp-assignment1/-/raw/main/pic/gitLog.jpg)
### Branch-Edit-Merge workflow
branches:
- main
- develop
- basic-ci-config
- basic-splitting
- tests-in-ci
- more-splitting
- optimize-main-bundle
### Pull Request
This request was created by Zihan.

## Continuous integration
### [Pipeline](https://gitlab.com/YifeiMa/asp-assignment1/-/blob/main/.gitlab-ci.yml)
stages: install, build, test
### Branching policy
- develop branch - execute Install and build jobs only.
- main branch - perform Install, build, and test jobs.
## Cypress component testing in:
+ `components/pagination/pagination.cy.js` - selected page number get a different style.
+ `components/Switch/switch.cy.js` - selected stage get a different background color.

## Auto-deployment:
use netlify to implement auto-deployment:
https://moviehub-asp-yifei.netlify.app/