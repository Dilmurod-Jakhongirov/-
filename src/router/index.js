import { createRouter, createWebHistory } from 'vue-router'
import addForm from '../components/addNewBook.vue'
import main from '../components/main.vue'

const routes = [
    {
        path: '/',
        component: main,
        name: 'main'
    },
    {
        path: '/add',
        component: addForm,
        name: 'addPage'
    },

]

export default createRouter({
    routes: routes,
    history: createWebHistory()
})