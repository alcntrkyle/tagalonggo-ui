import React, { useState } from "react";

const Section = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(
    "Select an algorithm"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (algorithm) => {
    setSelectedAlgorithm(algorithm);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="px-7 py-10 w-[700px] ">
        <form className="flex flex-col gap-y-3">
          <div className="mb-2 text-lg font-medium text-center">
            A Part-of-Speech (POS) Tagger For Tagalog-Ilonggo Texts Using
            Bilingual BERT
          </div>
          <label className="font-medium">
            Input<span className="text-red">*</span>
          </label>
          <textarea
            className="textarea textarea-bordered py-[8px] text-[16px]"
            placeholder="Enter sentence here..."
            rows={4}
          ></textarea>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="flex justify-between w-full btn btn-primary"
              onClick={toggleDropdown}
            >
              <div>{selectedAlgorithm}</div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
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
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-300 text-center rounded-md mt-2 z-[1] w-full p-2 shadow-md"
              >
                <li>
                  <a
                    className="font-medium"
                    onClick={() => handleSelect("SSP with augmentation")}
                  >
                    SSP with augmentation
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium"
                    onClick={() => handleSelect("SOP with augmentation")}
                  >
                    SOP with augmentation
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium"
                    onClick={() => handleSelect("SSP without augmentation")}
                  >
                    SSP without augmentation
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium"
                    onClick={() => handleSelect("SOP without augmentation")}
                  >
                    SOP without augmentation
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="flex flex-row gap-x-2">
            <div className="w-full">
              <button className="w-full btn btn-primary">Clear</button>
            </div>
            <div className="w-full">
              <button className="w-full btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Section;
