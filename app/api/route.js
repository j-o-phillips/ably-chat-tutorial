import * as Ably from "ably";

export async function GET(request) {
  const client = new Ably.Realtime(process.env.ABLY_API_KEY);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: "ably-chat-tutorial",
  });
  return Response.json(tokenRequestData);
}
