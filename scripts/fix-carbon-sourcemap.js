const fs = require("fs");
const path = require("path");

const root = path.resolve(
  __dirname,
  "..",
  "node_modules",
  "carbon-components",
  "css",
);
const files = ["carbon-components.min.css", "carbon-components.css"];
const sourceMapCommentRE = /\/\*# sourceMappingURL=.*\*\//g;

let fixed = false;

for (const fileName of files) {
  const filePath = path.join(root, fileName);

  if (!fs.existsSync(filePath)) {
    console.warn(
      `Warning: ${fileName} not found in carbon-components package.`,
    );
    continue;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const updatedContents = fileContents.replace(sourceMapCommentRE, "");

  if (updatedContents !== fileContents) {
    fs.writeFileSync(filePath, updatedContents, "utf8");
    console.log(`Removed sourceMappingURL comment from ${fileName}`);
    fixed = true;
  }
}

if (!fixed) {
  console.log(
    "No sourceMappingURL comments found in carbon-components CSS files.",
  );
}
