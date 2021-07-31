import 'source-map-support/register';
import {APIGatewayProxyEvent, Handler} from "aws-lambda";

const loggingWebhook: Handler<APIGatewayProxyEvent> = async (event) => {
  console.log(JSON.stringify(event, null, 2))
}

export const main: Handler<APIGatewayProxyEvent> = loggingWebhook;
