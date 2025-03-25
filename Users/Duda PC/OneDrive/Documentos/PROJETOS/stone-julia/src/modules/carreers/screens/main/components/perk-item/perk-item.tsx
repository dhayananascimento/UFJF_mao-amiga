import { Stack, Typography } from "@mui/material";
import Image from 'next/image';
import { ReactNode } from "react";

export interface PerkProps {
  svgSrc: string;
  title: ReactNode;
  description: ReactNode;
}

export const PerkItem = ({
  description,
  svgSrc,
  title
}: PerkProps) => {
  return (
    <Stack direction={'column'} spacing={2} alignItems={'center'}>
      <Image src={svgSrc} alt={"Alt"} width={120} height={120} />
      <Typography variant={'h5'} align="center" color="#0B3876">{title}</Typography>
      <Typography variant={'body1'} align="center">{description}</Typography>
    </Stack>
  )
}