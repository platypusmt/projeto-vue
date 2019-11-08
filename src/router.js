import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/professores',
      name: 'professores',
      component: () => import('./views/Professores.vue')
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('./views/Sobre.vue')
    },
    {
      path: '/vendas',
      name: 'vendas',
      component: () => import('./views/Vendas.vue')
    },
    {
      path: '/cursos',
      name: 'cursos',
      component: () => import('./views/Cursos.vue')
    },
    {
      path: '/relatorio',
      name: 'relatorio',
      component:() => import('./views/Relatorio.vue')
    },
    {
      path: '/violao',
      name: 'violao',
      component: () => import('./views/Cursoviolao.vue')
    },
    {
      path: '/painel',
      name: 'painel-index',
      component: () => import('./views/painel/Index.vue')
    },
    {
      path: '/painel/login',
      name: 'painel-login',
      component: () => import('./views/painel/Login.vue')
    },
    {
      path: '/painel/usuarios',
      name: 'painel-usuarios',
      component: () => import('./views/painel/Usuarios.vue')
    },
    {
      path: '/painel/produtos',
      name: 'painel-produtos',
      component: () => import('./views/painel/Produtos.vue')
    }
  ]
})
