import { FC } from 'react'
import { Box, CssBaseline } from '@mui/material'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { grey } from '@mui/material/colors'
import { Outlet } from 'react-router-dom'

const Layout: FC = () => {
  return (
    <>
      <CssBaseline />
      <Sidebar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: 7,
          minHeight: '100vh',
          backgroundColor: grey[100],
        }}>
        <Header />
        <Box mt={2} ml={3} minHeight='100vh'>
          <Outlet />
        </Box>
      </Box>
    </>
  )
}

export default Layout