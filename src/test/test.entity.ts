import { Entity, Property, PrimaryKey } from '@mikro-orm/core';
import { v4 as uuid } from 'uuid';

@Entity()
class TestEntity {
    @PrimaryKey()
    id: string = uuid();

    @Property()
    title2: string;

    @Property()
    content: string;
}

export default TestEntity;