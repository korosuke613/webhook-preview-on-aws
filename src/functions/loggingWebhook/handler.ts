import 'source-map-support/register';
import {APIGatewayProxyEvent, Handler} from "aws-lambda";

const loggingWebhook: Handler<APIGatewayProxyEvent> = async (event) => {
  const headers = event.multiValueHeaders
  const body = JSON.parse(event.body)

  console.log(JSON.stringify({headers, body}, null, 2))
}

export const main: Handler<APIGatewayProxyEvent> = loggingWebhook;
