import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

import lecture01Routes from '../views/lecture/lecture01/index.js';
import lecture02Routes from '../views/lecture/lecture02/index.js';
import lecture03Routes from '../views/lecture/lecture03/index.js';
import lecture04Routes from '../views/lecture/lecture04/index.js';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  ...lecture01Routes,
  ...lecture02Routes,
  ...lecture03Routes,
  ...lecture04Routes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
