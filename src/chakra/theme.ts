import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg:"#F7F7F7"
      },
    }),
  },
})


export default theme