import React from "react";

export default function HomeRightbar() {
  return (
    <div
      className=" border rounded-lg overflow-hidden max-h-64"
      style={{
        position: "sticky",
        top: "5rem",
      }}
    >
      <div
        class="hero"
        style={{
          backgroundImage:
            "url(https://api.lorem.space/image/fashion?w=1000&h=800)",
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-white">
          <div class="max-w-md">
            <h1 class="mb-5 text-3xl font-bold">
              Hello <br /> teman-teman
            </h1>
            <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="https://akhmadkha.id" target="_blank" class="btn btn-primary">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
}
