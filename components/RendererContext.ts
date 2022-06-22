import React from 'react'

import { getDomain, domainImage } from '../functions'

export const RendererContext = React.createContext({
  getDomain,
  domainImage
})

export default RendererContext
