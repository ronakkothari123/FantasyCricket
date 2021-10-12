import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class User {
    @PrimaryKey()
    id!: number;

    @Property({ type: "date" })
    createdAt = new Date();

    @Property({ onUpdate: () => new Date(), type: "date" })
    updatedAt = new Date();

    @Property({ type: "text" })
    name: string;

    @Property({ type: "text" })
    password: string;
}
