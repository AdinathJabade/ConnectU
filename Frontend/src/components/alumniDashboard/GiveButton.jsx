import React from "react";
import { FaGift } from "react-icons/fa";

const GiveButton = ({ onClick }) => (
  <button
    className="p-2 rounded-full hover:bg-green-50 transition"
    onClick={onClick}
    title="Give"
  >
    <FaGift className="text-xl text-green-700" />
  </button>
);

export default GiveButton;
