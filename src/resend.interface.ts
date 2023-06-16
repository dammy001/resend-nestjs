import type { ModuleMetadata, Type } from '@nestjs/common'

export interface ResendModuleOptionsFactory {
  createResendModuleOptions():
    | Promise<ResendModuleOptions>
    | ResendModuleOptions
}

export interface ResendModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[]
  useExisting?: Type<ResendModuleOptionsFactory>
  useClass?: Type<ResendModuleOptionsFactory>
  useFactory?: (
    ...args: any[]
  ) => Promise<ResendModuleOptions> | ResendModuleOptions
}

export type ResendModuleOptions = {
  key: string
}
