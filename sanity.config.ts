import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const projectId = process.env.SANITY_PROJECT_ID!;
const dataset = process.env.SANITY_DATASET!;

const config = defineConfig({
  name: 'smytm',
  title: 'smytm',
  basePath: '/admin',
  projectId,
  dataset,
  plugins: [deskTool()],
});
