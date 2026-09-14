const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src', 'app', 'services');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already has ArrowLeft
  if (content.includes('ArrowLeft')) {
    console.log(`Skipping ${filePath} (already has ArrowLeft)`);
    return;
  }

  // 1. Add import for ArrowLeft
  content = content.replace(
    /import Link from "next\/link";/,
    'import Link from "next/link";\nimport ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";'
  );

  // 2. Add the Back to Services link inside the Reveal in the HERO SECTION
  // The structure usually looks like:
  // <Reveal className="flex flex-col">
  //   <span className="mb-4 inline-block text-sm font-semibold tracking-wider text-amber-500 uppercase">
  
  content = content.replace(
    /(<Reveal className="flex flex-col(?:[^"]*)">)\s*(<span)/,
    `$1
            <Link href="/services" className="mb-8 inline-flex w-fit items-center text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            $2`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${filePath}`);
}

const entries = fs.readdirSync(servicesDir, { withFileTypes: true });

for (const entry of entries) {
  if (entry.isDirectory()) {
    const pagePath = path.join(servicesDir, entry.name, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      processFile(pagePath);
    }
  }
}
