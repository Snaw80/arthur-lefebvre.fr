"use client";

export default function Header({ name }: { name: string }) {
  return (
    <header className="bg-blue-600 text-white p-6">
      <h1 className="text-4xl font-bold">{name}</h1>
    </header>
  );
}