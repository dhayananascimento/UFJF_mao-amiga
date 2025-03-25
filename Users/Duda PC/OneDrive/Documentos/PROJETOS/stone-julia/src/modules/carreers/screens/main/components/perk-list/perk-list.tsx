import { Grid2 } from "@mui/material"
import { PerkItem, PerkProps } from "../perk-item/perk-item"

const perkItens: PerkProps[] = [
  {
    svgSrc: '/assets/carreers/Icon_Perks_Training_Courses.svg',
    title: <>Broaden Your <br/> Horizons</>,
    description: <>Professional Development and Training Courses</>
  },
  {
    svgSrc: '/assets/carreers/Icon_Perks_401k.svg',
    title: <>Save for the <br/>Future</>,
    description: <>401K program covered by Stonebranch</>
  },
  {
    svgSrc: '/assets/carreers/Icon_Perks_Health.svg',
    title: <>Stay <br/>Healthy</>,
    description: <>Medical, Dental & Vision, Disability, and Life Insurance</>
  },
  {
    svgSrc: '/assets/carreers/Icon_Perks_gym_membership.svg',
    title: <>Be The Best<br/>Version of You</>,
    description: <>Wellness programs and gym membership reimbursement</>
  },
  {
    svgSrc: '/assets/carreers/Icon_Perks_lunch.svg',
    title: <>Refuel</>,
    description: <>Healthy food, beverages, and snacks. Regularly catered lunches</>
  },
  {
    svgSrc: '/assets/carreers/Icon_Perks_holidays.svg',
    title: <>Time to Recharge</>,
    description: <>Paid holidays and a generous time-off policy to rest and recharge</>
  },
  {
    svgSrc: '/assets/carreers/Icon_Perks_enjoy_team.svg',
    title: <>Enjoy Yourself</>,
    description: <>Regular off-site social events <br/>and fun team-building opportunities</>
  },
];


export const PerkList = () => {
  return (
    <Grid2 container spacing={4}
    justifyContent="center"  // Centraliza os itens horizontalmente
    alignItems="center"  
    >
      {perkItens.map((perk, index) => (
        <Grid2 key={index}
          size={{
            xs: 12,
            sm: 6,
            md: 4,
            lg: 4,
          }}
        >
          <PerkItem {...perk} />
        </Grid2>
      ))}
    </Grid2>
  ) 
}