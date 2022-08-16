import { Box, SxProps, Theme } from '@mui/material'
import Image from 'next/image'
import React, { useContext } from 'react'
import { HomeContext } from '../../contexts/HomeContext';

const sxLogoWrapper: SxProps<Theme> = {
  position: 'relative',
  height: '3.5rem',
  width: '5.3rem'
}

export const Logo = () => {
  const homeContext = useContext(HomeContext);

  return (
    <Box sx={sxLogoWrapper}>
      <Image
        src={homeContext.logo}
        alt='logo'
        layout='fill'
      />
    </Box>
  )
}
