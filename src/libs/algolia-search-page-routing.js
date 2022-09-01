import { history } from 'instantsearch.js/es/lib/routers';
import algoliasearch from 'algoliasearch/lite';

const getCategorySlug = (name) => {
  return name
    .split(' ')
    .map(encodeURIComponent)
    .join('+');
}

const getCategoryName = (slug) => {
  return slug
    .split('+')
    .map(decodeURIComponent)
    .join(' ');
}

const routing = {
  router: history({
    windowTitle({ category, query }) {
      console.log('router', category, query)
    },
    createURL({ qsModule, routeState, location }) {
      console.log('createURL', [qsModule, routeState, location])
    },
    stateMapping: {
      stateToRoute(uiState) { 
        console.log('stateMapping - stateToRoute', uiState)
      },
  
      routeToState(routeState) { 
        console.log('stateMapping - routeToState', routeState)
      },
    },
  })
}

export default routing;