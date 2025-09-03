import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      author: 'author',
      role: 'role',
      quote: 'quote'
    },
    prepare(selection) {
      const {author, role, quote} = selection
      const quoteExcerpt = quote ? quote.substring(0, 60) + (quote.length > 60 ? '...' : '') : 'No quote'
      const subtitle = role ? `${role} • ${quoteExcerpt}` : quoteExcerpt
      return {
        title: author || 'Anonymous',
        subtitle: subtitle
      }
    }
  }
})


// adela krenz
