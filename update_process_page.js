const fs = require('fs');
let content = fs.readFileSync('src/app/process/page.tsx', 'utf8');

// Replace 1
content = content.replace(
    'eyebrow="Workflow & Methodology"\r\n        title="A structured workflow built for clarity."\r\n        description="From digital menus to custom reservation platforms, our process guarantees clear steps, fixed timelines, and high-performance launches."\r\n        primaryCta={{ label: "Start Your Project", href: "/contact" }}\r\n        secondaryCta={{ label: "View Our Work", href: "/work" }}',
    'eyebrow="Onboarding & Setup"\n        title="A streamlined path to launching your platform."\n        description="From digital menus to custom AI receptionists, our setup guarantees clear steps, rapid timelines, and a high-performance system."\n        primaryCta={{ label: "View Pricing", href: "/pricing" }}\n        secondaryCta={{ label: "Contact MhStudio", href: "/contact" }}'
);
content = content.replace( // LF fallback
    'eyebrow="Workflow & Methodology"\n        title="A structured workflow built for clarity."\n        description="From digital menus to custom reservation platforms, our process guarantees clear steps, fixed timelines, and high-performance launches."\n        primaryCta={{ label: "Start Your Project", href: "/contact" }}\n        secondaryCta={{ label: "View Our Work", href: "/work" }}',
    'eyebrow="Onboarding & Setup"\n        title="A streamlined path to launching your platform."\n        description="From digital menus to custom AI receptionists, our setup guarantees clear steps, rapid timelines, and a high-performance system."\n        primaryCta={{ label: "View Pricing", href: "/pricing" }}\n        secondaryCta={{ label: "Contact MhStudio", href: "/contact" }}'
);

// Replace 2
content = content.replace(
    'eyebrow="The Core Process"\r\n            title="Six steps to launch."\r\n            description="Our step-by-step roadmap for building high-speed digital platforms."',
    'eyebrow="The Onboarding Process"\n            title="Six steps to launch."\n            description="Our straightforward roadmap to deploying your unified restaurant platform."'
);
content = content.replace(
    'eyebrow="The Core Process"\n            title="Six steps to launch."\n            description="Our step-by-step roadmap for building high-speed digital platforms."',
    'eyebrow="The Onboarding Process"\n            title="Six steps to launch."\n            description="Our straightforward roadmap to deploying your unified restaurant platform."'
);

// Replace 3
content = content.replace(
    'eyebrow="Development Paths"\r\n            title="Tailored development paths."\r\n            description="We customize our workflow to match your exact goals and business size."',
    'eyebrow="Deployment Paths"\n            title="Tailored deployment paths."\n            description="We customize our setup to match the exact package you choose and your business size."'
);
content = content.replace(
    'eyebrow="Development Paths"\n            title="Tailored development paths."\n            description="We customize our workflow to match your exact goals and business size."',
    'eyebrow="Deployment Paths"\n            title="Tailored deployment paths."\n            description="We customize our setup to match the exact package you choose and your business size."'
);

// Replace 4
content = content.replace(
    'Let\\'s Build It\r\n              </h2>\r\n              <p className="text-base leading-[1.7] text-foreground-body sm:text-lg">\r\n                Whether launching your first site, building a custom web application, or integrating AI assistants, our structured process ensures a fast, transparent path to growth.',
    'Ready to Launch?\n              </h2>\n              <p className="text-base leading-[1.7] text-foreground-body sm:text-lg">\n                Whether deploying a basic digital menu, a native ordering system, or an advanced AI receptionist, our clear setup process guarantees a fast, transparent path to scaling your restaurant.'
);
content = content.replace(
    'Let\\'s Build It\n              </h2>\n              <p className="text-base leading-[1.7] text-foreground-body sm:text-lg">\n                Whether launching your first site, building a custom web application, or integrating AI assistants, our structured process ensures a fast, transparent path to growth.',
    'Ready to Launch?\n              </h2>\n              <p className="text-base leading-[1.7] text-foreground-body sm:text-lg">\n                Whether deploying a basic digital menu, a native ordering system, or an advanced AI receptionist, our clear setup process guarantees a fast, transparent path to scaling your restaurant.'
);

fs.writeFileSync('src/app/process/page.tsx', content);
console.log("Updated page.tsx text");
