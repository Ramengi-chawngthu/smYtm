import { groq } from 'next-sanity';
import client from './sanity-client';
import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

async function getAllPosts() {
  return await client.fetch(groq`*[_type == 'post'] | order(_createdAt desc) {
    _createdAt, _id, author, title, slug 
 }`);
}

async function getPostById(id: string) {
  return await client.fetch(groq`*[_type == 'post' && _id == '${id}'] | order(_createdAt desc) {
    _createdAt, souls, author, title, slug, nationName, teams, nationNews, mainImage, prayerPoints
}`);
}

function urlForImage(source: Image) {
  const imageBuilder = createImageUrlBuilder(client);
  return imageBuilder.image(source).auto('format').fit('max');
}

export { getAllPosts, getPostById, urlForImage };
