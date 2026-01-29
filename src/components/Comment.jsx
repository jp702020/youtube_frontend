import { useContext, useState } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Comment = ({ comment, refresh }) => {
  const { user } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(comment.text);

  const updateComment = async () => {
    await API.put(`/comments/edit/${comment._id}`, { text });
    setEdit(false);
    refresh();
  };

  const deleteComment = async () => {
    await API.delete(`/comments/${comment._id}`);
    refresh();
  };

  return (
    <div className="mb-3">
      <p className="text-sm font-semibold">
        {comment.userId?.username}
      </p>

      {edit ? (
        <div className="flex gap-2 mt-1">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 px-2 py-1 bg-gray-900 border border-gray-700 rounded"
          />
          <button
            onClick={updateComment}
            className="text-blue-400 text-sm"
          >
            Save
          </button>
        </div>
      ) : (
        <p className="text-sm text-gray-300">{comment.text}</p>
      )}

      {user && user._id === comment.userId?._id && (
        <div className="flex gap-2 text-xs text-gray-400 mt-1">
          <button onClick={() => setEdit(!edit)}>Edit</button>
          <button onClick={deleteComment}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Comment;
