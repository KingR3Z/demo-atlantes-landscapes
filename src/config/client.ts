export const client = {
  // Business Details
  name: "Atlantes Landscapes",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Exeter.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01392 925735",
  email: "",
  website: "",

  // Location
  address: "Exeter",
  city: "Exeter",
  county: "",
  postcode: "",
  basedIn: "Exeter",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "8",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Vicky King6 reviewsa month ago Choosing Atlantis garden design and landscaping was definitely the right choice.
After taking 2 and half years to build our forever home it was extremely … MoreLike Share Response from the owner", rating: 5, text: "Dear Vicky,  Thank you very much for taking the time to leave such a lovely and thoughtful …", date: "3 weeks ago" },
    { name: "Andy Sparey", rating: 5, text: "New Atlantes Landscapes completed a grounds maintenance job for me, and I was blown away by the professionalism of the entire team. It was extremely smooth and stress free, from quoting to job completion. My team were also commenting on the …  ", date: "2 weeks ago" },
    { name: "Clare McGee", rating: 5, text: "Top service! I can’t get over how amazing my garden looks. Got before and after pics to see how much work was done and such good value for money   Response from the owner 2 months agoHi Claire, Thank you so much for your 5 star review! The team and", date: "2 months ago" },
    { name: "Mark", rating: 5, text: "Paul and his team installed us a complete new driveway, along with additional works. …  ", date: "2 years ago" },
    { name: "John Freer", rating: 5, text: "Paul and his team are so professional. We were impressed right from the start, first with the very detailed estimate right through to the work being completed. Darren, Joe and Rob worked so hard despite some really challenging weather and …  ", date: "6 years ago" },
    { name: "Stephen Kamalarajan", rating: 5, text: "Paul and his company are amazing. I have worked with Paul on 2 projects and he is meticulous. He shows you the potential of your project for a fair fee and does not add additional costs if the project is done in stages.  He is an extremely …  ", date: "4 years ago" },
    { name: "Rob Dunn", rating: 5, text: "Firstly Paul is a very friendly guy, easy to work with and very capable. From initial concept, through material selection to final design Paul was very helpful and brought out some great ideas. …  ", date: "7 years ago" },
    { name: "L Morgan", rating: 5, text: "Paul came out to quote for rebuilding a garden wall and building a set of brick steps. We had several quotes and decided to use the company as Paul reassured us that the work would be done exactly as we wanted; to tie in with the …    Response from", date: "4 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Atlantes Landscapes | Landscaper in Exeter",
    description: "Professional landscaper in Exeter. 5.0-star rated on Google. Call for a free quote.",
  },
};
