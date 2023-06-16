import { Module } from "@nestjs/common";
import { DefaultService } from "./default.service";

@Module({
  providers: [DefaultService],
})
export class DefaultModule {}
