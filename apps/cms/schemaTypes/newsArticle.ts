import {defineField, defineType} from 'sanity'

export const newsArticleType = defineType({
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      content: 'content'
    },
    prepare(selection) {
      const {title, publishedAt, content} = selection
      const formattedDate = publishedAt ? new Date(publishedAt).toLocaleDateString() : 'Not published'
      const excerpt = content ? content.substring(0, 50) + (content.length > 50 ? '...' : '') : 'No content'
      return {
        title: title || 'Untitled Article',
        subtitle: `${formattedDate} • ${excerpt}`
      }
    }
  }
})
