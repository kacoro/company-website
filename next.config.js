const fetch = require('isomorphic-unfetch');
module.exports = {
    exportTrailingSlash: true,
    exportPathMap: function () {
        const paths = {
            '/': { page: '/' },
            '/about': { page: '/about' }
        };
        // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        // const data = await res.json();
        // const shows = data.map(entry => entry.show);
        const shows = [
            { id: 'hello-nextjs', title: 'Hello Next.js' },
            { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
            { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
        ]
        shows.forEach(show => {
            paths[`/p/${show.id}`] = { page: '/p/[id]', query: { id: show.id } };
        });
        return paths;
    }
};