import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html'


export function getPosts(){
    const getPath= path.join(process.cwd(), './src/lib/_posts/allPosts')
    const fileName = fs.readdirSync(getPath)
    return fileName.map(file => {
        const article = fs.readFileSync(path.join(process.cwd(), './src/lib/_posts/allPosts' ,  file), 'utf-8')
        const {data} = matter(article);
        const slug = file.replace(/\.md$/, '');
        return {
           ...data,
            slug,
            permalink: `/posts/${slug}`,
            image: `/${slug}.png`
        }
    }
    )}
    export function getWeb(){
        const getPath= path.join(process.cwd(), `./src/lib/_posts/web`)
        const fileName = fs.readdirSync(getPath)
        return fileName.map(file => {
            const article = fs.readFileSync(path.join(process.cwd(), `./src/lib/_posts/web` ,  file), 'utf-8')
            const {data} = matter(article);
            const slug = file.replace(/\.md$/, '');
            return {
               ...data,
                slug,
                permalink: `/posts/webdevelopment/${slug}`,
                image: `/${slug}.png`
            }
        }
        )}
   
        export function getWebBySlug(slug){
            const file = fs.readFileSync(path.join(process.cwd(), './src/lib/_posts/web', `${slug}.md`),'utf8')
            const {data, content} = matter(file);
            const body = remark().use(html).processSync(content).toString()
            return{
                ...data,
                body
            }
        }
        export function getWeb3(){
            const getPath= path.join(process.cwd(), `./src/lib/_posts/web3`)
            const fileName = fs.readdirSync(getPath)
            return fileName.map(file => {
                const article = fs.readFileSync(path.join(process.cwd(), `./src/lib/_posts/web3` ,  file), 'utf-8')
                const {data} = matter(article);
                const slug = file.replace(/\.md$/, '');
                return {
                   ...data,
                    slug,
                    permalink: `/posts/webdevelopment/${slug}`,
                    image: `/${slug}.png`
                }
            }
            )}
       
            export function getWeb3BySlug(slug){
                const file = fs.readFileSync(path.join(process.cwd(), './src/lib/_posts/web3', `${slug}.md`),'utf8')
                const {data, content} = matter(file);
                const body = remark().use(html).processSync(content).toString()
                return{
                    ...data,
                    body
                }
            }

            export function getCareer(){
                const getPath= path.join(process.cwd(), `./src/lib/_posts/career`)
                const fileName = fs.readdirSync(getPath)
                return fileName.map(file => {
                    const article = fs.readFileSync(path.join(process.cwd(), `./src/lib/_posts/career` ,  file), 'utf-8')
                    const {data} = matter(article);
                    const slug = file.replace(/\.md$/, '');
                    return {
                       ...data,
                        slug,
                        permalink: `/posts/webdevelopment/${slug}`,
                        image: `/${slug}.png`
                    }
                }
                )}
           
                export function getCareerBySlug(slug){
                    const file = fs.readFileSync(path.join(process.cwd(), './src/lib/_posts/career', `${slug}.md`),'utf8')
                    const {data, content} = matter(file);
                    const body = remark().use(html).processSync(content).toString()
                    return{
                        ...data,
                        body
                    }
                }
    export function getPostsBySlug(slug){
        const file = fs.readFileSync(path.join(process.cwd(), './src/lib/_posts/allPosts', `${slug}.md`),'utf8')
        const {data, content} = matter(file);
        const body = remark().use(html).processSync(content).toString()
        return{
            ...data,
            body
        }
    }

    export function getAuthors(){
        const getPath = path.join(process.cwd(), './src/lib/_authors')
        const readFile = fs.readdirSync(getPath)
        return readFile.map(file => {
            const author = fs.readFileSync(path.join(process.cwd(), './src/lib/_authors', file), 'utf8')
            const data = JSON.parse(author)
            const slug = file.replace(/\.json/, '');
            return{
                ...data,
                slug,
                permalink:`/authors/${slug}`,
                profilePictureUrl:`${slug}.png`,
            }
        })
    }

    export function getAuthorBySlug(slug){
        const author = fs.readFileSync(path.join(process.cwd(), './src/lib/_authors', `${slug}.json`), 'utf8')
        const data = JSON.parse(author)
        return{
                    ...data,
                permalink: `./src/authors/${slug}`,
                profilePictureUrl: `/${slug}.png`,
                slug,
        }
    }
