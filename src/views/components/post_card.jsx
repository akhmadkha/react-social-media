import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { AnnotationIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {update} from "../../app/reducer/post_reducer";
import { useAlert } from "react-alert";

export default function PostCard(props) {
  const { userId, id, title, body } = props;
  const [loadingUpdate, setloadingUpdate] = useState(false);
  const dispatch = useDispatch()
  const alert = useAlert()

  function switchModalEdit(params) {
    if (params) {
      document.getElementById(`modalEditPost${id}`).classList.add("modal-open");
    } else {
      document
        .getElementById(`modalEditPost${id}`)
        .classList.remove("modal-open");
    }
  }

  function onUpdate(e) {
    let newTitle = e.target.title.value
    let newBody = e.target.body.value
    const payload = {
      id, userId, newTitle, newBody
    }
    dispatch(update({data: payload}))
    switchModalEdit(false)
    alert.show("Berhasil edit psotingan");
  }
  return (
    <>
      {/* modal edit */}
      <div id={`modalEditPost${id}`} class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Edit Post</h3>
          <div className="flex flex-col gap-2">
            <form
              className="py-6"
              onSubmit={(e) => {
                e.preventDefault();
                onUpdate(e)
              }}
            >
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Judul</span>
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  required
                  placeholder="Judul Postingan"
                  class="input input-bordered w-full"
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Isi</span>
                </label>
                <textarea
                  name="body"
                  required
                  class="textarea textarea-bordered h-24"
                  placeholder="Isi Postingan"
                >
                  {body}
                </textarea>
              </div>
              <div className="pt-4 flex items-center gap-2">
                <label
                  onClick={() => switchModalEdit(false)}
                  for="my-modal"
                  class="btn"
                >
                  Batal
                </label>
                {loadingUpdate ? (
                  <button type="button" disabled class="btn loading">
                    loading
                  </button>
                ) : (
                  <button type="submit" class="btn gap-2 btn-primary">
                    <PaperAirplaneIcon className="h-5 w-5" />
                    Ubah
                  </button>
                )}
              </div>
            </form>
          </div>
          {/* <div class="modal-action">
            <label onClick={() => {}} for="my-modal" class="btn btn-error">
              Lanjut
            </label>
          </div> */}
        </div>
      </div>
      {/* modal hapus */}
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
            {userId === 2020 ? (
              <div className="flex justify-between items-center">
                <div>
                  <Link to={`/users/` + userId}>
                    <h5 className="text-sm text-primary font-semibold">Anda</h5>
                  </Link>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <div class="dropdown dropdown-end">
                  <label tabindex="0" class="btn btn-sm btn-ghost m-1">
                    <DotsHorizontalIcon className="h-5 w-5" />
                  </label>
                  <ul
                    tabindex="0"
                    class="dropdown-content gap-2 menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <button
                        onClick={() => {
                          switchModalEdit(true);
                        }}
                        className="btn btn-sm btn-ghost"
                      >
                        Edit
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-sm btn-error">Hapus</button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <Link to={`/users/` + userId}>
                  <h5 className="text-sm text-primary font-semibold">
                    User 0{userId}
                  </h5>
                </Link>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
            )}
            <p>{body}</p>

            <button className="btn btn-ghost flex items-center gap-4">
              <AnnotationIcon className="h-5 w-5 text-primary" />
              <p>View all comment</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
