import { APIGatewayProxyHandler } from "aws-lambda";
import { sendResponse } from "@/utils/makeResponse";
import AWS from "aws-sdk";
import { Entities, NFTAttributes, TableKeys } from "@/common/dynamo/schema";
import { buildNftKey } from "@/common/dynamo/buildKey";
import KSUID from "ksuid";

const dynamo = new AWS.DynamoDB.DocumentClient();

const TableName = process.env.dynamo_table as string;

export const main: APIGatewayProxyHandler = async (event) => {
  try {
    const { name, tag } = JSON.parse(event.body);

    const id = KSUID.randomSync().string;
    const Item = {
      [TableKeys.PK]: Entities.NFT,
      [TableKeys.SK]: buildNftKey(id),
      [NFTAttributes.ID]: id,
      [NFTAttributes.NAME]: name,
      [NFTAttributes.TAG]: tag,
      [NFTAttributes.CREATED_AT]: Date.now().toString(),
    };

    await dynamo
      .put({
        Item,
        TableName,
        ConditionExpression: `attribute_not_exists(${TableKeys.SK})`,
      })
      .promise();

    return sendResponse(201, true);
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      return sendResponse(500, error.message);
    }
  }
};
