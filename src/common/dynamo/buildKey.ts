import { Entities } from "@/common/dynamo/schema";

export const buildKey = (entity: Entities, id: string) => `${entity}${id}`;

export const buildNftKey = (id: string) => buildKey(Entities.NFT, id);
