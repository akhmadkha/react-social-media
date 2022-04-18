
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dataComment,
  getCommentAsync,
} from "../../../app/reducer/comment_reducer";
import CommentCreate from "./comment_create";

export default function CommentBox(props) {
  const { postId } = props;
  const { data } = useSelector(dataComment);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.find((x) => x.postId.toString() === postId)) {
    } else {
      dispatch(getCommentAsync(postId));
    }
  }, [dispatch]);

  console.log(data)

  function renderComment(params) {
    // console.log("bottom", data)
    // console.log(params.find((x) => x.postId.toString() === postId))
    let commentData = params.find((x) => x.postId.toString() === postId);
    if (commentData) {
      console.log(params.find((x) => x.postId.toString() === postId))
      return commentData.comments.map((val, idx) => {
        console.log(val?.name)
        return (
          <div key={idx} className="flex gap-2 p-1">
            <div className="avatar">
              <div class="w-8 h-8 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </div>
            <div className="flex-1 border rounded-xl bg-gray-100 p-2">
              <div className="flex justify-between items-center mb-2">
                <div className="flex flex-col">
                  <p className="text-sm">{val?.email}</p>
                  <p className="text-primary font-bold">{val.name}</p>
                </div>
              </div>
              <p className="text-sm">{val?.body}</p>
            </div>
          </div>
        );
      });
    } else {
      return <div className="min-h-screen">Tidak ada komen</div>;
    }
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className="py-4 px-2 border-b">
          <h1>Komentar</h1>
        </div>
        <div id="commentWrapper" className="flex-1 gap-6 pb-80 overflow-y-scroll" style={{maxHeight: "80vh"}}>
          {renderComment(data)}
        </div>
      </div>
      <div className="py-4 sticky bottom-0 bg-white px-2 border-t">
        <CommentCreate postId={postId}/>
      </div>
    </div>
  );
}
