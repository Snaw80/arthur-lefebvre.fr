"use client";

import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  return (
    <form className="space-y-4">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Send
      </button>
    </form>
  );
}