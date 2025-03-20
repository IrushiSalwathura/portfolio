import { AnimatedTestimonials } from "./ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "This striking digital artwork captures the essence of bold expression through a vibrant monochromatic orange palette.",
    name: "Digital Art",
    designation: "",
    src: "/digital-art2.jpg",
  },
  {
    quote:
      "This personalized acrylic portrait is a vibrant and expressive tribute to its subject, brought to life with rich, textured brushstrokes.",
    name: "Traditional Portrait Art",
    designation: "",
    src: "/art-1.jpg",
  },
  {
    quote:
      "This captivating oil painting presents a strikingly realistic portrayal of a girl submerged in water, her features gently distorted by the fluid surface.",
    name: "Submerged",
    designation: "",
    src: "/art-2.jpg",
  },
  {
    quote:
      "This dynamic acrylic painting captures Jo’s bold and unapologetic presence, her striking expression amplified by the sleek sunglasses that conceal her gaze yet reveal her attitude. ",
    name: "Jo",
    designation: "",
    src: "/art-3.jpg",
  },
  {
    quote:
      "This digital artwork presents a striking portrayal of modern style, featuring a girl who effortlessly embodies contemporary fashion.",
    name: "Digital Art",
    designation: "",
    src: "/digital-art1.jpg",
  },
  {
    quote:
      "This bold and stylish digital artwork captures the essence of modern Sri Lankan culture with a playful twist. The design features a Sri Lankan girl elegantly draped in a saree, blending traditional grace with contemporary edge.",
    name: "Tshirt design",
    designation: "",
    src: "/tshirt-design.jpg",
  },
];

const ArtGallery = () => {
  return (
    <div
      className="text-black w-screen items-center px-8 py-8 sm:py-16 xl:px-16 mx-auto relative z-10"
      id="gallery"
    >
      <h2 className="text-center text-4xl font-bold mb-4 pt-10">
        Life Beyond DEV
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};
export default ArtGallery;
