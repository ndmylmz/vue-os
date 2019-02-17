import MainPage from './components/Main.vue';
import KpiCalculation from './components/KpiCalculation.vue';
import RetroMetrics from './components/RetroMetrics.vue';
import SlackIntegration from './components/SlackIntegration.vue';


export const routes = [{
    path: '/',
    component: MainPage,
    name: 'homeLink'
  }, {
    path: '/kpi',
    component: KpiCalculation,
    name: 'kpiLink'
  },
  {
    path: '/retro',
    component: RetroMetrics,
    children: [{
      path: ':teamName',
      component: RetroMetrics,
      name: 'retroChildrenLink'
    }],
    name: 'retroMainPageLink'
  },
  {
    path: '/slack',
    component: SlackIntegration,
    name: 'slackLink'
  }
];
