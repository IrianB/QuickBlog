import React from "react";
import moment from "moment";

const CommentTableItem = ({ comment, index }) => {
    return (
        <tr
            key={index}
            className="border-b hover:bg-gray-50 transition-colors duration-200"
        >
            {/* Blog Title & Comment */}
            <td className="py-4 px-6 text-left text-gray-800">
                <p className="font-semibold">
                    Blog: {comment.blog?.title || "Untitled Blog"}
                </p>
                <p className="text-gray-700 text-sm mt-1">
                    <span className="font-medium">Name:</span> {comment.name}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                    {comment.content || "No comment provided."}
                </p>
            </td>

            {/* Date */}
            <td className="py-4 px-6 text-center text-gray-700">
                {moment(comment.createdAt).format("MMM DD, YYYY")} <br />
                <span className="text-xs text-gray-500">
                    {moment(comment.createdAt).format("h:mm A")}
                </span>
            </td>

            {/* Status */}
            <td className="py-4 px-6 text-center">
                <span
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${comment.isApproved
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                >
                    {comment.isApproved ? "Approved" : "Not Approved"}
                </span>
            </td>

            {/* Action */}
            <td className="py-4 px-6 text-center">
                <div className="flex justify-center gap-3">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition">
                        {comment.isApproved ? "Unapprove" : "Approve"}
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition">
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default CommentTableItem;
