export default {
    name: 'post',
    type: 'document',
    title: 'post',
    fields: [
      {
        name: 'author',
        title: 'Name',
        type: 'string',
        description: 'Write your name',
        validation: (Rule: any) =>
          Rule.required().max(30).min(4).warning(`Name cannot be less than 4 characters or exceed 20 characters`),
      },
      {
          name: 'slug',
          title: 'Description',
          type: 'string',
          description: 'Write a short summary of the news you are going to share',
          validation: (Rule: any) =>
            Rule.required().max(30).min(4).warning(`Title cannot be less than 4 characters or exceed 30 characters`),
        },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Main title. Make it concise',
        validation: (Rule: any) =>
          Rule.required().max(30).min(4).warning(`Title cannot be less than 4 characters or exceed 30 characters`),
      },
      {
        name: 'nationName',
        title: 'Name of Nation',
        type: 'string',
        description: 'Name of the nation you want to write about',
        validation: (Rule: any) =>
          Rule.required().max(20).min(1).warning(`Name of nation cannot be blank or exceed 30 characters`),
      },
      {
        name: 'nationNews',
        title: 'News about nation',
        type: 'text',
        description: 'Any news about the nation.',
        validation: (Rule: any) =>
          Rule.required().warning(`Name of nation cannot be blank`),
      },
      {
        name: 'souls',
        title: 'Share about souls',
        type: 'text',
        description: 'Share about the souls you met. Can be blank',
      },
      {
        name: 'teams',
        title: 'Share about your teams',
        type: 'text',
        description: 'Write about your team news. Can be blank',
      },
      {
        name: 'prayerPoints',
        title: 'Prayer Points',
        type: 'array',
        description: 'Write about your team news. Can be blank',
        of: [{type: 'string'}],
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        description: 'You can share one image. Can be blank',
      },
    ],
  }
  
  