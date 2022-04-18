import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dataComment,
  getCommentAsync,
} from "../../../app/reducer/comment_reducer";
import CommentBubble from "./comment_buble";
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
  }, [dispatch, data, postId]);

  function renderComment(params) {
    let commentData = params.find((x) => x.postId.toString() === postId);
    console.log(commentData);
    if (commentData) {
      if (commentData.comments.length > 0) {
        return commentData.comments.map((val, idx) => {
          return <CommentBubble key={idx} {...val} />;
        });
      } else {
        return <div className="flex w-full">
          <div className="mx-auto mt-10">Tidak ada komentar</div>
        </div>;
      }
    }
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className="py-4 px-2 border-b">
          <h1>Komentar</h1>
        </div>
        <div
          id="commentWrapper"
          className="flex-1 gap-6 pb-80 overflow-y-scroll"
          style={{ maxHeight: "80vh", minHeight: "80vh" }}
        >
          {renderComment(data)}
        </div>
      </div>
      <div className="py-4 sticky bottom-0 bg-white px-2 border-t">
        <CommentCreate postId={postId} />
      </div>
    </div>
  );
}
