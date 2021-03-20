module.exports = {
  pathPrefix: '',
  siteUrl: 'https://jsnaz.github.io',
  siteTitle: 'Data Analytics',
  siteDescription: 'Blog and portfolio of a data analyst',
  authorInfo: {
    name: 'Jenelyn Nazareno',
    job: 'Data Analyst',
    birthdate: 'October 21, 1991',
    email: 'jenazareno21@gmail.com',
    address: 'Rueil-Malmaison, France',
  },
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    projects: 'projects',
    contact: 'contact',
    resume: 'resume',
    //tag: 'tags',
  },
  social: {
    github: 'https://github.com/jsnaz',
    instagram: 'https://www.instagram.com/jennylin2191',
    linkedIn: 'https://www.linkedin.com/in/jnazareno'
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/086c97bd-d77f-4015-bb98-83124f116b68',
  // googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  
};
