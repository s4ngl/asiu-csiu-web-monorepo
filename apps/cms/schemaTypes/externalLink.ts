import {defineField, defineType} from 'sanity'

export const externalLinkType = defineType({
  name: 'externalLink',
  title: 'External Link',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
      description: 'description'
    },
    prepare(selection) {
      const {title, url, description} = selection
      const domain = url ? new URL(url).hostname : 'No URL'
      return {
        title: title || 'Untitled Link',
        subtitle: description ? `${domain} • ${description.substring(0, 40)}${description.length > 40 ? '...' : ''}` : domain
      }
    }
  }
})
