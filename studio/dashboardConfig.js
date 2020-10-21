export default {
  widgets: [
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
                  buildHookId: '5f909e5b81206830964c4007',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-trial-studio',
                  apiId: '54c326e1-3092-4e0d-8815-e18531471328'
                },
                {
                  buildHookId: '5f909e5b8189bc2fa670411c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-trial',
                  apiId: 'c49ee9a5-9f5b-4157-a32b-4c88fadb9643'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sebhewelt/sanity-kitchen-sink-trial',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-trial.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
