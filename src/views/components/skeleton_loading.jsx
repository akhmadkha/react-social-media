import React from "react";

const SkeletonLoading = () => {
  return (
    <div class="border border-gray-300 shadow rounded-md p-4 my-4 w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-slate-500 h-10 w-10"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-500 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-500 rounded col-span-2"></div>
              <div class="h-2 bg-slate-500 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
