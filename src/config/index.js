import React from 'react'
import ajax from './ajax'
import Validators from 'steelrose/config/validators'
import browserStorage from './browserStorage'
import {fromJS} from 'immutable'

const isProduction = process.env.NODE_ENV === 'production'
const backendUrl = isProduction
  ? (`${process.env.BACKEND_PROTOCOL}://${process.env.BACKEND_PROD_URL}`)
  : `${process.env.BACKEND_PROTOCOL}://${process.env.BACKEND_DOMAIN}:${process.env.BACKEND_PORT}`

const appEssentials = fromJS({
  backendUrl,
  siteUrl: `${process.env.CLIENT_PROTOCOL}://${process.env.CLIENT_DOMAIN}:${process.env.CLIENT_PORT}`,
  discordApiUrl: 'https://discord.com/api'
})

const resolveAscii = str => (
  /*
   reference: https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript#answer-30887763
  */
  str
    .split('')
    .map(c => c.charCodeAt(0))
    .reduce((prev, next) => prev + next)
)

const generateMediaFromFormat = (fname, props={}) => {
  /* Generate some media component based on passed file name ext. */
  const videoExt = Validators.isVideoExt(fname)
  const imageExt = Validators.isImageExt(fname)

  if (videoExt) {
    return <video src={fname} {...props} />
  }
  else if (imageExt) {
    return (
      <img src={fname} alt={fname} {...props} />
    )
  }

  return <div {...props}>Not Available</div>
}

export {
  Validators,
  generateMediaFromFormat,
  resolveAscii,
  appEssentials,
  ajax,
  browserStorage
}