import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

type ImageTypes = {
  id: string;
  imageUrl: string;
};

const Gallery = () => {
  const { user } = useUser();
  const [images, setImages] = useState([]);

  const getPhotos = useCallback(async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/photos?userId=${user?.id}`
      );

      setImages(res.data);
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  if (images.length === 0) return null;

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="grid grid-cols-4 gap-4">
        {images.map((image: ImageTypes) => (
          <div key={image.id}>
            <img src={image.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
