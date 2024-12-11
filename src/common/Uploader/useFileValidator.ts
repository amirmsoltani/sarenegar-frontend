import path from "node:path";
import { useCallback } from "react";
// react-toastify
import { toast } from "react-toastify";
// types
import { TFileTypes } from "./Uploader.types";
// helper
import { PDF_FORMATS, IMAGE_FORMATS, MAX_IMAGE_SIZE, MAX_VIDEO_SIZE, ODD_FORMATS } from "./Uploader.constants";
import { MAX_PDF_SIZE, MAX_ODD_SIZE, OneMbUInBytes, AUDIO_FORMATS, VIDEO_FORMATS, MAX_AUDIO_SIZE } from "./Uploader.constants";

type TUseFileValidator = { types: TFileTypes[] };

const alertTextGenerator = (type: string, size: number) => `${type} size must not be bigger than ${size} mb`;

export const useFileValidator = ({ types }: TUseFileValidator) => {
  const validate = useCallback(
    (file: File) => {
      const extname = path.extname(file.name).toLowerCase();

      if (types.includes("IMAGE") && IMAGE_FORMATS.includes(extname)) {
        if (file.size > MAX_IMAGE_SIZE) {
          toast.error(alertTextGenerator("image", MAX_IMAGE_SIZE / OneMbUInBytes));
          return;
        }
        return true;
      } else if (types.includes("VIDEO") && VIDEO_FORMATS.includes(extname)) {
        if (file.size > MAX_VIDEO_SIZE) {
          toast.error(alertTextGenerator("video", MAX_VIDEO_SIZE / OneMbUInBytes));
          return;
        }
        return true;
      } else if (types.includes("PDF") && PDF_FORMATS.includes(extname)) {
        if (file.size > MAX_PDF_SIZE) {
          toast.error(alertTextGenerator("pdf", MAX_PDF_SIZE / OneMbUInBytes));
          return;
        }
        return true;
      } else if (types.includes("AUDIO") && AUDIO_FORMATS.includes(extname)) {
        if (file.size > MAX_AUDIO_SIZE) {
          toast.error(alertTextGenerator("audio", MAX_AUDIO_SIZE / OneMbUInBytes));
          return;
        }
        return true;
      } else if (types.includes("ODD") && ODD_FORMATS.includes(extname)) {
        if (file.size > MAX_ODD_SIZE) {
          toast.error(alertTextGenerator("odd file", MAX_ODD_SIZE / OneMbUInBytes));
          return;
        }
        return true;
      } else {
        toast.error("Selected file format is not valid");
      }
    },
    [types],
  );

  return validate;
};
