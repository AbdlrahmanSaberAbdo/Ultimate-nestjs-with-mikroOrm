import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoadStrategy } from '@mikro-orm/core';

import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';

export const DatabaseModule = {
    useFactory: (configService: ConfigService) =>
        ({
            type: 'postgresql',
            host: configService.get('POSTGRES_HOST'),
            port: configService.get('POSTGRES_PORT'),
            user: configService.get('POSTGRES_USER'),
            password: configService.get('POSTGRES_PASSWORD'),
            dbName: configService.get('POSTGRES_DB'),
            entities: ['dist/**/*.entity.js'],
            entitiesTs: ['src/**/*.entity.ts'],
            debug: true,
            highlighter: new SqlHighlighter(),
            metadataProvider: TsMorphMetadataProvider,
            registerRequestContext: false,
            migrations: {
                path: 'dist/migrations',
                pathTs: 'src/migrations',
            },
        } as MikroOrmModuleOptions),
    inject: [ConfigService],
    imports: [ConfigModule],
};
