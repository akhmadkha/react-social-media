import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeRightbar from "../../components/home_rightbar";
import { AnnotationIcon } from "@heroicons/react/outline";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import PostingForm from "../../components/posting_form";
import { dataPosts, getPostAsync } from "../../../app/reducer/post_reducer";
import SkeletonLoading from "../../components/skeleton_loading";

export default function Home() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { status, data } = useSelector(dataPosts);

  useEffect(() => {
    if (data.length < 1) {
      dispatch(getPostAsync());
    }
  }, [dispatch]);

  return (
    <div className="pt-20 flex gap-4">
      <div className="flex flex-col flex-1">
        <PostingForm />
        <hr className="my-6" />
        <div className="flex flex-col gap-6">
          {
            status === "loading" ? 
            <>
              <SkeletonLoading/>
              <SkeletonLoading/>
              <SkeletonLoading/>
              <SkeletonLoading/>
            </>
            :
            data.map((val, idx) => {
              return (
                <div
                  key={idx}
                  className="border p-4 rounded-lg hover:border-primary"
                >
                  <div className="flex gap-4 items-start">
                    <div className="avatar">
                      <div class="w-10 h-10 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=33791" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-6">
                      <div>
                        <Link to="">
                          <h5 className="text-sm text-primary font-semibold">
                            User 01
                          </h5>
                        </Link>
                        <Link to="">
                          <h3 className="text-xl font-semibold">{val.title}</h3>
                        </Link>
                      </div>
                      <p>{val.body}</p>
  
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
            })
          }
        </div>
      </div>

      <div className="w-72">
        <HomeRightbar />
      </div>
    </div>
  );
}
