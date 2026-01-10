import dubaiSkyline from "../assets/gallery/dubai-skyline.jpg";
import burjKhalifa from "../assets/gallery/burj-khalifa.jpg";
import desertSafari from "../assets/gallery/desert-safari.jpg";
import sheikhZayedMosque from "../assets/gallery/sheikh-zayed-mosque.jpg";
import dubaiMarina from "../assets/gallery/dubai-marina.jpg";
import palmJumeirah from "../assets/gallery/palm-jumeirah.jpg";

const GallerySection = () => {
  const images = [
    {
      src: dubaiSkyline,
      alt: "Dubai Skyline",
    },
    {
      src: burjKhalifa,
      alt: "Burj Khalifa",
    },
    {
      src: desertSafari,
      alt: "Desert Safari",
    },
    {
      src: sheikhZayedMosque,
      alt: "Sheikh Zayed Mosque",
    },
    {
      src: dubaiMarina,
      alt: "Dubai Marina",
    },
    {
      src: palmJumeirah,
      alt: "Palm Jumeirah",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Travel Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Glimpses of unforgettable experiences from our travelers
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
