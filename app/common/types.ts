export type AppSideType = 'user' | 'manager'

export type OsType = 'android' | 'ios'

export type AddTrackParams = {
  eventName: string
  eventParam?: Record<string, string>
}

export interface PageProps {
  os?: string
  os_version?: string
  auth_token?: string
  app_version?: string
}
