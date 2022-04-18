import React, { useEffect } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { create } from "../../../app/reducer/comment_reducer";

export default function CommentCreate(props) {
  const { postId } = props;
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  function submit(e) {
    let name = e.target.namaKomentar.value;
    let body = e.target.komentar.value;

    let payload = {
      name,
      body,
      email: "user@root.com",
      postId,
      id: new Date().valueOf(),
    };
    dispatch(create({ data: payload }));
    var objDiv = document.getElementById("commentWrapper");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
  return (
    <div tabIndex="0" className="collapse collapse-arrow">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content rounded-lg">
        Buat komentar
      </div>
      <div className="collapse-content bg-primary peer-checked:bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(e);
          }}
          className="flex gap-2 mt-2"
        >
          <div className="flex-1 gap-2 flex flex-col">
            <input
              type="text"
              name="namaKomentar"
              placeholder="Nama komentar"
              className="input input-bordered w-full"
            />
            <textarea
              className="textarea textarea-bordered w-full"
              rows={1}
              name="komentar"
              placeholder="Ketik komentar"
            ></textarea>
          </div>
          <button type="submit" className="btn">
            <PaperAirplaneIcon className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
