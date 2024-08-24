import React from "react";

const Section = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="px-7 py-10 w-[700px] ">
        <form className="flex flex-col gap-y-3">
          <label className="font-medium">
            Input<span className="text-red">*</span>
          </label>
          <textarea
            className="textarea textarea-bordered border-gray border-[2px] py-[8px] text-[16px]"
            placeholder="Enter sentence here..."
            rows={6}
          ></textarea>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-primary w-full flex justify-between"
            >
              <div>
                Select an algorithm<span className="text-red">*</span>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-300 text-center rounded-md mt-2 z-[1] w-full p-2 shadow-md"
            >
              <li>
                <a className=" font-medium ">SSP with augmentation</a>
              </li>
              <li>
                <a className=" font-medium ">SOP with augmentation</a>
              </li>
              <li>
                <a className=" font-medium ">SSP without augmentation</a>
              </li>
              <li>
                <a className=" font-medium ">SOP without augmentation</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-x-2">
            <div className="w-full">
              <button className="btn btn-primary w-full">Clear</button>
            </div>
            <div className="w-full">
              <button className="btn btn-primary w-full">Generate </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Section;
