import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const CommentTableItem = ({ comment, index, fetchComments }) => {
    const { axios } = useAppContext();
    const [loading, setLoading] = useState(false);

    const approveComment = async () => {
        try {
            setLoading(true);
            const { data } = await axios.post('/api/admin/approve-comment', { id: comment._id });
            if (data.success) {
                toast.success(data.message);
                fetchComments();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error('Failed to approve comment');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const deleteComment = async () => {
        if (!window.confirm('Are you sure you want to delete this comment?')) return;
        try {
            setLoading(true);
            const { data } = await axios.post('/api/admin/delete-comment', { id: comment._id });
            if (data.success) {
                toast.success(data.message);
                fetchComments();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error('Failed to delete comment');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <tr className="border-b">
            <td className="py-4 px-6">
                <div>
                    <p className="font-medium text-gray-800">
                        {comment.blog?.title || 'Deleted Blog'}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">{comment.content}</p>
                </div>
            </td>
            <td className="py-4 px-6 text-center text-gray-600">
                {new Date(comment.createdAt).toLocaleString()}
            </td>
            <td className="py-4 px-6 text-center">
                {comment.isApproved ? (
                    <span className="px-2 py-1 rounded-full text-sm bg-green-100 text-green-800">
                        Approved
                    </span>
                ) : (
                    <span className="px-2 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                        Not Approved
                    </span>
                )}
            </td>
            <td className="py-4 px-6 text-center flex justify-center gap-3">
                {!comment.isApproved && (
                    <button
                        onClick={approveComment}
                        disabled={loading}
                        className="px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        Approve
                    </button>
                )}
                <button
                    onClick={deleteComment}
                    disabled={loading}
                    className="px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default CommentTableItem;
