// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../components/Login.vue'),
 
  },
  {
    path: '/home',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import( '@/views/Home.vue'),
      },
      {
        path: '/attendance',
        name: 'Attendance',
        component: () => import( '@/views/Attendance.vue'),
      },
       {
        path: '/attendanceadmin',
        name: 'AttendanceAdmin',
        component: () => import('@/views/AttendanceAdmin.vue'),
      },
      {
        path: '/clients',
        name: 'Clients',
        component: () => import( '@/views/Clients.vue'),
      },
      {
        path: '/Department',
        name: 'Department',
        component: () => import('@/views/Department.vue'),
      },
      {
        path: '/Goal',
        name: 'Goal',
        component: () => import('@/views/Goal.vue'),
      },
      {
        path: '/LeaveDaysAdmin',
        name: 'LeaveDaysAdmin',
        component: () => import('@/views/LeaveDaysAdmin.vue'),
      },
      {
        path: '/LeaveDaysEmployees',
        name: 'LeaveDaysEmployees',
        component: () => import('@/views/LeaveDaysEmployees.vue'),
      },
      {
        path: '/Projects',
        name: 'Projects',
        component: () => import('@/views/Projects.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
