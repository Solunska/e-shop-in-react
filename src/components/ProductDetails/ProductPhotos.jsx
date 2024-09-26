import classes from './ProductPhotos.module.css'

export default function ProductPhotos({ item, selectedPhoto, setSelectedPhoto }) {
    return <div className={classes.imagesContainer}>
        <div className={classes.sideImages}>
            {item.photos.map((photo, index) => (
                <img
                    key={index}
                    src={photo}
                    alt={`${item.name} view ${index + 1}`}
                    className={(selectedPhoto == index) ? classes.selectedImage : classes.image}
                    onClick={() => setSelectedPhoto(index)}
                    selected={selectedPhoto == index} />
            ))}
        </div>
        <div className={classes.mainImage}>
            <img src={item.photos[selectedPhoto]} alt={item.name} />
        </div>
    </div>
}