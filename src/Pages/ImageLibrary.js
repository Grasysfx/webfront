import ImgLibHeader from "../Components/PictureContainerPage/ImageLibHeader";
import ImgLibHero from "../Components/PictureContainerPage/ImageLibHero";
import ImageUploadPage from "../Components/PictureContainerPage/ImageUploadPage";
import Footer from "../Components/MainPage/Footer";



function ImageLibrary() {
  return (
      <div>
        <ImgLibHeader />
        <ImgLibHero />
        <ImageUploadPage />
        <Footer />
      </div>
    
  );
};

export default ImageLibrary;



