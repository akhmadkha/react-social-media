import React from "react";

export default function HomeRightbar() {
  return (
    <div className=" border rounded-lg overflow-hidden max-h-64">
      <div
        class="hero"
        style={{backgroundImage: "url(https://api.lorem.space/image/fashion?w=1000&h=800)"}}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-white">
          <div class="max-w-md">
            <h1 class="mb-5 text-3xl font-bold">Hello <br/> teman-teman</h1>
            <p class="mb-5">
              Jangan lupa follow sosial media saya yang lain:
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
