import React from "react";
import { Link } from "react-router-dom";
import HomeRightbar from "../../components/home_rightbar";
import { AnnotationIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div className="pt-20 flex gap-4">
      <div className="flex flex-col flex-1">
        <div className="border p-4 rounded-lg">
          <div className="flex gap-4 items-center">
            <div className="avatar">
              <div class="w-10 h-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Apa yang anda pikirkan?"
                class="input w-full bg-secondary-content"
              />
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex flex-col gap-6">
          <div className="border p-4 rounded-lg hover:border-primary">
            <div className="flex gap-4 items-start">
              <div className="avatar">
                <div class="w-10 h-10 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=33791" />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <div>
                  <Link to="">
                    <h5 className="text-sm text-primary font-semibold">User 01</h5>
                  </Link>
                  <Link to="">
                    <h3 className="text-xl font-semibold">
                      Ini judulnya postingan
                    </h3>
                  </Link>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus nobis accusamus veritatis tempora, officiis
                  asperiores officia eum architecto deleniti sit alias eligendi
                  tenetur? Officiis blanditiis omnis, vero delectus laborum
                  vitae?
                </p>

                <Link to="">
                  <button className="btn btn-ghost flex items-center gap-4">
                    <AnnotationIcon className="h-5 w-5 text-primary" />
                    <p>View all comment</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-72">
        <HomeRightbar />
      </div>
    </div>
  );
}
