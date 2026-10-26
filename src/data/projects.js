// Add a project by adding an object. Leave github/live/screenshot as '' to hide them.
// Screenshots go in public/images/ and are referenced like '/images/sortnova.png'.
export const projects = [
  {
    title: 'Doctor Appointment Booking Application',
    description: 'A full-stack doctor appointment booking platform supporting patients, doctors, and administrators.',
    screenshot: '/images/prescripto.jpg',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Three user roles: Patient, Doctor, and Admin.',
      'Role-based access control.',
      'Appointment booking and scheduling.',
      'Appointment status tracking.',
      'Responsive interface.',
    ],
    github: '',
    live: '',
    featured: true,
  },
  {
    title: 'SortNova: Sorting Algorithm Visualizer',
    description: 'An interactive sorting algorithm visualizer designed to make learning algorithms intuitive and engaging.',
    screenshot: '/images/sort.jpg',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Bubble Sort visualization.',
      'Merge Sort visualization.',
      'Quick Sort visualization.',
      'Dynamic array size up to 200 elements.',
      'Adjustable animation speed.',
      'Real-time sorting animations.',
    ],
    github: '',
    live: '',
    featured: true,
  },
]
