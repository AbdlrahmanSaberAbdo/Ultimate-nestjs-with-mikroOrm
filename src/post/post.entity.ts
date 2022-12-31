import { Entity, Property, PrimaryKey } from '@mikro-orm/core';
import { v4 as uuid } from 'uuid';

@Entity()
class PostEntity {
    @PrimaryKey()
    id: string = uuid();

    @Property()
    title: string;

    @Property()
    content: string;
}

export default PostEntity;