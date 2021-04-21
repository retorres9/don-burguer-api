import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TYPEORMCONFIG: TypeOrmModuleOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'ticowrc2017',
    database: 'DonBurguer',
    autoLoadEntities: true,
    synchronize: true
};