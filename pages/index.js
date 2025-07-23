import Head from 'next/head'
import EdomoticsWebsite from '../components/EdomoticsWebsite'

export default function Home() {
  return (
    <>
      <Head>
        <title>eDomotics - Smart Living Solutions | Home Automation | Home Theatre</title>
        <meta name="description" content="eDomotics - Market leader in home automation, home theatre, and smart home systems. Transform your space with our intelligent solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <EdomoticsWebsite />
    </>
  )
}