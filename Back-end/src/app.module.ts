import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AssociationsModule } from './associations/associations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Association } from './associations/association.entity';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { Role } from './roles/roles/role.entity';
import { RolesModule } from './roles/roles/roles.module';
import { Minute } from './minutes/minute.entity';
import { MinutesModule } from './minutes/minutes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'mydatabase.db',
      entities: [
        User,
        Association,
        Role,
        Minute
      ],
      synchronize: true,
    }),UsersModule, AssociationsModule, AuthModule,RolesModule,MinutesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
