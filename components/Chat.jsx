"use client";

import * as Ably from "ably";
import { AblyProvider, ChannelProvider } from "ably/react";
import ChatBox from "./ChatBox";

const client = new Ably.Realtime({ authUrl: "/api", authMethod: "POST" });

export default function Chat() {
  return (
    <AblyProvider client={client}>
      <ChannelProvider channelName="chat-demo">
        <ChatBox />
      </ChannelProvider>
    </AblyProvider>
  );
}
