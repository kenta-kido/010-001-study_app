import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

import lecture01Routes from '../views/lecture/lecture01/index.js';
import lecture02Routes from '../views/lecture/lecture02/index.js';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  ...lecture01Routes,
  ...lecture02Routes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
