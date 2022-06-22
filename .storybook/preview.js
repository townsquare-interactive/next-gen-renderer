import React from 'react'
import '../styles/globals.css'
import RendererContext from '../components/RendererContext'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    const rc = {
      getDomain: () => window.location.origin,
      domainImage: (url) => url
    }
    console.log('RendererContext', rc)

    return (
      <RendererContext.Provider value={rc}>
        <Story />
      </RendererContext.Provider>
    )
  }
]
