export type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  image: string;
  content: string;
};

export type SlideTestProps = {
  testimonials: Testimonial[];
};
