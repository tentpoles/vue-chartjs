import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
      path: '/',
      name: 'index',
      component: () => import("../components/Index.vue")
  },
  {
      path: '/login',
      name: 'login',
      component: () => import("../components/Login.vue")
  },
  {
      path: '/user-management',
      name: 'user-management',
      component: () => import("../components/UserManagement/UserManagement.vue"),
      children: [
          {
            path: '',
            name: 'user-management-index',
            component: () => import("../components/UserManagement/UserManagementIndex.vue"),
          },
          {
            path: 'add',
            name: 'user-management-add',
            component: () => import("../components/UserManagement/UserManagementAdd.vue"),
          },
      ]
  },
  {
      path: '/role-management',
      name: 'role-management',
      component: () => import("../components/RoleManagement/RoleManagement.vue"),
      children: [
          {
            path: '',
            name: 'role-management-index',
            component: () => import("../components/RoleManagement/RoleManagementIndex.vue"),
          },
          {
            path: 'access',
            name: 'role-management-access',
            component: () => import("../components/RoleManagement/RoleManagementAccess.vue"),
          },
      ]
  },
  {
      path: '/menu-management',
      name: 'menu-management',
      component: () => import("../components/MenuManagement/MenuManagement.vue"),
      children: [
          {
            path: '',
            name: 'menu-management-index',
            component: () => import("../components/MenuManagement/MenuManagementIndex.vue"),
          },
          {
            path: 'add',
            name: 'menu-management-add',
            component: () => import("../components/MenuManagement/MenuManagementAdd.vue"),
          },
      ]
  },
  {
      path: '/session-management',
      name: 'session-management',
      component: () => import("../components/SessionManagement/SessionManagement.vue")
  },
  {
      path: '/variable-management',
      name: 'variable-management',
      component: () => import("../components/VariableManagement/VariableManagement.vue")
  },
  {
      path: '/log-activity',
      name: 'log-activity',
      component: () => import("../components/LogActivity/LogActivity.vue")
  },
  {
      path :'/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import("../components/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
