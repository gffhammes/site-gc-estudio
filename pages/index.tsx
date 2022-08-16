import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import { Header } from '../src/components/common/Header'
import { HeroSection } from '../src/components/HeroSection/HeroSection'
import { HomeContext } from '../src/contexts/HomeContext'

const Home: NextPage = () => {
  const homeContext = useContext(HomeContext);

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Head>
        <title>{homeContext.pageTitle}</title>
        <meta name="description" content={homeContext.pageDescription} />
      </Head>

      <Header />

      <Box component='main' sx={{ height: '100%', width: '100%' }}>        
        <HeroSection />
      </Box>

    </Box>
  )
}

export default Home
