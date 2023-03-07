import Dashboard from "../views/Dashboard"
import Login from "../views/Login"
import NotFound from "../views/NotFound"
import Signup from "../views/Signup"
import Tasks from "../views/Tasks"

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/signup',
        component: Signup,
    },
    {
        path: '/tasks',
        component: Tasks,
    },
    {
        path: '/',
        component: Dashboard,
    },
    {
        path: '*',
        component: NotFound
    }
]

export default routes