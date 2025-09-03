import {defineField, defineType} from 'sanity'

export const newsBulletinType = defineType({
  name: 'newsBulletin',
  title: 'News Bulletin',
  type: 'document',
  fields: [
    defineField({
      name: 'publication',
      title: 'Publication Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Text-Formatted Content (see CMS Sheets)',
      type: 'text',
      validation: (Rule) => Rule.required(),
    })
  ],
  preview: {
    select: {
      title: 'publication'
    },
    prepare(selection) {
      if (selection.title) {
        const date = new Date(selection.title + 'T00:00:00')
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return {
          title: `${month}/${day}/${year}`
        }
      }
      return {
        title: 'No date'
      }
    }
  }
})
