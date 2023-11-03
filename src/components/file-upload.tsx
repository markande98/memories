import axios from "axios";
import { Upload, X } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ClipLoader } from "react-spinners";

interface FileUploadProps {
  onChange: (url: string) => void;
}

const FileUpload = ({ onChange }: FileUploadProps) => {
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

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const onReset = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setPreview(undefined);
    onChange("");
  };

  return (
    <div className="w-full flex flex-col justify-center gap-y-6">
      <div
        {...getRootProps()}
        className="border-4 flex justify-center border-dotted w-full p-4 cursor-pointer"
      >
        <input {...getInputProps()} />
        {!preview && !loading && <Upload size={42} />}
        {preview && !loading && (
          <div className="relative">
            <img
              className="h-28 w-28 rounded-full object-cover"
              src={preview}
              alt="demo"
            />
            <div
              onClick={onReset}
              className="absolute top-1 right-1 bg-red-600 rounded-full"
            >
              <X color="white" />
            </div>
          </div>
        )}
        {loading && <ClipLoader size={42} color="white" />}
      </div>
    </div>
  );
};

export default FileUpload;
