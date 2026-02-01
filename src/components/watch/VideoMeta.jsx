import {
  AiOutlineLike,
  AiOutlineDislike
} from "react-icons/ai";
import {
  FiShare,
  FiMoreHorizontal
} from "react-icons/fi";
import { MdDownload } from "react-icons/md";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  ShareIcon,
  EllipsisHorizontalIcon,
  ArrowDownTrayIcon
} from "@heroicons/react/24/outline";



const VideoMeta = () => {
  return (
    <>
      {/* Title */}
      <h1 className="text-lg font-semibold mb-2">
        Honest talk with Google Recruiter | Job market, Resume, Tier 3 colleges, CGPA
      </h1>

      {/* Channel row */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/150?img=12"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium">Fraz</p>
            <p className="text-sm text-gray-500">470K subscribers</p>
          </div>
          <button className="ml-4 bg-black text-white px-4 py-1 rounded-full">
            Subscribe
          </button>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
            <HandThumbUpIcon className="w-5" /> 5.1K
          </button>
          <button className="bg-gray-100 px-3 py-1 rounded-full">
            <HandThumbDownIcon className="w-5" />
          </button>
          <button className="bg-gray-100 px-3 py-1 rounded-full">
            <ShareIcon className="w-5" />
          </button>
          <button className="bg-gray-100 px-3 py-1 rounded-full">
            <ArrowDownTrayIcon className="w-5" />
          </button>
          <button className="bg-gray-100 px-3 py-1 rounded-full">
            <EllipsisHorizontalIcon className="w-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoMeta;
