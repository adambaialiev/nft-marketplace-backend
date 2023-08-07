import { APIGatewayProxyHandler } from "aws-lambda";
import { sendResponse } from "@/utils/makeResponse";

export interface GetUploadUrlParams {
  extension: string;
  contentType: string;
}

export const main: APIGatewayProxyHandler = async (event) => {
  try {
    console.log({ event });
    // const { extension, contentType } = JSON.parse(
    //   event.body
    // ) as GetUploadUrlParams;

    return sendResponse(201, true);
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error) {
      return sendResponse(500, error.message);
    }
  }
};
