import React, { useState, useEffect, useCallback } from "react";
import Button from "../Button";
import ImageInput from "./ImageInput";
import { LuAsterisk } from "react-icons/lu";

// import { ImageType } from "@/types/image";

// interface SelectImageProps {
//   item: ImageType;
//   addImageToState: (value: ImageType) => void;
//   removeImageFromState: (value: ImageType) => void;
//   isUserCreated: boolean;
//   label: string;
// }
const SelectImage = ({
  item,
  addImageToState,
  removeImageFromState,
  isUserCreated,
  label,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (isUserCreated) {
      setIsSelected(false);
      setFile(null);
    }
  }, [isUserCreated]);

  const handleFileChange = useCallback((value) => {
    setFile(value);
    addImageToState(value);
  }, []);

  const handleCheck = useCallback((e) => {
    setIsSelected(e.target.checked);

    if (!e.target.checked) {
      setFile(null);
      removeImageFromState(item);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 overflow-y-auto border-b-[1.2px] border-slate-200 items-center p-2">
      <div className="flex flex-row gap-2 items-center py-1 h-[fit-content]">
        <label
          htmlFor={label}
          className="flex items-center font-medium cursor-pointer"
        >
          <span> {label}</span>
          <LuAsterisk color="#D22B2B" />
        </label>
      </div>

      <>
        {!file && (
          <div className="col-span-2 text-center">
            <ImageInput item={item} handleFileChange={handleFileChange} />
          </div>
        )}

        {file && (
          <div className="flex flex-row gap-2 text-sm col-span-2 items-center justify-between">
            <p>{file?.name}</p>
            <div className="w-[70px]">
              <Button
                small
                outline
                label="Cancel"
                onClick={() => {
                  setFile(null);
                  removeImageFromState(item);
                }}
              />
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default SelectImage;
