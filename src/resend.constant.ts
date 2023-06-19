import type { InjectionToken } from '@nestjs/common'

export const RESEND_MODULE_OPTIONS: InjectionToken = Symbol(
  'RESEND_MODULE_OPTIONS',
)

export const RESEND_SERVICE_TOKEN: InjectionToken = Symbol(
  'RESEND_SERVICE_TOKEN',
)
