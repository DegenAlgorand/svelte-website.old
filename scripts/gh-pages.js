const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/degen-website',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/DegenAlgorand/degen-website.git',
        user: {
            name: 'Null',
            email: 'the.email.is.null@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)