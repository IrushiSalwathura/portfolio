import { AnimatedTestimonials } from "./ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Through tangerine-tinted lenses, she sees a world set ablaze.",
    name: "Digital Art",
    designation: "",
    src:"/digital-art2.jpg",
  },
  {
    quote:
      "Warm hues blend harmoniously, highlighting the gentle touch of their hands and the emotion in their eyes.",
    name: "Traditional Portrait Art",
    designation: "",
    src: "/art-1.jpg",
  },
  {
    quote:
      "The calm yet poignant expression on the subject’s face speaks to a sense of tranquility, vulnerability, and introspection, inviting the viewer into a deep, contemplative moment.",
    name: "Submerged",
    designation: "",
    src: "/art-2.jpg",
  },
  {
    quote:
      "The warm, fiery tones of her attire contrast beautifully against the cooler, softer background, creating a striking visual balance.",
    name: "Jo",
    designation: "",
    src: "/art-3.jpg",
  },
  {
    quote:
      "Effortlessly bold, unapologetically cool.",
    name: "Digital Art",
    designation: "",
    src: "/digital-art1.jpg",
  },
  {
      quote:
        "Fearless, fierce, and unapologetically bold.",
      name: "Tshirt design",
      designation: "",
      src: "/tshirt-design.jpg",
    },
];

const ArtGallery = () => {
      return (
        <div className="text-black bg-yellow-300 h-screen w-screen items-center px-8 py-8 sm:py-16 xl:px-16 mx-auto relative z-10" id='gallery'>
            <h2 className='text-center text-4xl font-bold mb-4 pt-10'>Life Beyond DEV</h2>
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
      )
}
export default ArtGallery
