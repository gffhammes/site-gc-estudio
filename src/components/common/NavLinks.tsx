import { Box, Stack, Typography } from '@mui/material'
import Link from 'next/link';
import React, { useContext } from 'react'
import { HomeContext } from '../../contexts/HomeContext';

export const NavLinks = () => {
  const homeContext = useContext(HomeContext);

  return (
    <Stack component='nav' direction='row' spacing={4}>
      {homeContext.menuOptions.map(option => {
        return (
          <Link key={option.label} href={option.target} passHref>
            <a>
              <Typography sx={{ color: 'white' }}>{option.label}</Typography>
            </a>
          </Link>
        )
      })}
    </Stack>
  )
}
