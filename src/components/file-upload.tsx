import axios from "axios";
import { Upload } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ClipLoader } from "react-spinners";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";
import { useImageModal } from "@/hooks/use-image-modal";
import usePhotos from "@/hooks/use-photos";

const FileUpload = () => {
  const { user } = useUser();
  const { onClose } = useImageModal();
  const { mutate: mutateFetchPhotos } = usePhotos(user?.id);
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const onSubmit = useCallback(async () => {
    try {
      await axios.post(`http://localhost:3000/photos`, {
        userId: user?.id,
        imageUrl,
      });
      onClose();
      mutateFetchPhotos();
      toast.success("uploaded successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }, [imageUrl, onClose, user?.id, mutateFetchPhotos]);

  const onDrop = useCallback(async (acceptedFiles: Blob[]) => {
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

      setImageUrl(res.data.secure_url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div className="w-full flex flex-col justify-center gap-y-6">
      <div
        {...getRootProps()}
        className="border-4 flex justify-center border-dotted w-full p-4 cursor-pointer"
      >
        <input {...getInputProps()} />
        {!preview && !loading && <Upload size={42} />}
        {preview && !loading && <img src={preview} alt="demo" />}
        {loading && <ClipLoader size={42} />}
      </div>
      <Button onClick={onSubmit}>Save</Button>
    </div>
  );
};

export default FileUpload;
