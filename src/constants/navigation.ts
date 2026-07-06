import { ROUTES } from './routes';

export const NAV_LINKS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'About', path: ROUTES.ABOUT },
  { label: 'Courses', path: ROUTES.COURSES },
  { label: 'Gallery', path: ROUTES.GALLERY },
  { label: 'Testimonials', path: ROUTES.TESTIMONIALS },
  { label: 'FAQ', path: ROUTES.FAQ },
  { label: 'Contact', path: ROUTES.CONTACT },
];

export const FOOTER_LINKS = {
  EXPLORE: [
    { label: 'All Courses', path: ROUTES.COURSES },
    { label: 'Student Gallery', path: ROUTES.GALLERY },
    { label: 'Alumni Testimonials', path: ROUTES.TESTIMONIALS },
    { label: 'Enroll Now', path: ROUTES.REGISTRATION },
  ],
  COMPANY: [
    { label: 'About Us', path: ROUTES.ABOUT },
    { label: 'FAQs', path: ROUTES.FAQ },
    { label: 'Contact Support', path: ROUTES.CONTACT },
  ],
  LEGAL: [
    { label: 'Terms of Service', path: '#' },
    { label: 'Privacy Policy', path: '#' },
    { label: 'Cookie Policy', path: '#' },
  ]
};
