import { ArrowLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { useParams } from "react-router-dom";
import CommentBox from "./comment_box";

export default function Post() {
  const { idPost } = useParams();
  return (
    <div className="flex max-h-screen overflow-hidden">
      <div className="w-7/12 border-x pt-20 p-4 min-h-screen bg-white">
        <div className="mb-4">
          <button onClick={() => window.history.back()} className="btn btn-ghost gap-2">
            <ArrowLeftIcon className="h-5 w-5"/>
            Kembali
          </button>
        </div>
        <div className="flex justify-center">
          <div className="avatar">
            <div class="w-14 h-14 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </div>
          <div className="flex-1 pl-6">
            <p>@username</p>
            <h1 className="text-2xl font-bold text-primary">Nama Postingan</h1>
          </div>
        </div>
        <div className="mt-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            fugiat delectus, nisi ipsam minima perferendis voluptas omnis
            laboriosam provident illo libero corporis eius. Veniam saepe
            molestias expedita aliquam optio eveniet!
          </p>
        </div>
      </div>
      <div className="w-5/12 pt-20 border-r">
        <CommentBox/>
      </div>
    </div>
  );
}
