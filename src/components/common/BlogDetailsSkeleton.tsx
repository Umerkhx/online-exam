import { Skeleton } from "../ui/skeleton";

const BlogDetailsSkeleton = () => {
  return (
    <div className="flex flex-col space-y-4 m-auto w-[80%] mt-12">
      {/* Main heading */}

      <div className="w-[60%] m-auto">
        {/* <Skeleton className="h-6 w-[70%]" /> */}
        {/* Author, avatar, and date */}
        <div className="flex items-center space-x-3 mt-6">
          {/* Avatar */}
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex flex-col space-y-2">
            {/* Author name */}
            <Skeleton className="h-4 w-[150px]" />
            {/* Date */}
            <Skeleton className="h-4 w-[120px]" />
          </div>
        </div>
      </div>

      {/* Blog image */}
      <Skeleton className="h-[500px] w-[60%] rounded-lg m-auto" />
    </div>
  );
};

export default BlogDetailsSkeleton;
