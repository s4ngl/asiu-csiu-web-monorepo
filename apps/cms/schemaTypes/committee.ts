import {defineField, defineType} from 'sanity'

export const committeeType = defineType({
  name: 'committee',
  title: 'Committee',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
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
      title: 'name',
      description: 'description'
    },
    prepare(selection) {
      const {title, description} = selection
      return {
        title: title || 'Unnamed Committee',
        subtitle: description ? description.substring(0, 60) + (description.length > 60 ? '...' : '') : 'No description'
      }
    }
  }
})
