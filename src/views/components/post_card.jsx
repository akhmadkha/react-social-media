import React from "react";
import { AnnotationIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
export default function PostCard(props) {
  const { userId, id, title, body } = props;
  return (
    <div className="border p-4 rounded-lg hover:border-primary">
      <div className="flex gap-4 items-start">
        <div className="avatar">
          <div class="w-10 h-10 rounded-full">
            <img
              src={"https://api.lorem.space/image/face?hash=3379" + userId}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <Link to="">
              <h5 className="text-sm text-primary font-semibold">User 0{userId}</h5>
            </Link>
            <Link to="">
              <h3 className="text-xl font-semibold">{title}</h3>
            </Link>
          </div>
          <p>{body}</p>

          <Link to="">
            <button className="btn btn-ghost flex items-center gap-4">
              <AnnotationIcon className="h-5 w-5 text-primary" />
              <p>View all comment</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
