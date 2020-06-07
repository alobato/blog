import React from 'react'
import { Box } from 'reakit/Box'
// import { Flex, Box } from '@alobato/flex-box'
// import styled from 'styled-components/macro'
// import dynamic from 'next/dynamic'

// const { Flex, Box } = dynamic(() => import('@alobato/flex-box'), {
  // ssr: false
// })

const NOTION_BLOG_ID = '01ed81a390ba44f89fdec976721cc3ea'

export const getAllPosts = async () => {
	return await (await fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`)).json()
}

const Blog = ({ posts }) => {
  return (
    <Box>
      {posts.map(item => (
        <Box key={item.slug}>{item.title}</Box>
      ))}
    </Box>
  )
}

export default Blog

export const getServerSideProps = async () => {
  const posts = await getAllPosts()
  return { props: { posts } }
}
