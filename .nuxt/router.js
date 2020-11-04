import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5483b27d = () => interopDefault(import('..\\pages\\Edit\\index.vue' /* webpackChunkName: "pages/Edit/index" */))
const _01e05aef = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _b8d06c38 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _e3ec7340 = () => interopDefault(import('..\\pages\\register\\done.vue' /* webpackChunkName: "pages/register/done" */))
const _215c49f8 = () => interopDefault(import('..\\pages\\register\\step2.vue' /* webpackChunkName: "pages/register/step2" */))
const _07305fb2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Edit",
    component: _5483b27d,
    name: "Edit"
  }, {
    path: "/inspire",
    component: _01e05aef,
    name: "inspire"
  }, {
    path: "/register",
    component: _b8d06c38,
    name: "register"
  }, {
    path: "/register/done",
    component: _e3ec7340,
    name: "register-done"
  }, {
    path: "/register/step2",
    component: _215c49f8,
    name: "register-step2"
  }, {
    path: "/",
    component: _07305fb2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
