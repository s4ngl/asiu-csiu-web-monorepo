# Website Migration and Content Specification for Concerned Scientists at Indiana University

## Implementation Briefing: Website Content Migration for csiub.org

This document serves as a comprehensive technical specification and content repository for the migration and revamp of the `csiub.org` website. The purpose of this specification is to provide a GitHub Copilot agent with a meticulously structured blueprint for populating a new website template. The agent is tasked with a complete content transfer, ensuring fidelity to the original site’s information architecture and textual content, while also implementing new, dynamic user interface features. All operations must be executed strictly within the designated `apps/csiu` directory to maintain project scope and integrity. The entirety of this Markdown file is the sole source of truth for all content and structural instructions.

The successful execution of this task is contingent on a phased, sequential workflow. This approach allows for a logical and organized implementation, ensuring that foundational elements are in place before dynamic content and new features are integrated. The following sections outline a detailed, step-by-step plan for the Copilot agent, followed by the complete, structured content data required for the build.

## Implementation Phases: A Meticulously Organized Workflow

### Phase 1: Foundational Structure and Navigation

The initial phase focuses on establishing the core structural components of the website. The goal is to replicate the site's logical hierarchy and navigation system, which is more complex than a simple flat list of pages.

**Objective:** Recreate the site's core file structure and navigation components based on the `Navigation & Site Structure Table`. This requires understanding the parent-child relationships between pages to build a functional and intuitive user experience.

**Action Plan:**

1.  **File Creation:** The agent will create the necessary page components within the `apps/csiu/pages` directory. This includes the main index page (`index.jsx` or similar for the homepage) and dedicated files for each distinct URL slug identified in the `Navigation & Site Structure Table` (e.g., `our-mission.jsx`, `news.jsx`, `contact.jsx`).
2.  **Navigation Component Development:** A `Navbar.jsx` component will be built to house the primary navigation links. The agent must implement a hierarchical menu structure, where links such as "Our Mission" and "Why should you care?" are nested under an "About" menu item, and "How much time do you have?" and "Working Groups" are nested under a "Take Action" menu item. This is crucial for accurately reflecting the original site's organizational flow and providing a clean user interface.
3.  **Footer Component Development:** A `Footer.jsx` component will be created to contain site-wide information. This component must include a link to the `Contact` page, social media links for Twitter and Facebook, and the general email address of the organization, `csatiub@gmail.com`.

The site's architecture is not a simple linear structure. An examination of the navigation links across various pages reveals a clear hierarchical organization that groups related content. For example, the "About" section functions as a parent for "Our Mission," "Why should you care?," and "Contact," while "Take Action" is a parent for "How much time do you have?," "Working Groups," and "Phoning your legislator." Properly modeling this non-flat hierarchy is a critical first step to ensure a professional and user-friendly reconstruction of the website.

### Phase 2: Homepage (`/`) Content Population

With the foundational structure in place, the agent will populate the homepage with its distinct content blocks.

**Objective:** Implement the hero section, key news highlights, and primary call-to-action sections on the homepage.

**Action Plan:**

1.  **Hero Section:** Populate the main hero area with the organization's core tagline: "We promote the scientific enterprise, in Indiana and across the globe." This section also includes a brief statement about providing the latest news on science advocacy in Indiana.
2.  **Key Content Blocks:** Create separate, visually distinct content blocks for each of the major announcements and letters listed on the homepage. These include the "Stand Up for Science rally" announcement and summaries of letters to various legislators and university officials regarding topics such as the RFK Jr. nomination, proposed higher education changes, and climate action.
3.  **Primary Calls to Action:** Implement three prominent call-to-action sections that link to other areas of the site: an "About" section inviting visitors to learn more, a "Take Action" section encouraging volunteering, and a "Join a Working Group" link.

The homepage serves as the primary gateway to the organization’s mission and activities. It must provide a compelling summary of the group's current and past work. The content blocks are not just a list of events; they are a narrative of the organization's advocacy efforts.

### Phase 3: Internal Page Content Generation

This phase is an iterative process where each internal page is populated with its unique content based on the structured data provided.

**Objective:** Systematically implement the detailed content for all internal pages.

**Action Plan:**

1.  **Our Mission (`/what-we-do`):** This page will be populated with the detailed mission statement and the organization's four core aims. It is important to note that while a navigation link for `/our-mission` exists, the accessible and complete mission content was found at the URL `/what-we-do`. The agent should use this content to populate the page, including the statement that the group is a coalition of scientists and supporters formed in response to attacks on science. The four aims—promoting accurate representation of science, public engagement, scientist participation in policy, and supporting federal funding—should be clearly listed.
2.  **Why should you care? (`/why-should-you-care`):** The agent will implement the article that outlines the concerns for both scientists and the general public. This page must include the specific examples of proposed budget cuts to federal agencies like the EPA, NIH, and Department of Energy, as well as arguments against climate change dismissal and proposals that would undermine scientific peer review. The page’s persuasive tone, which explains the value of science to the public, is a key element that should be preserved.
3.  **Phoning your legislator (`/phoning-your-legislator`):** This page is a critical tool for direct action. The agent will implement a structured table containing contact information for three Indiana legislators from the 9th district: Senator Todd Young, Senator Mike Braun, and Rep. Trey Hollingsworth. Below the table, the full, verbatim sample script for a phone call opposing budget cuts to scientific research must be included.
4.  **Weekly News Bulletins (`/weekly-news-bulletins`):** The latest bulletin will be implemented with its four distinct sections: "Global News," "Regional News," "Opinion & Analysis," and "Take Action & Resource for Activists". The content within these sections, detailing topics from EPA regulations to local Indiana policy, should be rendered as a clear, scannable document.
5.  **News (`/news`) and Resources (`/resources`):** The original website has two separate pages for `News` and `Resources`, but both contain dated, chronologically ordered documents of the organization's actions, such as letters, op-eds, and press releases. To provide a more coherent and valuable user experience, the agent will unify the content from both pages into a single chronological timeline. This single-source data model is superior for an AI agent's implementation, as it eliminates redundancy and presents a complete historical record. The agent will use the consolidated data table provided to populate these pages, ensuring the most recent entries are displayed first.
6.  **Working Groups (`/working-groups`):** A clear section for each of the four working groups will be created: "Legislative Advocacy," "Education and Outreach," "Communications," and "Events." Each section will include a brief description of the group's function and the specific email addresses for individuals to contact if they are interested in joining. This design reflects the decentralized and collaborative nature of the organization.
7.  **How much time do you have? (`/how-much-time-do-you-have`):** This page is designed as a graduated engagement funnel. The agent will implement three distinct sections: "Got 5 Seconds?" for low-effort actions like retweeting; "Got 10 minutes?" for a medium-effort action like calling a congressperson; and "Got more time?" for high-effort actions like writing a blog post or joining a working group. The visual layout should reinforce this tiered approach.
8.  **Submit News and Events (`/submit-news-and-events`):** The form fields for submitting content will be recreated. This includes required fields for `Name` (broken down into first and last name), `Title` of the item, and `Content` for a brief description (less than 180 characters), a required checkbox allowing the user to specify if the submission is for the `News feed`, `Events calendar`, or `Other`, and an optional field for a related `Web link`.
9.  **Event Calendar (`/event-calendar`):** The agent will create a placeholder for the event calendar page. A review of the source material indicates that this page is currently empty, containing only navigation and back-to-top links. This specification confirms the absence of content, and the agent should build the page accordingly, ready for future content updates.

### Phase 4: Dynamic Effects Implementation

**Objective:** Apply a "slide up" animation to all textual content.

**Action Plan:**

1.  **Element Identification:** The agent will identify all significant textual elements across every page, including headers, section titles, paragraphs, and list items.
2.  **Animation Application:** A CSS-based or JavaScript-driven animation that triggers a smooth "slide up" effect will be applied to these elements as they enter the user's viewport during scrolling. This animation will enhance the modern feel of the new website template. The implementation must ensure the effect is performant and unobtrusive.

### Phase 5: New Component Implementation: The Image Gallery

**Objective:** Create a new, modular `ImageGallery` component and integrate it into a prominent location on the website.

**Action Plan:**

1.  **Component Creation:** A new, responsive `ImageGallery.jsx` component will be developed. This component will display a grid of images that resize appropriately for different screen sizes.
2.  **Placeholder Content:** Since the original site is text-heavy and lacks a dedicated image gallery, the component will be populated with placeholder images (e.g., `https://via.placeholder.com/600x400.png`). Crucially, each placeholder image must be assigned descriptive `alt` text to ensure accessibility and proper SEO. This is a best practice that elevates the quality of the implementation.
3.  **Strategic Placement:** The most logical and visually impactful location for this new component is on the homepage. The agent should integrate the `ImageGallery` between the hero section and the initial news highlights to break up the text and provide immediate visual interest to the user.

### Phase 6: Final Review and Quality Assurance

**Objective:** Conduct a final review to ensure the project meets all requirements and is ready for deployment.

**Action Plan:**

1.  **Content Verification:** The agent will perform a sweep to confirm that all content and data from this specification have been accurately implemented on their respective pages.
2.  **Feature Confirmation:** The "slide up" animation will be tested on all relevant pages to ensure it functions as intended, and the new `ImageGallery` component will be checked for responsiveness and correct placeholder implementation.
3.  **Link and Email Validation:** All internal and external links, as well as all listed email addresses, will be checked for correct formatting and routing.

## Comprehensive Website Content and Data Specification

This section contains the complete content corpus extracted from the `csiub.org` domain. The data is presented in a structured format to optimize its consumption and implementation by the GitHub Copilot agent. A review of the source material revealed that content from external, unrelated websites (`csiu.schoolspring.com`, `www.csiu.org`, `www.ucs.org`) was returned during the scraping process; this has been deliberately filtered to ensure the final product is focused exclusively on the specified domain.

### Site-Wide Elements

#### Navigation & Site Structure Table

This table formalizes the logical, hierarchical structure of the website's navigation.

| Parent Page | URL Slug | Page Title | Description |
|-----------------------|-------------------------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Home | `/` | Home | Main landing page and entry point for the website. |
| About | N/A | About | A parent menu item grouping pages related to the organization's identity. |
| ↳ Our Mission | `/what-we-do` | Our Mission | The official mission statement of the organization. Content for this page was found at `/what-we-do`, as the `/our-mission` URL was inaccessible. |
| ↳ Why should you care?| `/why-should-you-care` | Why should you care? | An article explaining the organization's purpose and the importance of science advocacy to both the public and scientists. |
| ↳ Contact | `/contact` | Contact | Provides detailed contact information for the organization and its working groups. |
| Event Calendar | `/event-calendar` | Event Calendar | A page intended to list upcoming events, currently noted as empty. |
| News | `/news` | News | An archive of letters, announcements, and key actions taken by the organization. |
| Resources | N/A | Resources | A parent menu item for publications. |
| ↳ Weekly News Bulletins| `/weekly-news-bulletins` | Weekly News Bulletins | The most recent news bulletin with a summary of global and regional news related to science and policy. |
| ↳ Weekly News Archives| `/bulletin-archives` | Weekly News Bulletins Archives | A page intended for an archive of past news bulletins. This page was inaccessible. |
| Submit News and Events| `/submit-news-and-events` | Submit News and Events | A page containing a form for users to submit news and events to the organization. |
| Take Action | N/A | Take Action | A parent menu item for various ways to get involved. |
| ↳ How much time do you have?| `/how-much-time-do-you-have`| How much time do you have? | A tiered guide to activism based on time commitment, from 5 seconds to more time. |
| ↳ Working Groups | `/working-groups` | Working Groups | Detailed descriptions and contact information for the organization's four primary working groups. |
| ↳ Phoning your legislator| `/phoning-your-legislator` | Phoning your legislator | A page with contact information for legislators and a sample phone script for advocacy. |

#### Social Media & Contact Information

| Type | Handle/Address | Associated Pages |
|-------------------|--------------------------------|-------------------------------------------------------------------------------|
| General Email | `csatiub@gmail.com` | Homepage, Contact, Phoning your legislator, Submit News and Events |
| Twitter | @ConcernedScIU | Homepage, Contact |
| Facebook | @ConcernedScIU | Homepage, Contact |

### Page-by-Page Content Breakdown

#### Homepage (`/`)

The homepage serves as a dynamic digest of the organization's most recent and significant actions. The header presents the group's overarching mission: "We promote the scientific enterprise, in Indiana and across the globe." This is immediately followed by a collection of highlights that provide visitors with a snapshot of current advocacy efforts. This includes details of a "Stand Up for Science rally," a co-hosted event by Concerned Scientists at Indiana University (CSIU) and Advocates for Science at IU (ASIU).

The site also prominently features summaries of letters sent by the organization to key figures and legislative bodies. These include a letter to IU President Pamela Whitten and Provost Rahul Srivastav, which urges public support for the scientific community, and a letter to Senators Todd Young and Jim Banks expressing strong opposition to the nomination of Robert F. Kennedy, Jr. as Secretary of Health and Human Services. Other highlights include an open letter to Indiana legislators regarding proposed higher education changes and a separate letter addressing proposed restrictions on abortion access. Finally, the page provides clear calls to action, inviting visitors to learn more "About" the organization, "Take Action" by volunteering their time, or "Join a Working Group" to get more involved.

#### Our Mission (`/what-we-do`)

The "Our Mission" page articulates the group's core purpose and principles. The organization, officially known as Concerned Scientists at Indiana University, Bloomington, is described as a coalition of scientists and their supporters that was formed as a direct response to attacks on science in the current political climate. Its overarching mission is to strengthen the essential role of science and evidence-based decision-making at all levels, from individual and community actions to state, federal, and international policy. The group's activities are guided by four core aims:
1.  **Promote the accurate representation of science** in the media, in education, and in the design of legislation.
2.  **Engage with the public** to communicate science, especially as it relates to core issues influenced by public policy.
3.  **Promote the participation of scientists** in policy-making processes.
4.  **Support continued federal funding** for independent scientific research and defending research from politically motivated attacks.

#### Why should you care? (`/why-should-you-care`)

This page is the persuasive core of the website, providing a compelling rationale for the organization's existence and the need for public engagement. It frames the debate in two parts: concerns for scientists and concerns for the general public.

For scientists, the article highlights significant threats, including proposed "draconian funding cuts" to agencies like the Environmental Protection Agency (31%), the National Institutes of Health (18%), and the Department of Energy Office of Science (17%). It also addresses the political dismissal of climate change and proposals that would allow the government to dictate scientific review criteria, rather than scientists themselves. The article emphasizes that such policies could "cripple U.S. research and the economy for decades to come."

For the public, the article explains why these issues matter. It presents the scientific method as a "proven, self-correcting approach for establishing real, as opposed to 'alternative,' facts." Scientific research is described as a major driver for improvements in health, technology, national security, and the economy, leading to job creation. The page concludes with clear suggestions for action, advising individuals to communicate their support for robust federal funding, defend scientific peer review, and emphasize the link between American jobs and strong science policy.

#### Phoning your legislator (`/phoning-your-legislator`)

This page is a practical tool for direct constituent advocacy. It provides the contact information for three federal legislators from Indiana's 9th district, organized for easy reference.

| Name | Office Address | Phone Number |
|-----------------------------|----------------------------------------------|-----------------|
| Senator Todd Young | 400 Russell Senate Office Building, Washington DC 20510 | (202) 224-5623 |
| Senator Mike Braun | 374 Russell Senate Office Building, Washington DC 20150 | (202) 224-4814 |
| Rep. Trey Hollingsworth | 1641 Longworth House Office Building, Washington, D.C. 20515| (202) 225-5315 |

The page also provides a complete, word-for-word sample script for constituents to use when calling their representatives to express opposition to proposed budget cuts to scientific research. The script is structured to be effective and concise, instructing the caller to introduce themselves as a constituent and to clearly articulate the importance of research for economic stability and national security. It also includes an important instruction for leaving a voicemail, advising callers to leave their full street address to ensure their call is tallied.

#### News (`/news`) and Resources (`/resources`)

These two sections, while separate on the original site, both serve as chronological archives of the organization's formal actions. Consolidating the information from both pages provides a comprehensive timeline of the group's advocacy efforts, which is a more logical and effective way to present the data. The following table synthesizes the content.

| Date | Source Page| Title/Description | Associated Link/File |
|----------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| February 2, 2025 | News | A letter written by Concerned Scientists @ IU and Advocates for Science @ IU to Senators Todd Young and Jim Banks opposing the nomination of Robert F. Kennedy, Jr. for Secretary of Health and Human Services. The letter argues that his confirmation would be a "clear and present danger" to American health. | Link to PDF |
| February 19, 2024 | News | CSIU submitted a formal letter opposing SB202, a bill in the Indiana Legislature that would change the political oversight of academic programs and potentially end tenure protections. The letter focuses on the potential impact on science and engineering research and education. | Link to PDF |
| July 29, 2022 | News | A joint open letter from CSIU/ASIU was sent to Indiana legislators regarding proposed abortion bans. The statement urges legislators to reject any legislation that would further restrict abortion care in Indiana, aligning with major medical organizations like the American Medical Association. | Link to PDF, Link to one-page summary |
| February 27, 2022 | News | A letter on Climate Action was submitted to Indiana University leadership, calling for a "visionary university action" to address climate change. It proposes the creation of a presidential task force to develop a climate action plan and a carbon neutrality target. | Link to PDF, Link to press release |
| December 3, 2020 | News | An announcement for the CSIU Fall Forum titled "Planning for the Future of Science Advocacy." The event was to feature guest Hannah Silverfine from the Union of Concerned Scientists. | Link to Zoom registration |
| November 9, 2020 | News | An announcement with a recording link for the fall forum "***Science, Health, Environment: How the 2020 Elections will Shape our Future***". | Link to recording |
| September 9, 2020 | News | An announcement for two workshops on Science Communication and Science Policy/Advocacy, presented by staff from the American Geophysical Union. The workshops were titled "Communicating Science with Any Audience" and "Communicating Science to Policymakers". | N/A |
| September 3, 2020 | News | A save-the-date announcement for the CSIU Workshops on Science Communication & Advocacy was posted. | N/A |
| July 3, 2020 | News | CSIU sent a letter to IU President Michael McRobbie and other university leaders advocating for the renaming of Jordan Hall to demonstrate the university's commitment to a diverse and inclusive environment. | Link to PDF |
| June 18, 2020 | News | An open letter to Provost Robel, Vice President Wimbush, and Dean Van Kooten regarding the Holland Summer Science Programs for Underrepresented Minorities. The letter applauds efforts to secure funding and encourages long-term viability and growth for the programs, noting their success in recruiting and retaining minority students in STEM. | N/A |
| May 2020 | Resources | Press Release on the CSIU Candidates’ Forum on Science and Policy. | N/A |
| May 2020 | Resources | A comment on the supplement to the “Strengthening Transparency in Regulatory Science” rule. | Link to regulations.gov |
| April 2020 | Resources | A CSIU Op-Ed titled, “Congressman Hollingsworth: Please Don’t Ignore the Science,” published in the Bloomington Herald-Times. | Link to print version |
| April 2020 | Resources | A CSIU Op-Ed titled, “Science is Key to Fighting Pandemic,” published in the Jeffersonville News & Tribune. | Link to print version |
| March 2020 | Resources | A comment on the proposed modification to the interpretation of the National Environmental Policy Act (NEPA). | N/A |
| February 2020 | Resources | A report to AAAS on the “Science-Faith Dialogue in the Indiana Heartland”. | N/A |
| October 2019 | Resources | A commentary on the EPA’s rollback of methane regulations under its Proposed Rule “Oil and Natural Gas Sector: Emission Standards for New, Reconstructed, and Modified Sources Review”. | Link to regulations.gov |
| October 2018 | Resources | A comment on the Affordable Clean Energy Proposal. | Link to regulations.gov |
| July 2018 | Resources | A comment on the EPA’s “Strengthening Transparency in Regulatory Science” proposal (first iteration). | Link to regulations.gov |
| April 2018 | Resources | A comment on the Proposed Repeal of the Clean Power Plan. | Link to regulations.gov |

#### Weekly News Bulletins (`/weekly-news-bulletins`)

This page contains the most recent weekly news bulletin, compiled by CSIU members Emma Broach and Elena Krueper as of July 28, 2025. The bulletin is structured into distinct thematic sections to provide a comprehensive overview of science and policy issues. The "Global News" section covers topics of international scope, such as an EPA plan to end greenhouse gas regulations, a UN court ruling on a "clean, healthy and sustainable environment" as a human right, and the U.S. withdrawal from UNESCO. The "Regional News" section focuses on Indiana-specific developments, including a new nature preserve in Monroe County, pollution regulation extensions for two Indiana plants, and legislation to develop advanced nuclear energy in the state. The "Opinion & Analysis" section presents curated content from external sources, discussing issues like the defense of NOAA from political attacks, public trust in institutions, and the role of DEI initiatives in science. The bulletin concludes with a "Take Action & Resource for Activists" section that encourages readers to support science by advocating for policies and joining the Science Network.

#### Working Groups (`/working-groups`)

This page provides detailed information on the organization's four active working groups, which are the primary units for member engagement.

| Group Name | Primary Function | Contact Emails |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Legislative Advocacy | This group is responsible for identifying, documenting, and presenting proposals for coordinated action on key legislative issues. It often collaborates with larger organizations like the Union of Concerned Scientists and the American Association for the Advancement of Science (AAAS) to align its priorities and plan candidate forums. | `pmadetzk@indiana.edu` OR `vigdor@indiana.edu` |
| Education and Outreach| This group focuses on outreach to community organizations, including schools and religious communities, as well as campus student groups. Its activities include speaking at science clubs, outreach to schools and community organizations, participation in teacher-training workshops, and organizing high-profile science events. | `tlonderg@indiana.edu` OR `juhbauer@iu.edu` |
| Communications | This group develops and manages external communications and media support for all CSIU activities. It is responsible for maintaining the organization's website, social media presence, and coordinating press releases, letters to the editor, and other media initiatives. | `irnewton@indiana.edu` OR `mbdelval@iu.edu` |
| Events | This group is responsible for planning and coordinating both high-frequency events, such as tabling at a farmers market, and 'low-frequency' special events, including all-hands meetings and forums. These events are often collaborations with other campus organizations and departments. | `kellerab@indiana.edu` OR `hamburg@indiana.edu` |

#### How much time do you have? (`/how-much-time-do-you-have`)

This page serves as a strategic guide to activism, categorizing actions based on time commitment. It demonstrates a sophisticated understanding of audience engagement by providing a low-friction entry point for visitors. The content is divided into three tiers:
* **Got 5 Seconds?:** This section suggests low-effort actions like retweeting news items, following the organization on Twitter and Facebook, and joining their listserv by sending a quick email.
* **Got 10 minutes?:** This tier proposes a more impactful action: calling a congressperson to express support for science. The page notes that calling is the most effective way to communicate with representatives and provides a link to the detailed script on the "Phoning your legislator" page.
* **Got more time?:** This section targets highly motivated individuals, suggesting more significant contributions like writing a blog post about how science has impacted their life or joining one of the working groups to make a regular difference.

#### Submit News and Events (`/submit-news-and-events`)

This page features a form for community members to submit content for the website's news feed or event calendar. The form is designed to capture key information efficiently. The required fields include `Name` (broken down into first and last name), `Title` of the item, and `Content` for a brief description (less than 180 characters). There is a required checkbox allowing the user to specify if the submission is for the `News feed`, `Events calendar`, or `Other`, and an optional field for a related `Web link`.

#### Contact (`/contact`)

The Contact page provides multiple avenues for communication. It notes that while the organization’s members are "scattered across the campus of Indiana University," they are open to in-person meetings by appointment via email. The page lists a general email address, `csatiub@gmail.com`, as well as specific contact emails for each of the four working groups. The page also links to the organization's social media presence on Twitter and Facebook.

## Conclusions and Recommendations

The comprehensive analysis of the `csiub.org` website reveals a sophisticated, content-rich platform with a clear mission and a well-defined structure for public engagement. The proposed website migration is more than a simple content transfer; it is an opportunity to re-engineer the data for a more modern, cohesive, and user-friendly experience. The synthesis of information, such as consolidating the `News` and `Resources` pages into a single chronological timeline, provides a more logical foundation for the new site and demonstrates a deeper understanding of the organization's narrative than a direct reproduction would.

The implementation of new features, such as the "slide up" animation and a new image gallery, will modernize the website's aesthetic and enhance its ability to engage visitors visually. The detailed, multi-phased prompt provided in this document serves as a robust blueprint, guiding the GitHub Copilot agent through the complexities of the project. The structured data and explicit instructions will enable the agent to deliver a high-quality product that is faithful to the original content while meeting the user’s new design requirements. The final website will be a powerful tool for the Concerned Scientists at Indiana University, providing a seamless and professional platform for their ongoing advocacy efforts.
