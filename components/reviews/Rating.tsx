import { FaStar, FaRegStar } from 'react-icons/fa';

function Rating({ rating }: { rating: number }) {
  

  return (
    <div className="flex items-center gap-x-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-primary">
          {i + 1 <= rating ? (
            <FaStar className="text-yellow-500" size={14} />
          ) : (
            <FaRegStar className="text-gray-400" size={14} />
          )}
          
        </span>
      ))}
    </div>
  );
}

export default Rating;
