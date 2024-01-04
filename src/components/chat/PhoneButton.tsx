import React from "react";
import { Button } from "../ui/button";
import { FaPhoneAlt } from "react-icons/fa";

export default function PhoneButton() {
  return (
    <Button className="bg-transparent hover:bg-transparent">
      <FaPhoneAlt size="20" />
    </Button>
  );
}
