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
    { name: "Andy Sparey", rating: 5, text: "Atlantes Landscapes completed a grounds maintenance job for me, and I was blown away by the professionalism of the entire team. It was extremely smooth and stress free, from quoting to job completion. My team were also commenting on the quality of the work that was taking place. The guys actually on site doing the job were well skilled, very polite and friendly and extremely hard working. I would have no hesitation in recommending Atlantes Landscaping for any landscaping needs, and I would use them again and again.", date: "3 weeks ago" },
    { name: "Vicky King", rating: 5, text: "Choosing Atlantis garden design and landscaping was definitely the right choice. After taking 2 and half years to build our forever home it was extremely important for us to complete the project with a garden design that was in keeping with our new home and to give us a garden of beauty and ease of use. After lots of research we asked Atlantis design and landscape to take on our project as we decided that we wanted someone to not only design but to take on the whole project from start to completion. We have been impressed with the professionalism, care and attention they have taken with their award winning design skills.  They listened carefully to our requirements taking into account  not only the size of the plot, but the uneven ground, the exposure to the elements and the type of soil we have especially as it's on the edge of Dartmoor. They listened carefully to our ideas and our specific needs, taking into account that we needed a level back garden that allowed for disability access, raised beds for ease of maintenance and be wildlife friendly. Using their flair, originality and quality they have come up with a design that we are absolutely delighted with. Having consulted us at every stage It was just what we wanted. They have managed to incorporate all of our(some would say wild) ideas.  The planting plan has also taken into account not only the type of plants we love but making sure they will tolerate our soil, the wet and windy conditions and provide all year round interest. It is very exciting to see our dream taking shape and we have been delighted with their work ethic. They have been working extremely hard throughout the winter months in all weather conditions. It is now getting nearer to the planting process and we are so looking forward to seeing our garden come to life.", date: "a month ago" },
    { name: "Sarah White", rating: 5, text: "Atlantes Lanscapes , fantastic service today on a large hedge needing cutting back , totally professional from beginning to end , superb job done , will definitely use them again and recommend to friends and family , credit where it’s due  Thank you,", date: "a month ago" },
    { name: "Clare McGee", rating: 5, text: "Top service! I can’t get over how amazing my garden looks. Got before and after pics to see how much work was done and such good value for money", date: "2 months ago" },
    { name: "Internet Explorer", rating: 5, text: "Reliable and always helpful!", date: "2 months ago" },
    { name: "Jordan Holroyd", rating: 5, text: "Quotation Process Paul designed the garden for us after we initially reached out via the simple website form. He visited our garden and chatted us through what we wanted and made lots of design recommendations for us. Shortly after the visit (maybe 2-3 days), they provided a 17 page quote pdf with diagrams and a full breakdown of the spend in layman’s terms. Quotes provided by other companies were given to us on an unformatted word document with technical item numbers without much context or any visuals. The level of professionalism and detail within the initial quote was a key reason for us in selecting Atlantes over their competitors.  Communications About 2 weeks after we agreed on our final quote (we had asked for 2 - one with bedding plants and one without), we signed our contract and were introduced to our project manager. He then provided a provisional start date which was actually earlier than expected - although in the range Paul mentioned during the quotation process. I feel it is worth mentioning that we got several other quotes done and all of them emphasised to us that we would have to wait at least 6-8 months wherever we went and Atlantes went from quote to completion in less than 4. The only real negative I have to say about Atlantes is in relation to their invoicing consistency. In the contract it stated clear invoicing dates and amounts which were not kept to. We were invoiced in succession just before work started (later than expected). This did not impact us at all but I think is something they should improve. Following the project, Denise, their Strategy Director, reached out to make an appointment to visit us to discuss our experience, gather feedback and perform a quality check. We found this to be a very professional touch and reassured us that any further work we would ever need would be going to Atlantes.  Execution The execution of the garden work was exceptional, both the quality and the attention to detail was to the highest standards. The team worked through some awful rain and still continued to progress unimpaired. The team were all very friendly and gave us regular updates. We adore the final result of our new garden, I have attached before and after pictures but is worth noting the planting is our work and not Atlantes. We would highly recommend Atlantes for any landscaping work.", date: "a year ago", badge: "Local Guide" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Atlantes Landscapes | Landscaper in Exeter",
    description: "Professional landscaper in Exeter. 5.0-star rated on Google. Call for a free quote.",
  },
};
