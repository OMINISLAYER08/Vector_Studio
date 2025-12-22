const fs = require('fs');
const path = require('path');

const basePortfolioPath = path.join(__dirname, 'public', 'portfolio', 'PORTIFÓLIO STOCKS');
const outputManifestsPath = path.join(__dirname, 'src', 'data', 'portfolio'); // New output path
const categories = ['LOGOTIPOS', 'SITES', 'CAMISAS'];

async function generateManifests() {
  // Ensure the base output directory for manifests exists
  if (!fs.existsSync(outputManifestsPath)) {
    await fs.promises.mkdir(outputManifestsPath, { recursive: true });
  }

  for (const category of categories) {
    const categoryPath = path.join(basePortfolioPath, category);
    const outputCategoryManifestPath = path.join(outputManifestsPath, category);
    const manifest = [];

    // Ensure the output category directory for manifests exists
    if (!fs.existsSync(outputCategoryManifestPath)) {
      await fs.promises.mkdir(outputCategoryManifestPath, { recursive: true });
    }

    // Ensure source category directory exists
    if (!fs.existsSync(categoryPath)) {
      console.warn(`Source category directory not found: ${categoryPath}. Skipping manifest generation for ${category}.`);
      // If source category doesn't exist, create an empty manifest to avoid import errors
      const emptyManifestFilePath = path.join(outputCategoryManifestPath, 'manifest.json');
      await fs.promises.writeFile(emptyManifestFilePath, JSON.stringify([], null, 2));
      console.log(`Generated empty manifest for ${category}: ${emptyManifestFilePath}`);
      continue;
    }

    const files = await fs.promises.readdir(categoryPath, { withFileTypes: true });

    const imageFiles = files
      .filter(dirent => dirent.isFile() && /\.(jpg|jpeg|png|gif|webp)$/i.test(dirent.name))
      .map(dirent => dirent.name);

    for (const imageFile of imageFiles) {
      const baseName = imageFile.replace(/\.[^/.]+$/, "").replace(/\.[^/.]+$/, ""); // Strip all extensions
      const descriptionFilePath = path.join(categoryPath, `${baseName}.txt`);
      const imageUrl = `/portfolio/PORTIFÓLIO STOCKS/${category}/${imageFile}`; // Image URL still points to public folder
      let description = baseName; // Default description

      if (fs.existsSync(descriptionFilePath)) {
        description = (await fs.promises.readFile(descriptionFilePath, 'utf-8')).trim();
      }

      manifest.push({
        id: baseName, // Use baseName as a simple ID
        imageUrl,
        description,
      });
    }

    const manifestFilePath = path.join(outputCategoryManifestPath, 'manifest.json');
    await fs.promises.writeFile(manifestFilePath, JSON.stringify(manifest, null, 2));
    console.log(`Generated manifest for ${category}: ${manifestFilePath}`);
  }
}

generateManifests().catch(console.error);
