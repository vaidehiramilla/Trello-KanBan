
import styles from './Images.module.css';
import { images } from '../../asset/ImageData';

const Images = ({ handleSelectImage }) => {


const handleImageClick = (image) => {
    handleSelectImage(image);
  };
   
  return (
    

    <div className={styles.images}>
      {images.map((image) => (
        <div
          key={image.id}
          className={styles.img} 
          onClick={() => handleImageClick(image)}
        >
          <img src={image.img} alt="images" />
        </div>
      ))}
    </div>
  );
};

export default Images;
