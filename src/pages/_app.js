import '../../styles/globals.css'
import Home from '../components/Home'
import {ChakraProvider} from "@chakra-ui/react"
import theme from '../chakra/theme'
import Posts from '../components/Posts'
import { getAuthorBySlug, getPosts } from '../lib/api'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <ChakraProvider theme={theme}>
  <Home />
     <Component {...pageProps} />
   </ChakraProvider>
   
   </>
   )
}


export default MyApp
