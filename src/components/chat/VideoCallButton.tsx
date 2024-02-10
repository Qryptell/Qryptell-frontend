import React from "react";
import { Button } from "../ui/button";
import { FaVideo } from "react-icons/fa6";

export default function VideoCallButton() {
  return (
    <Button className="bg-transparent hover:bg-transparent  hover:opacity-80">
      <FaVideo size="25" />
    </Button>
  );
}
