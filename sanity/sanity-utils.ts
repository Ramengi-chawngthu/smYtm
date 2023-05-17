import {createClient, groq} from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION 


async function getAllPosts(){
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  })
  
  return await client.fetch(groq`*[_type == 'post'] | order(_createdAt desc) {
    _createdAt, _id, author, title, slug 
 }`);
}

async function getPostById(id:string){

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  })

  return await client.fetch(groq`*[_type == 'post' && _id == '${id}'] | order(_createdAt desc) {
    _createdAt, souls, author, title, slug, nationName, teams, nationNews, mainImage, prayerPoints
}`)};



export {getAllPosts, getPostById};