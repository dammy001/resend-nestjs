import type { DynamicModule, Provider } from '@nestjs/common'
import { Global, Module } from '@nestjs/common'
import { ResendService } from './resend.service'
import type {
  ResendModuleAsyncOptions,
  ResendModuleOptions,
  ResendModuleOptionsFactory,
} from './resend.interface'
import { RESEND_MODULE_OPTIONS } from './resend.constant'

@Global()
@Module({})
export class ResendModule {
  public static register(options: ResendModuleOptions): DynamicModule {
    return {
      module: ResendModule,
      providers: [
        ResendService,
        {
          provide: RESEND_MODULE_OPTIONS,
          useValue: options || {},
        },
      ],
    }
  }

  /**
   * Registers a configured Module for import into the current module
   * using dynamic options (factory, etc)
   */
  public static registerAsync(
    options: ResendModuleAsyncOptions,
  ): DynamicModule {
    return {
      module: ResendModule,
      imports: [...(options?.imports || [])],
      providers: [
        ResendService,
        ResendModule.createResendModuleProvider(options),
      ],
    }
  }

  private static createResendModuleProvider(
    options: ResendModuleAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: RESEND_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      }
    }

    // For useClass and useExisting...
    return {
      provide: RESEND_MODULE_OPTIONS,
      useFactory: async (optionsFactory: ResendModuleOptionsFactory) =>
        optionsFactory.createResendModuleOptions(),
      inject: [...((options?.useExisting || options?.useClass) as any)],
    }
  }
}
