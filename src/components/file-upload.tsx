import axios from "axios";
import { Upload, Video, X } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ClipLoader } from "react-spinners";

interface FileUploadProps {
  onChange: (url: string) => void;
  isVideo?: boolean;
}

const FileUpload = ({ onChange, isVideo }: FileUploadProps) => {
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: Blob[]) => {
      const file = new FileReader();

      file.onload = () => {
        setPreview(file.result as string);
      };
      file.readAsDataURL(acceptedFiles[0]);

      const formData = new FormData();

      formData.append("file", acceptedFiles[0]);
      formData.append(
        "upload_preset",
        process.env.REACT_CLOUDINARY_UPLOAD_PRESET!
      );
      formData.append("api_key", process.env.REACT_CLOUDINARY_API_KEY!);

      try {
        setLoading(true);

        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_CLOUDINARY_CLOUDNAME}/upload`,
          formData
        );

        onChange(res.data.secure_url);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [onChange]
  );
  let accept;

  if (isVideo)
    accept = {
      "video/*": [],
    };
  else {
    accept = {
      "image/*": [".png", ".jpg", ".jpeg"],
    };
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
  });

  const onReset = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setPreview(undefined);
    onChange("");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-6">
      {!preview && (
        <div
          {...getRootProps()}
          className="border-4 flex justify-center border-dotted w-full p-4 cursor-pointer"
        >
          <input {...getInputProps()} />
          <Upload size={42} />
        </div>
      )}
      {preview && (
        <>
          {loading && <ClipLoader size={42} color="pink" />}
          {!loading && (
            <div className="relative">
              {!isVideo && (
                <img
                  className="h-28 w-28 rounded-full object-cover"
                  src={preview}
                  alt="demo"
                />
              )}
              {isVideo && (
                <div className="relative">
                  <video
                    src={preview}
                    className="h-28 w-28 rounded-full object-cover"
                  />
                  <div className="absolute h-28 w-28 rounded-full inset-0 flex justify-center items-center bg-black/60">
                    <Video className="text-white" />
                  </div>
                </div>
              )}
              <div
                onClick={onReset}
                className="absolute top-1 right-1 bg-red-600 rounded-full cursor-pointer"
              >
                <X color="white" />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FileUpload;
