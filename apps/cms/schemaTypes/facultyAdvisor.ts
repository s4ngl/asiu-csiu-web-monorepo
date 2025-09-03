import {defineField, defineType} from 'sanity'

export const facultyAdvisorType = defineType({
  name: 'facultyAdvisor',
  title: 'Faculty Advisor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'url' }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      role: 'role',
      image: 'image'
    },
    prepare(selection) {
      const {title, role, image} = selection
      return {
        title: title || 'Unnamed Advisor',
        subtitle: role || 'No role specified',
        media: image
      }
    }
  }
})
