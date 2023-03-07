import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import routes from '../../routes'
import Layout from '../Layout'

const Router = () => {
    const [isLoggedIn, setisLoggedIn] = useState(true)

    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ path, component: Component, subRoutes }: any, index: any) => {
                    if (path === '/login' || path === '*') {
                        return (
                            <Route
                                key={index}
                                path={path}
                                element={<Component />}
                            />
                        )
                    } else {
                        return (
                            <Route key={index} element={isLoggedIn ? <Layout /> : <Navigate to='/login' />}>
                                <Route
                                    path={path}
                                    element={<Component />}
                                />
                            </Route>
                        )
                    }
                })}
                {/* {routes.map(({ path, component: Component, subRoutes }: any, index: any) => {
                    return (
                        <Route 
                            key={index}
                            path={path}
                            element={<Component />}
                        />
                    )
                })} */}
            </Routes>
        </BrowserRouter >
    )
}

export default Router