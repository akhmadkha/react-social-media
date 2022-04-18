import { ArrowLeftIcon } from "@heroicons/react/outline";
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommentBox from "../comment/comment_box";
import { dataPosts } from "../../../app/reducer/post_reducer";
import { getCommentAsync } from "../../../app/reducer/comment_reducer";
import { getDetailPosts } from "../../../app/api/posts_api";

export default function Post() {
  const { idPost } = useParams();
  const dispatch = useDispatch();
  const {data} = useSelector(dataPosts)
  const [dataPost, setdataPost] = useState({})

  useEffect(() => {
    if(data.length < 1){
      getDetailPosts(idPost).then(res => {
        setdataPost(res.data)
      })
      dispatch(getCommentAsync(idPost))
    } else {
      const post = data.find(x => x.id.toString() === idPost)
      setdataPost(post)
    }
    return () => {
      
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col md:flex-row max-h-screen md:overflow-hidden">
      <div className="w-full md:w-7/12 border-x pt-20 p-4 md:min-h-screen bg-white">
        <div className="mb-4">
          <button onClick={() => window.history.back()} className="btn btn-ghost gap-2">
            <ArrowLeftIcon className="h-5 w-5"/>
            Kembali
          </button>
        </div>
        <div className="flex justify-center">
          <div className="avatar">
            <div class="w-14 h-14 rounded-full">
              <img alt="socialmedia-asset" src={`https://api.lorem.space/image/face?hash=3379${dataPost.userId ?? "1"}`} />
            </div>
          </div>
          <div className="flex-1 pl-6">
            <p>@username</p>
            <h1 className="text-2xl font-bold text-primary">{dataPost?.title}</h1>
          </div>
        </div>
        <div className="mt-10">
          <p>
            {dataPost?.body}
          </p>
        </div>
      </div>
      <div className="w-full md:w-5/12 pt-20 border-r">
        <CommentBox postId={idPost}/>
      </div>
    </div>
  );
}
