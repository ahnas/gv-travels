const GallerySection = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&q=80",
      alt: "Dubai Skyline",
    },
    {
      src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
      alt: "Burj Khalifa",
    },
    {
      src: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&q=80",
      alt: "Desert Safari",
    },
    {
      src: "https://images.unsplash.com/photo-1564769610726-59cead6a6f8f?w=800&q=80",
      alt: "Sheikh Zayed Mosque",
    },
    {
      src: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=800&q=80",
      alt: "Dubai Marina",
    },
    {
      src: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
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
