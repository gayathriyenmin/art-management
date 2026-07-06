import type { Course, GalleryItem, Testimonial } from '../interfaces';

export const INSTRUCTORS = [
  {
    id: 'inst-1',
    name: 'Elena Rostova',
    role: 'Master of Fine Arts & Classical Oil Painting',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    bio: 'Elena is an award-winning painter with over 15 years of experience teaching classical techniques across Europe.',
    socials: { twitter: '#', instagram: '#', linkedin: '#' }
  },
  {
    id: 'inst-2',
    name: 'Marcus Vance',
    role: 'Lead Digital Illustrator & Concept Artist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    bio: 'Marcus has worked as a senior concept designer for leading entertainment and gaming studios worldwide.',
    socials: { twitter: '#', instagram: '#', linkedin: '#' }
  },
  {
    id: 'inst-3',
    name: 'Sarah Chen',
    role: 'Sculpting & Ceramics Department Head',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    bio: 'Sarah combines classical clay sculpting with modern architectural ceramic design to push physical boundaries.',
    socials: { twitter: '#', instagram: '#', linkedin: '#' }
  },
  {
    id: 'inst-4',
    name: 'Arthur Pendelton',
    role: 'Art Historian & Modern Art Critic',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    bio: 'Arthur brings historical context and critical analysis to life, helping students find their voice in history.',
    socials: { twitter: '#', instagram: '#', linkedin: '#' }
  }
];

export const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'Masterclass in Classical Oil Painting',
    slug: 'classical-oil-painting',
    description: 'Learn the techniques of old masters, from canvas preparation and underpainting to glazing and color mixing.',
    longDescription: 'Our signature oil painting masterclass is designed for artists seeking to master traditional fine art techniques. Under the guidance of Elena Rostova, you will delve deep into underpainting (imprimatura), color temperature theory, value structure, and the complex process of glazing. Over twelve intensive weeks, you will complete two masterwork studies and a final personal canvas.',
    category: 'Fine Arts',
    level: 'Advanced',
    duration: '12 Weeks',
    lessonsCount: 36,
    rating: 4.9,
    reviewsCount: 148,
    price: 890,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop',
    instructor: INSTRUCTORS[0],
    highlights: [
      'Master canvas stretching and custom gesso application',
      'Understand color science and pigment compatibility',
      'Learn glazing, scumbling, and impasto techniques',
      'Direct feedback sessions with exhibition artists'
    ],
    syllabus: [
      { week: 1, title: 'Introduction & Canvas Preparation', content: 'Understanding support mediums, stretching canvases, and applying customized primers.' },
      { week: 2, title: 'Value Studies & Underpainting', content: 'Working with monochromatic underpaintings to establish shadows, midtones, and highlights.' },
      { week: 3, title: 'Color Theory & The Palette', content: 'Exploring limited palettes (Zorn palette) and master color mixing.' },
      { week: 4, title: 'Still Life Study', content: 'Composing and rendering reflective surfaces, fabrics, and natural elements.' }
    ]
  },
  {
    id: 'course-2',
    title: 'Digital Illustration & Concept Art',
    slug: 'digital-illustration-concept-art',
    description: 'Build immersive worlds and characters using industry-standard tools and professional design pipelines.',
    longDescription: 'Kickstart your career in the entertainment industry. This course covers everything from digital brush customization, speedpainting, cinematic composition, and color keys, to detailed character model sheets and environment design. You will build a industry-ready professional portfolio.',
    category: 'Digital Art',
    level: 'Intermediate',
    duration: '8 Weeks',
    lessonsCount: 24,
    rating: 4.8,
    reviewsCount: 232,
    price: 650,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    instructor: INSTRUCTORS[1],
    highlights: [
      'Build custom brushes and speedpainting templates',
      'Learn atmospheric perspective and cinematic lighting',
      'Develop photobashing and 3D paint-over workflows',
      'Access to a private discord for industry networking'
    ],
    syllabus: [
      { week: 1, title: 'Digital Tools & Setup', content: 'Optimizing software workspaces, custom brushes, and graphic tablet calibration.' },
      { week: 2, title: 'Composition & Thumbnailing', content: 'Quickly sketching cinematic layouts and dramatic perspectives.' },
      { week: 3, title: 'Lighting & Materials', content: 'Rendering metal, glass, skin, and organic substances digitally.' },
      { week: 4, title: 'Final Character Design', content: 'Polishing a character concept sheet with multi-angle orthographics.' }
    ]
  },
  {
    id: 'course-3',
    title: 'Clay Sculpting & Ceramic Anatomy',
    slug: 'clay-sculpting-ceramic-anatomy',
    description: 'Understand the human form in three dimensions, mastering skeletal structure and muscle rendering in clay.',
    longDescription: 'Explore the tactility of form. This course bridges the gap between anatomy study and clay modeling. You will learn proportion calculation, wire armature building, clay handling, and baking or firing processes, all while sculpting expressive portraiture and full figures.',
    category: 'Sculpture',
    level: 'Intermediate',
    duration: '10 Weeks',
    lessonsCount: 30,
    rating: 4.9,
    reviewsCount: 96,
    price: 750,
    image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=800&auto=format&fit=crop',
    instructor: INSTRUCTORS[2],
    highlights: [
      'Build sturdy wire and wood armatures',
      'Detailed study of facial anatomy and muscular system',
      'Practice subtractive and additive modeling styles',
      'Gain firing, glazing, and texturing studio skills'
    ],
    syllabus: [
      { week: 1, title: 'Armatures & Clay Fundamentals', content: 'Constructing robust wire supports and conditioning raw sculpting clay.' },
      { week: 2, title: 'The Skull & Proportions', content: 'Sculpting the skull model to understand key anatomical landmarks.' },
      { week: 3, title: 'Expressive Features', content: 'Capturing realistic eyes, nose, mouth, and ear details in clay.' },
      { week: 4, title: 'Full Figure Anatomy', content: 'Understanding balance, contrapposto, and dynamic torso sculpting.' }
    ]
  },
  {
    id: 'course-4',
    title: 'Modern Watercolor & Mixed Media',
    slug: 'modern-watercolor-mixed-media',
    description: 'Explore the fluid transparency of watercolor mixed with ink, charcoal, and modern acrylic markers.',
    longDescription: 'Unleash your creativity by combining watercolor with multiple textures. This course teaches water control, wash types, masking techniques, and blending traditional pigments with metallic inks and charcoal. Perfect for designers, illustrators, and fine artists looking to break boundaries.',
    category: 'Fine Arts',
    level: 'Beginner',
    duration: '6 Weeks',
    lessonsCount: 18,
    rating: 4.7,
    reviewsCount: 180,
    price: 420,
    image: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?q=80&w=800&auto=format&fit=crop',
    instructor: INSTRUCTORS[0],
    highlights: [
      'Master wet-on-wet and wet-on-dry wash application',
      'Combine watercolor with ink wash and pastels',
      'Learn how to correct and lift watercolor layers',
      'Create high-resolution digital scans of raw art'
    ],
    syllabus: [
      { week: 1, title: 'Water Control & Materials', content: 'Exploring paper weights, brush styles, and the pigment-to-water ratio.' },
      { week: 2, title: 'Color Bleeding & Layering', content: 'Creating smooth gradients, blending colors, and layering washes.' },
      { week: 3, title: 'Texture & Masking', content: 'Using salt, masking fluids, and rubbing alcohol for experimental textures.' },
      { week: 4, title: 'Mixed Media Integration', content: 'Adding fine liners, gold foil, and acrylic markers on dry watercolor.' }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Whispering Willow',
    artist: 'Amelie Laurent',
    category: 'Oil Painting',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop',
    description: 'An exploration of soft afternoon light filtering through weeping willows in early spring.',
    date: '2026-03-12'
  },
  {
    id: 'gal-2',
    title: 'Neon Nomad',
    artist: 'Zack Peterson',
    category: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    description: 'Concept art depicting a futuristic traveler traversing neon-drenched cityscape ruins.',
    date: '2026-04-18'
  },
  {
    id: 'gal-3',
    title: 'Silent Contemplation',
    artist: 'Sophia Moreno',
    category: 'Sculpture',
    image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=800&auto=format&fit=crop',
    description: 'A study of body gesture and weight distribution in classical terracotta clay.',
    date: '2026-01-20'
  },
  {
    id: 'gal-4',
    title: 'Fleeting Memories',
    artist: 'Hana Kimura',
    category: 'Watercolor',
    image: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?q=80&w=800&auto=format&fit=crop',
    description: 'A delicate landscape wash demonstrating advanced pigment bleeding and negative space.',
    date: '2026-05-02'
  },
  {
    id: 'gal-5',
    title: 'Gilded Reverie',
    artist: 'Elena Rostova',
    category: 'Oil Painting',
    image: 'https://images.unsplash.com/photo-1576016770956-debb63d900bb?q=80&w=800&auto=format&fit=crop',
    description: 'A master study combining classical portrait glazing with contemporary gold leaf overlay.',
    date: '2025-11-15'
  },
  {
    id: 'gal-6',
    title: 'Cybernetic Echoes',
    artist: 'Marcus Vance',
    category: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop',
    description: 'Abstract digital sculpture showcasing intricate mechanical anatomy and subsurface scattering.',
    date: '2026-02-28'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Oliver Thorne',
    role: 'Professional Concept Artist',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
    content: 'The digital illustration course here completely reshaped my workflow. Marcus taught me concept pipelines that saved me hours of rendering. I landed a job at a game studio just three weeks after graduating!',
    rating: 5,
    courseName: 'Digital Illustration & Concept Art'
  },
  {
    id: 'test-2',
    name: 'Isabella Vane',
    role: 'Exhibiting Painter',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    content: 'Elena Rostova is a treasure. Her guidance in glazing and oil layering demystified classical fine art. The academy environment is inspiring, collaborative, and beautiful.',
    rating: 5,
    courseName: 'Masterclass in Classical Oil Painting'
  },
  {
    id: 'test-3',
    name: 'Daniel Kim',
    role: 'Hobbyist Sculptor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    content: 'As a beginner to sculpture, I was nervous about proportions. Sarah makes anatomy incredibly approachable. Working with clay by hand is therapeutic, and I love the studio spaces.',
    rating: 5,
    courseName: 'Clay Sculpting & Ceramic Anatomy'
  }
];

export const ACHIEVEMENTS = [
  { id: 'ach-1', title: 'Top Art School 2025', desc: 'Ranked globally for interactive learning and traditional fine arts.', icon: 'Award' },
  { id: 'ach-2', title: '12k+ Global Alumni', desc: 'Empowering students across 80+ countries to pursue art professionally.', icon: 'Users' },
  { id: 'ach-3', title: '98% Graduate Success', desc: 'Alumni working in major design firms, galleries, and film studios.', icon: 'CheckCircle' },
  { id: 'ach-4', title: 'Exhibition Opportunities', desc: 'We curate three annual student galleries attended by premium collectors.', icon: 'Palette' }
];

export const FAQS = [
  {
    question: 'Are the courses suitable for absolute beginners?',
    answer: 'Yes! We offer courses tailored for all skill levels. Modern Watercolor is ideal for beginners, while Classical Oil Painting and Concept Art require intermediate or advanced experience. Each course listing specifies the skill requirements.'
  },
  {
    question: 'Do you provide materials and tools, or do I bring my own?',
    answer: 'For in-person studio classes (Oil Painting and Sculpting), all raw materials, clay, canvas, and brushes are fully provided in our premium studios. For digital classes, students are expected to have a digital tablet and laptop, though studio hardware is available for rental.'
  },
  {
    question: 'Can I access the digital course content after completion?',
    answer: 'Absolutely. You retain lifetime access to all lecture videos, course materials, templates, brush packs, and the academy discord community after the term ends.'
  },
  {
    question: 'Is there portfolio reviews or job placement support?',
    answer: 'Yes, we provide one-on-one portfolio review sessions for all enrolled students. We host industry panels, guest lectures, and networking events where students meet design directors, game studios, and gallery curators.'
  }
];

export const WORKSHOPS = [
  {
    id: 'ws-1',
    title: 'Chiaroscuro: Contrast & Shadow',
    date: 'July 24, 2026',
    time: '2:00 PM - 6:00 PM',
    instructor: 'Elena Rostova',
    price: 'Free / Members',
    tag: 'Live Seminar'
  },
  {
    id: 'ws-2',
    title: 'Photobashing for Game Environments',
    date: 'August 12, 2026',
    time: '5:00 PM - 9:00 PM',
    instructor: 'Marcus Vance',
    price: '$45',
    tag: 'Hands-on Workshop'
  }
];

export const STATS = [
  { id: 'stat-1', value: 12000, label: 'Alumni Worldwide', suffix: '+' },
  { id: 'stat-2', value: 45, label: 'Master Instructors', suffix: '' },
  { id: 'stat-3', value: 98, label: 'Employment Rate', suffix: '%' },
  { id: 'stat-4', value: 3, label: 'Annual Exhibitions', suffix: '' }
];
