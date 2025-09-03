import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startTime',
      title: 'Start Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endTime',
      title: 'End Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'locationUrl',
      title: 'Location Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'audience',
      title: 'Open To',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Members', value: 'members'},
          {title: 'Public', value: 'public'},
          {title: 'IU Students', value: 'iu-students'},
          {title: 'IU Faculty', value: 'iu-faculty'},
          {title: 'IU Staff', value: 'iu-staff'},
          {title: 'Alumni', value: 'alumni'},
        ],
      },
    }),
    defineField({
      name: 'participantCount',
      title: 'Number of Participants',
      type: 'number',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'btnText',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'btnUrl',
      title: 'Button Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      location: 'location'
    },
    prepare(selection) {
      const {title, date, location} = selection
      // Parse date as local date to avoid timezone shifts
      let formattedDate = 'No date'
      if (date) {
        const [year, month, day] = date.split('-').map(Number)
        const localDate = new Date(year, month - 1, day) // month is 0-indexed
        formattedDate = localDate.toLocaleDateString()
      }
      return {
        title: title || 'Untitled Event',
        subtitle: `${formattedDate} • ${location || 'No location'}`
      }
    }
  }
})
