import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { fetchGallery } from "./components/galleryServise";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [photos, setPhotos] = useState([]);
  const [selectPhoto, setSelectPhoto] = useState(null);
  function openModal(image) {
    setSelectPhoto(image);
  }
  const handleSearch = async (topic) => {
    try {
      const data = await fetchGallery(topic);
      console.log(data);
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={photos} onClickImage={openModal} />
    </div>
  );
}

export default App;
