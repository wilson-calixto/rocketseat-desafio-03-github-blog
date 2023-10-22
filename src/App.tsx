import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export const client = new QueryClient({
  defaultOptions: { queries: { retry: false } },
})

export function App() {
  const GlobalStyleProxy: any = GlobalStyle

  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
      <GlobalStyleProxy />
    </ThemeProvider>
  )
}
