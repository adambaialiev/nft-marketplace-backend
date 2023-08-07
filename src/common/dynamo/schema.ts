import { DocumentClient } from "aws-sdk/clients/dynamodb";

export enum TableKeys {
  PK = "PK",
  SK = "SK",
}

export enum Entities {
  NFT = "NFT#",
}

export enum NFTAttributes {
  ID = "id",
  NAME = "name",
  TAG = "tag",
  FILE_URL = "fileUrl",
  CREATED_AT = "createdAt",
}

export interface NFTItem {
  [TableKeys.PK]: DocumentClient.String;
  [TableKeys.SK]: DocumentClient.String;
  [NFTAttributes.ID]: DocumentClient.String;
  [NFTAttributes.NAME]: DocumentClient.String;
  [NFTAttributes.TAG]: DocumentClient.String;
  [NFTAttributes.CREATED_AT]: DocumentClient.String;
}
