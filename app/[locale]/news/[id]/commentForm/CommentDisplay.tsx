
import React from "react";

interface CommentData {
  name: string;
  comment: string;
}

interface CommentDisplayProps {
  comments: CommentData[]; 
}

// Компонент который отображает сам комментарий

const CommentDisplay: React.FC<CommentDisplayProps> = ({ comments }) => {
  return (
    <div className="bg-white text-black max-w-[690px] mt-8">
      <h2 className="  text-[18px] py-2  px-4">
        Комментарийлер ({comments.length}) {/* Количество комментариев */}
      </h2>

      {comments.map((comment, index) => (
        <div key={index} className="mt-2 p-4 border rounded ">
          <p className="text-gray-500">Имя: {comment.name}</p>
          <p className="text-gray-500">Комментарий: {comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentDisplay;
