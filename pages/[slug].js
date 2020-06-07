import { NotionRenderer } from 'react-notion'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'
import { Flex, Box } from '../components/FlexBox'
import { getAllPosts } from './'

// import { useRouter } from 'next/router'

const Post = ({ post, blocks }) => {
  // const router = useRouter()

  return (
    <MainLayout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Box p={[3, 4]}>
        <h1>{post.title}</h1>
        <Flex jc='space-between' ai='center'>
          <Flex><span style={{ fontSize: 15, fontWeight: 200 }}>por Arley Lobato</span></Flex>
          <Flex><span style={{ fontSize: 15, fontWeight: 200 }}>{post.date.split('-').reverse().join('/')}</span></Flex>
        </Flex>
        <NotionRenderer blockMap={blocks} />

      </Box>
    </MainLayout>
  )
}

export default Post

export async function getStaticProps({ params: { slug } }) {
  const posts = await getAllPosts()
  const post = posts.find(item => item.slug === slug)
  const blocks = await (await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`)).json()
  return { props: { blocks, post } }
}

export async function getStaticPaths() {
  const table = await getAllPosts()
  return { paths: table.map(row => ({ params: { slug: row.slug } })), fallback: false }
}
