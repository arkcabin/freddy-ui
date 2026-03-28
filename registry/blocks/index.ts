import type { RegistryItem } from "shadcn/schema";

// Extend RegistryItem to support 'tier' and custom metadata
type FreddyRegistryItem = RegistryItem & { 
  tier?: "free" | "pro";
  meta?: RegistryItem["meta"] & {
    activeForDays?: number;
    createdAt?: string;
  };
};

export const blocks: FreddyRegistryItem[] = [
  {
    name: "auth-1",
    type: "registry:block",
    description:
      "Modern auth page with particle background and social login buttons.",
    registryDependencies: ["button", "https://magicui.design/r/particles.json"],
    files: [
      {
        path: "blocks/auth/1/auth-page.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["auth"],
  },
  {
    name: "auth-2",
    type: "registry:block",
    description:
      "Modern auth page with testimonial sidebar, social logins, and email signup.",
    registryDependencies: ["button", "input-group"],
    dependencies: ["motion"],
    files: [
      {
        path: "blocks/auth/2/auth-page.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/auth/2/floating-paths.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["auth"],
  },
  {
    name: "announcement-1",
    type: "registry:block",
    description: "Animated announcement bar with call-to-action and close button.",
    dependencies: ["motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/announcement/1/announcement.tsx",
        type: "registry:component",
      },
    ],
    categories: ["announcement"],
    meta: {
            height: "50vh",

      isPinned: true,
      createdAt: "2024-03-27",
    },
  },
  {
    name: "announcement-2",
    type: "registry:block",
    description: "High-fidelity Freddy UI header with integrated scrolling marquee announcement bar.",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/announcement/2/marquee-header.tsx",
        type: "registry:component",
      },
    ],
    categories: ["announcement","header"],
    meta: {
            height: "50vh",

      isPinned: true,
      createdAt: "2026-03-28",
    },
  },
  {
    name: "announcement-3",
    type: "registry:block",
    description: "Minimalist, technical Daytona-style header with top bar and GitHub stats.",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/announcement/3/daytona-header.tsx",
        type: "registry:component",
      },
    ],
    categories: ["announcement", "header"],
    meta: {
      height: "50vh",
      isPinned: true,
      createdAt: "2026-03-28",
    },
  },
  {
    name: "announcement-4",
    type: "registry:block",
    description: "Ultra-dark, minimalist AI-Work style header with pill navigation and status bar.",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/announcement/4/page.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/announcement/4/announcement.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/announcement/4/header.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/announcement/4/hero.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/announcement/4/wrapper.tsx",
        type: "registry:component",
      },
    ],
    categories: ["announcement", "header"],
    tier: "pro",
    meta: {
      height: "80vh",
      isPinned: true,
      createdAt: "2026-03-28",
      activeForDays: 120,
    },
  },
  {
    name: "contact-1",
    type: "registry:block",
    description:
      "Elegant contact page with office info, email, phone, and social links.",
    files: [
      {
        path: "blocks/contact/1/contact.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
  },
  {
    name: "contact-2",
    type: "registry:block",
    description:
      "Modern contact card with info section and built-in form area.",
    files: [
      {
        path: "blocks/contact/2/contact-card.tsx",
        type: "registry:component",
      },
    ],
    categories: ["contact"],
    meta: {
      height: "60vh",
    },
  },
  {
    name: "cta-1",
    type: "registry:block",
    description:
      "Centered call-to-action bar with bold heading and dual action buttons.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/cta/1/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta: {
      height: "40vh",
    },
  },
  {
    name: "cta-2",
    type: "registry:block",
    description:
      "Minimal call-to-action section with headline, short description, and dual buttons for sales contact and getting started.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/cta/2/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta: {
      height: "40vh",
    },
  },
  {
    name: "cta-3",
    type: "registry:block",
    description:
      "Stylish call-to-action block featuring bordered layout, decorative icons, and clear buttons for contacting sales or getting started.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/cta/3/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta: {
      height: "40vh",
    },
  },
  {
    name: "cta-4",
    type: "registry:block",
    description:
      "Modern call-to-action card with rounded edges, subtle shadow, and dual buttons for contacting sales or getting started.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/cta/4/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta: {
      height: "40vh",
    },
  },
  {
    name: "cta-5",
    type: "registry:block",
    description:
      "Newsletter subscription section with email input, submit button, and expert avatars for added trust and engagement.",
    registryDependencies: ["button", "input-group"],
    files: [
      {
        path: "blocks/cta/5/cta.tsx",
        type: "registry:component",
      },
    ],
    categories: ["cta"],
    meta: {
      height: "40vh",
    },
  },
  {
    name: "feature-1",
    type: "registry:block",
    description:
      "Minimal feature card with icon, title, and subtle grid background.",
    registryDependencies: ["https://magicui.design/r/grid-pattern.json"],
    dependencies: ["motion"],
    files: [
      {
        path: "blocks/feature/1/feature-card.tsx",
        type: "registry:component",
      },
    ],
    categories: ["feature"],
    meta: {
      height: "80vh",
    },
  },
  {
    name: "faqs-1",
    type: "registry:block",
    description:
      "Elegant FAQ section with accordion-style questions, smooth transitions, and clear support call-to-action.",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "blocks/faqs/1/faqs-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faqs"],
  },
  {
    name: "faqs-2",
    type: "registry:block",
    description:
      "Split-screen FAQ layout with bordered sections, interactive accordion, and a clean call-to-action footer.",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "blocks/faqs/2/faqs-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faqs"],
  },
  {
    name: "faqs-3",
    type: "registry:block",
    description:
      "Two-column FAQ section featuring bordered layout, vertical guide line, and elegant accordion interactions.",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "blocks/faqs/3/faqs-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faqs"],
  },
  {
    name: "faqs-4",
    type: "registry:block",
    description:
      "Multi-category FAQ section with sidebar filters, adaptive accordion layout, and elegant interactive transitions.",
    registryDependencies: ["accordion", "button"],
    files: [
      {
        path: "blocks/faqs/4/faqs-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faqs"],
  },
  {
    name: "faqs-5",
    type: "registry:block",
    description:
      "Responsive FAQ section with filters, search, and accordions for quick answers.",
    registryDependencies: ["accordion", "button", "input-group", "empty"],
    files: [
      {
        path: "blocks/faqs/5/faqs-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["faqs"],
  },
  {
    name: "footer-1",
    type: "registry:block",
    description:
      "Clean footer with company links, resources, and social icons.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/footer/1/footer.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      height: "40vh",
    },
  },
  {
    name: "footer-2",
    type: "registry:block",
    description:
      "Animated footer with link sections, brand logo, and social icons.",
    dependencies: ["motion"],
    files: [
      {
        path: "blocks/footer/2/footer.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      height: "50vh",
    },
  },
  {
    name: "footer-3",
    type: "registry:block",
    description:
      "Grid-based footer with social cards, link groups, and copyright bar.",
    files: [
      {
        path: "blocks/footer/3/footer.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      height: "50vh",
    },
  },
  {
    name: "footer-4",
    type: "registry:block",
    description:
      "Multi-column footer with app store buttons, social icons, and link groups.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/footer/4/footer.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
    meta: {
      height: "70vh",
    },
  },
  {
    name: "footer-5",
    type: "registry:block",
    description:
      "Sticky layered footer with gradient background, social icons, and animated link groups.",
    dependencies: ["motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/footer/5/sticky-footer.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["footer"],
  },
  {
    name: "form-1",
    type: "registry:block",
    description:
      "Elegant workspace creation form with labeled inputs, grouped fields, and a clean card layout for onboarding users smoothly.",
    registryDependencies: [
      "button",
      "button-group",
      "field",
      "input",
      "input-group",
      "label",
    ],
    files: [
      {
        path: "blocks/form/1/create-workspace-form.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["form"],
    meta: {
      height: "80vh",
    },
  },
  {
    name: "form-2",
    type: "registry:block",
    description:
      "Project submission form featuring bordered layout, plus-icon corners, and detailed input fields for name, repository, and description.",
    registryDependencies: [
      "button",
      "field",
      "input",
      "input-group",
      "textarea",
    ],
    files: [
      {
        path: "blocks/form/2/submit-project-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["form"],
  },
  {
    name: "form-3",
    type: "registry:block",
    description:
      "Comprehensive account settings form with structured fields for name, email, password, and phone number, featuring icons, grouped inputs, and save actions.",
    registryDependencies: [
      "button",
      "button-group",
      "field",
      "input",
      "input-group",
    ],
    files: [
      {
        path: "blocks/form/3/settings-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["form"],
  },
  {
    name: "auth-3",
    type: "registry:block",
    description: "Premium login form with high-contrast design, social login, and branded elements.",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/auth/3/login-form.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["auth"],
  },
  {
    name: "auth-4",
    type: "registry:block",
    description: "Premium signup form with side-by-side name fields, high-contrast design, and social login.",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/auth/4/signup-form.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["auth"],
  },
  {
    name: "auth-5",
    type: "registry:block",
    description: "A premium reset password form with branded ornaments.",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/auth/5/reset-password-form.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["auth"],
  },
  {
    name: "auth-6",
    type: "registry:block",
    description: "A clean forgot password form with instructions.",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/auth/6/forgot-password-form.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["auth"],
  },
  {
    name: "auth-7",
    type: "registry:block",
    description: "A check email status block with illustrative icon.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/auth/7/check-email-block.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["auth"],
  },
  {
    name: "auth-8",
    type: "registry:block",
    description: "A minimalist, floating login form variant.",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/auth/8/minimal-login-form.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["auth"],
  },
  {
    name: "auth-9",
    type: "registry:block",
    description: "A compact, modern signup form variant.",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/auth/9/compact-signup-form.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
    ],
    categories: ["auth"],
  },
  {
    name: "auth-10",
    type: "registry:block",
    description: "Modern split layout sign-up form with social authentication options.",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/auth/10/signup-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["auth"],
    meta: {
      height: "800px",
      isPinned: true,
      createdAt: "2024-03-27",
    },
  },
  {
    name: "auth-11",
    type: "registry:block",
    description: "Multi-input OTP/Magic Link verification form.",
    registryDependencies: ["button", "input"],
    files: [
      {
        path: "blocks/auth/11/otp-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["auth"],
    meta: {
      height: "800px",
      isPinned: true,
      createdAt: "2024-03-26",
    },
  },
  {
    name: "auth-12",
    type: "registry:block",
    description: "Multi-step split layout onboarding form.",
    registryDependencies: ["button", "input", "label"],
    files: [
      {
        path: "blocks/auth/12/onboarding-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["auth"],
    meta: {
      height: "800px",
      isPinned: true,
      createdAt: "2024-03-27",
    },
  },
  {
    name: "header-1",
    type: "registry:block",
    description:
      "Responsive sticky header with scroll blur effect, animated mobile menu, and adaptive navigation links.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/header/1/header.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/menu-toggle-icon.tsx",
        type: "registry:component",
      },
      {
        path: "@/hooks/use-scroll.ts",
        type: "registry:hook",
      },
    ],
    categories: ["header"],
    meta: {
      height: "50vh",
      isPinned: true,
      createdAt: "2024-03-28",
    },
  },
  {
    name: "header-2",
    type: "registry:block",
    description:
      "Elegant responsive header with scroll-based styling, mobile drawer menu, and smooth transitions.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/header/2/header.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/menu-toggle-icon.tsx",
        type: "registry:component",
      },
      {
        path: "@/hooks/use-scroll.ts",
        type: "registry:hook",
      },
    ],
    categories: ["header"],
    meta: {
      height: "50vh",
    },
  },
  {
    name: "header-3",
    type: "registry:block",
    description:
      "Feature-rich responsive header with scroll blur, animated mobile drawer, and nested navigation menus.",
    registryDependencies: ["button", "navigation-menu"],
    files: [
      {
        path: "blocks/header/3/header.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/logo.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/menu-toggle-icon.tsx",
        type: "registry:component",
      },
      {
        path: "@/hooks/use-scroll.ts",
        type: "registry:hook",
      },
    ],
    categories: ["header"],
    meta: {
      height: "60vh",
    },
  },
  {
    name: "header-4",
    type: "registry:block",
    description:
      "Premium mega menu header with card-style items, vibrant gradients, and smooth motion animations.",
    dependencies: ["motion"],
    registryDependencies: ["button", "navigation-menu"],
    files: [
      {
        path: "blocks/header/4/header.tsx",
        type: "registry:component",
      },
      {
        path: "@/hooks/use-scroll.ts",
        type: "registry:hook",
      },
    ],
    categories: ["header"],
    meta: {
      height: "400px",
      isPinned: true,
      createdAt: "2024-03-25",
    },
  },
  {
    name: "header-5",
    type: "registry:block",
    description:
      "Premium header with a 'Blocks' registry modal featuring a dual-panel layout and category grid.",
    dependencies: ["motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/header/5/header.tsx",
        type: "registry:component",
      },
      {
        path: "@/hooks/use-scroll.ts",
        type: "registry:hook",
      },
    ],
    categories: ["header"],
    meta: {
      height: "80vh",
      pinnedUntil: "2026-04-15T00:00:00Z",
    },
  },
  {
    name: "image-gallery-1",
    type: "registry:block",
    description:
      "Masonry-style responsive gallery using random images with dynamic aspect ratios.",
    dependencies: ["motion"],
    registryDependencies: ["aspect-ratio"],
    files: [
      {
        path: "blocks/image-gallery/1/image-gallery.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/image-gallery/1/lazy-image.tsx",
        type: "registry:component",
      },
    ],
    categories: ["image-gallery"],
  },
  {
    name: "logo-cloud-1",
    type: "registry:block",
    description:
      "Simple logo grid displaying brand icons in a clean, bordered layout with light and dark mode support.",
    files: [
      {
        path: "blocks/logo-cloud/1/logo-cloud.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logo-cloud"],
    meta: {
      height: "50vh",
    },
  },
  {
    name: "logo-cloud-2",
    type: "registry:block",
    description:
      "Stylish logo grid featuring top tech brands with decorative plus icons and dynamic borders for a modern visual layout.",
    files: [
      {
        path: "blocks/logo-cloud/2/logo-cloud.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logo-cloud"],
    meta: {
      height: "50vh",
    },
  },
  {
    name: "logo-cloud-3",
    type: "registry:block",
    description:
      "Smooth infinite-scrolling logo showcase highlighting trusted brands with gradient masking and elegant motion effects.",
    registryDependencies: [
      "https://motion-primitives.com/c/infinite-slider.json",
    ],
    files: [
      {
        path: "blocks/logo-cloud/3/logo-cloud.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logo-cloud"],
    meta: {
      height: "50vh",
    },
  },
  {
    name: "logo-cloud-4",
    type: "registry:block",
    description:
      "Animated logo carousel with soft edge blurs and gradient accents for a sleek, modern brand showcase.",
    registryDependencies: [
      "https://motion-primitives.com/c/infinite-slider.json",
      "https://motion-primitives.com/c/progressive-blur.json",
    ],
    files: [
      {
        path: "blocks/logo-cloud/4/logo-cloud.tsx",
        type: "registry:component",
      },
    ],
    categories: ["logo-cloud"],
    meta: {
      height: "40vh",
    },
  },
  {
    name: "not-found-1",
    type: "registry:block",
    description:
      "Minimal 404 error page with bold typography, subtle borders, and clear navigation actions.",
    registryDependencies: ["button", "empty"],
    files: [
      {
        path: "blocks/not-found/1/not-found.tsx",
        type: "registry:component",
      },
    ],
    categories: ["not-found"],
  },
  {
    name: "not-found-2",
    type: "registry:block",
    description:
      "Animated 404 page with floating gradient orbs, soft motion effects, and clean centered layout.",
    registryDependencies: ["button", "empty"],
    dependencies: ["motion"],
    files: [
      {
        path: "blocks/not-found/2/not-found.tsx",
        type: "registry:component",
      },
    ],
    categories: ["not-found"],
  },
  {
    name: "pricing-1",
    type: "registry:block",
    description:
      "Responsive pricing section with frequency toggle, tooltips, and highlightable plans.",
    dependencies: ["motion"],
    registryDependencies: ["button", "tooltip"],
    files: [
      {
        path: "blocks/pricing/1/pricing-section.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/pricing/1/frequency-toggle.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
  },
  {
    name: "pricing-2",
    type: "registry:block",
    description:
      "Modular pricing card UI kit with reusable glass-style components and typography helpers.",
    files: [
      {
        path: "@/components/pricing-card.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    meta: {
      height: "80vh",
    },
  },
  {
    name: "pricing-3",
    type: "registry:block",
    description:
      "Three-tier pricing grid with interactive plan cards, badges, and feature lists.",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/pricing/3/pricing-section.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/pricing-card.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
  },
  {
    name: "pricing-4",
    type: "registry:block",
    description:
      "Animated dual pricing cards with motion effects, discount badges, and trust indicator.",
    dependencies: ["motion"],
    registryDependencies: ["button", "badge"],
    files: [
      {
        path: "blocks/pricing/4/pricing-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["pricing"],
    meta: {
      height: "70vh",
    },
  },
  {
    name: "testimonials-1",
    type: "registry:block",
    description:
      "Infinite vertical testimonial scroller with smooth motion and repeated card animation.",
    dependencies: ["motion"],
    files: [
      {
        path: "blocks/testimonials/1/testimonials-columns.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
  },
  {
    name: "testimonials-2",
    type: "registry:block",
    description:
      "Responsive testimonial grid with smooth motion reveal, subtle gradients, and elegant card design.",
    dependencies: ["motion"],
    registryDependencies: ["https://magicui.design/r/grid-pattern.json"],
    files: [
      {
        path: "blocks/testimonials/2/testimonials-section.tsx",
        type: "registry:component",
      },
    ],
    categories: ["testimonials"],
  },
];
