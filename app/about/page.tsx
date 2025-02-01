"use client";
import { Title } from "@/components/title";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-50 to-background pointer-events-none h-[30vh] " />
      <div className="absolute w-full bottom-0 bg-gradient-to-t from-default-200 to-background pointer-events-none h-[30vh] " />
      <div className="relative">
        <div className="container mx-auto px-4 pt-20 pb-12 text-center">
          <Title className="text-5xl md:text-6xl text-default brightness-110 mb-4">
            More About Us
          </Title>
          <p className="text-lg text-primary-600/70 max-w-2xl mx-auto">
            We are a team of passionate individuals who are dedicated to
            providing the best coffee shop experience to our customers. We pride
            ourselves on our commitment to quality, customer service, and
            innovation.
          </p>
        </div>
      </div>
    </main>
  );
}
