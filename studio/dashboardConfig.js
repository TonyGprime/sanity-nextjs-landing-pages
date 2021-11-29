export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61a51fc843ed6b5c29d757a1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-px87c4aw',
                  apiId: '3803ba60-6433-44c8-b8aa-f003ec2114e5'
                },
                {
                  buildHookId: '61a51fc8d001934d148486f8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-crb2xtq3',
                  apiId: '09fa8872-df42-439f-a4fd-69ea6042bc67'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TonyGprime/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-crb2xtq3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
