import { parseCookies } from 'nookies'
import axios, { AxiosInstance } from 'axios'

export let apiClient: AxiosInstance

export type apiClientInitParam = {
  os?: string[] | string
  appVersion?: string[] | string
  osVersion?: string[] | string
  authToken?: string[] | string
  settingRevision?: string[] | string
}

export const initCyStoreClient = (
  ctx: any = null,
  { os, appVersion, osVersion, authToken, settingRevision }: apiClientInitParam,
) => {
  const cookies = parseCookies(ctx)

  apiClient = axios.create({
    headers: {
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include',
      referrer: 'no-referrer',
      'Content-Type': 'application/json',
      accept: 'application/json',
      os: os || cookies['os'] || 'web',
      'auth-token': authToken || cookies['auth-token'] || '',
      'app-version': appVersion || cookies['app-version'] || 0,
      'os-version': osVersion || cookies['os-version'] || 0,
      'setting-revision': settingRevision || cookies['setting-revision'] || 0,
    },
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 1000 * 60 * 3,
  })

  apiClient.interceptors.response.use(
    (res) => {
      const { code } = res.data
      if (code !== 0) {
        console.error(JSON.stringify(res.data))
        throw new Error(res.data.msg)
      }
      return res
    },
    (error) => {
      console.error(JSON.stringify(error))
      console.error(JSON.stringify(error.response?.data))
      throw error
    },
  )
}

initCyStoreClient(null, {})
