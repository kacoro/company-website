const fetch = require('isomorphic-unfetch');
const withOffline = require('next-offline')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'false'
})
const dev = process.env.NODE_ENV !== 'production';
const server = dev ? 'http://localhost:3000' : 'http://localhost:8080';
// import { sampleProjectData } from './utils/sample-project-data'
const withCSS = require('@zeit/next-sass')
var config = {
    // target: 'serverless',
    crossOrigin: 'anonymous',
    exportTrailingSlash: true,
    exportPathMap: async function () {
        const paths = {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/product': { page: '/product' },
            '/news': { page: '/news' },
            '/solution': { page: '/solution' },
        };
        
        const shows = [
            { id: 'hello-nextjs', title: 'Hello Next.js' },
            { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
            { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
        ]
        shows.forEach(show => {
            paths[`/p/${show.id}`] = { page: '/p/[id]', query: { id: show.id } };
        });
        const products = [{id:1,id:2,id:3,id:4}]
        products.forEach(show=>{
            paths[`/product/${show.id}`] = { page: '/product/[id]', query: { id: show.id } };
            paths[`/news/${show.id}`] = { page: '/news/[id]', query: { id: show.id } };
            paths[`/solution/${show.id}`] = { page: '/solution/[id]', query: { id: show.id } };
        })
        // const res = await fetch('http://localhost:8080/api/project');
        // const data = await res.json();
        // const projectData = data
        // projectData.forEach(show => {
        //     paths[`/project/${show.id}`] = { page: '/project/[id]', query: { id: show.id } };
        // });

        return paths;
    }
}
var nextConfig = {}

if (!dev) {
    nextConfig = config
}
module.exports = withCSS(nextConfig);