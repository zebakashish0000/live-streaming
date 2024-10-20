import React from "react";
import { useParams } from "react-router-dom";
import { appId, secret } from "./variables"; // Imported correctly
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { id } = useParams();

  const liveStream = async (element) => {
    const appID = 377917429; // Use the imported appId
    const serverSecret ="058361fb5e314d7e1cc88c7f55fa0981"; // Use the imported secret
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "Zaybaa"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
      },
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:5173/room/${id}`,
        },
      ],
    });
  };

  return (
    <>
      <div ref={liveStream} />
    </>
  );
};

export default Room;
