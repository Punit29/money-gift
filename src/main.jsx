import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import { Routers } from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={Routers} />
    </MantineProvider>
  </StrictMode>,
)
