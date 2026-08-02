const fs = require("fs");
const path = require("path");

function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    const dirent = fs.statSync(dirFile);
    if (dirent.isDirectory()) {
      walk(dirFile, filelist);
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      filelist.push(dirFile);
    }
  }
  return filelist;
}

function kebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  const regex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];?/g;
  let changed = false;

  content = content.replace(regex, (match, importsStr) => {
    // Check if it's purely types
    if (importsStr.trim() === "type LucideIcon") {
      return match;
    }

    const imports = importsStr.split(",").map(i => i.trim()).filter(Boolean);
    const newImports = [];
    const remainingImports = [];

    for (const imp of imports) {
      if (imp === "type LucideIcon" || imp === "LucideIcon") {
        remainingImports.push(imp);
      } else {
        const kebabName = kebabCase(imp);
        newImports.push(`import ${imp} from "lucide-react/dist/esm/icons/${kebabName}";`);
        changed = true;
      }
    }

    let finalStr = newImports.join("\n");
    if (remainingImports.length > 0) {
      finalStr += `\nimport { ${remainingImports.join(", ")} } from "lucide-react";`;
    }
    return finalStr;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Updated ${filePath}`);
  }
}

const allFiles = walk(path.join(__dirname, "src"));
for (const file of allFiles) {
  fixFile(file);
}
