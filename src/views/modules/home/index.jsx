import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeRightbar from "../../components/home_rightbar";
import { AnnotationIcon } from "@heroicons/react/outline";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import PostingForm from "../../components/posting_form";
import { dataPosts, getPostAsync } from "../../../app/reducer/post_reducer";
import SkeletonLoading from "../../components/skeleton_loading";
import PostCard from "../../components/post_card";

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
          {status === "loading" ? (
            <>
              <SkeletonLoading />
              <SkeletonLoading />
              <SkeletonLoading />
              <SkeletonLoading />
            </>
          ) : (
            data.map((val, idx) => {
              if (val.userId === 2020) {
                return <PostCard {...val} />;
              } else {
                return (
                  <Link to={`/post/` + val.id}>
                    <PostCard {...val} />
                  </Link>
                );
              }
            })
          )}
        </div>
      </div>

      <div className="w-72">
        <HomeRightbar />
      </div>
    </div>
  );
}
