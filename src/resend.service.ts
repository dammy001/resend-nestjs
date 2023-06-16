import { Inject, Injectable } from '@nestjs/common'
import { Resend } from 'resend'
import { RESEND_MODULE_OPTIONS } from './resend.constant'
import type { ResendModuleOptions } from './resend.interface'

@Injectable()
export class ResendService {
  constructor(
    @Inject(RESEND_MODULE_OPTIONS)
    private readonly options: ResendModuleOptions,
  ) {}

  public resend(): Resend {
    return new Resend(this.options.key)
  }
}
