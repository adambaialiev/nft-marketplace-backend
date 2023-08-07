import { APIGatewayProxyHandler } from "aws-lambda";
import { sendResponse } from "@/utils/makeResponse";

export const main: APIGatewayProxyHandler = async (event) => {
  try {
    // const { name, tag } = JSON.parse(event.body);
    console.log({ event });

    return sendResponse(201, true);
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      return sendResponse(500, error.message);
    }
  }
};
