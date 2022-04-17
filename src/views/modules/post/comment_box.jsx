import React from "react";

export default function CommentBox() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="py-4 px-2 border-b">
          <h1>Komentar</h1>
        </div>
        <div className="flex-1 gap-2 max-h-screen pb-64 overflow-y-scroll">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, idx) => {
            return (
              <div className="flex gap-2 p-1">
                <div className="avatar">
                  <div class="w-8 h-8 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                  </div>
                </div>
                <div className="flex-1 border rounded-xl bg-gray-100 p-2">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-primary font-bold">Namanya</p>
                  </div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nam necessitatibus suscipit temporibus aspernatur delectus
                    dignissimos velit. Facilis doloremque aliquam deleniti,
                    excepturi sint temporibus reiciendis quam eum repellat vel
                    doloribus nisi!
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-4 sticky bottom-0 bg-white px-2 border-t">
        <h1>Komentar</h1>
      </div>
    </div>
  );
}
