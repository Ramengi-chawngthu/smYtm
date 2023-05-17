import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import {schemaTypes} from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const config = defineConfig({
  name: 'smytm',
  title: 'smytm',
  basePath: '/admin',
  projectId,
  dataset,
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  }
});

export default config;