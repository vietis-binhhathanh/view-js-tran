import Home from './components/Home.vue'
import User from './components/user/User.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserList from './components/user/UserList'
import Header from './components/layouts/Header.vue'
import NotFound from './components/404.vue'

export const routes = [
  { path: '/', name: 'homepage', components: {
      default: Home,
      'Header': Header
    }
  },
  {   
    path: '/user',    
    component: User,
    children: [
      { path: '', name: 'userList', component: UserList },
      { path: ':id', name: 'userDetail', component: UserDetail },
    ],
  },
  {
    path: '/404', component: NotFound
  },
  {
    path: '*', redirect: '/404'
  }, 
];