import React from 'react'
import { Box } from '../components/FlexBox'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'
import Link from 'next/link'

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
    <MainLayout>
      <Head>
        <title>arley.dev - Blog</title>
      </Head>
      <Box>
        {posts.map(item => (
          <Box ta='center' mt={5} key={item.slug}>
            <Link href={`/${item.slug}`}>{item.title}</Link>
          </Box>
        ))}
      </Box>
    </MainLayout>
  )
}

export default Blog

export const getServerSideProps = async () => {
  const posts = await getAllPosts()
  return { props: { posts } }
}
