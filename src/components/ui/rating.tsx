import { Star } from 'lucide-react';
import { type FC } from 'react';

interface CommentRatingsProps {
  rating: number;
}

export const CommentRatings: FC<CommentRatingsProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < Math.floor(rating) 
              ? 'text-yellow-400 fill-yellow-400' 
              : index < rating 
                ? 'text-yellow-400 fill-yellow-400 opacity-50'
                : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};
