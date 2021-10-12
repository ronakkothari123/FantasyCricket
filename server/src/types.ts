import { IDatabaseDriver, Connection, EntityManager } from "@mikro-orm/core";

export interface MyContext {
    em: EntityManager<IDatabaseDriver<Connection>> | undefined;
}
