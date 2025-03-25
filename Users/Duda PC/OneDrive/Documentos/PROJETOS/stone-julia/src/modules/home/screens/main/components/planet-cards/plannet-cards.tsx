import { FC } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';

interface OrbitingCardsProps {
  items: string[];
  radius?: number;
  rotation?: number;
}

export const PlanetCards: FC<OrbitingCardsProps> = ({
  items,
  radius = 150,
  rotation = 0,
}) => {
  return (
    <Box
      position="relative"
      width={550}
      height={550}
      my={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          height: '24rem',
          width: '24rem',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '50%',
          justifyContent: 'center',
          '.cercle-line-outer': {
            position: 'absolute',
          },
          '.cercle-line-inner': {
            position: 'absolute',
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="cercle-line-outer"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="450px"
          height="546px"
          viewBox="0 0 546 546"
          version="1.1"
        >
          <title>Oval</title>
          <defs>
            <linearGradient
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              id="linearGradient-1"
            >
              <stop stopColor="#186CDA" offset="0%"></stop>
              <stop stopColor="#6BA1E7" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="stonebranch-homepage-update-copy"
              transform="translate(-307, -3752)"
              fill="url(#linearGradient-1)"
              fillRule="nonzero"
            >
              <g id="Group-26" transform="translate(0, 3484)">
                <g id="Group-27" transform="translate(174, 138)">
                  <g id="Group-14" transform="translate(44.0672, 26.7665)">
                    <path
                      d="M362,103.5 C512.497594,103.5 634.5,225.502406 634.5,376 C634.5,526.497594 512.497594,648.5 362,648.5 C211.502406,648.5 89.5,526.497594 89.5,376 C89.5,225.502406 211.502406,103.5 362,103.5 Z M362,106.5 C213.15926,106.5 92.5,227.15926 92.5,376 C92.5,524.84074 213.15926,645.5 362,645.5 C510.84074,645.5 631.5,524.84074 631.5,376 C631.5,227.15926 510.84074,106.5 362,106.5 Z"
                      id="Oval"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="cercle-line-inner"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="348px"
          height="348px"
          viewBox="0 0 348 348"
          version="1.1"
        >
          <title>Oval</title>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="stonebranch-homepage-update-copy"
              transform="translate(-406, -3854)"
              fill="#FF7154"
              fillRule="nonzero"
            >
              <g id="Group-26" transform="translate(0, 3484)">
                <g id="Group-27" transform="translate(174, 138)">
                  <g id="Group-14" transform="translate(44.0672, 26.7665)">
                    <path
                      d="M361.932849,205.983546 C457.616182,205.983546 535.182849,283.550213 535.182849,379.233546 C535.182849,474.916879 457.616182,552.483546 361.932849,552.483546 C266.249516,552.483546 188.682849,474.916879 188.682849,379.233546 C188.682849,283.550213 266.249516,205.983546 361.932849,205.983546 Z M361.932849,208.483546 C267.630228,208.483546 191.182849,284.930925 191.182849,379.233546 C191.182849,473.536167 267.630228,549.983546 361.932849,549.983546 C456.23547,549.983546 532.682849,473.536167 532.682849,379.233546 C532.682849,284.930925 456.23547,208.483546 361.932849,208.483546 Z"
                      id="Oval"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          className="t3m-hybridCloud--logo"
          width="147px"
          height="166px"
          viewBox="0 0 147 166"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>Logo-horizontal blue-white</title>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="stonebranch-homepage-update"
              transform="translate(-506, -3946)"
              fillRule="nonzero"
            >
              <g id="Group-26" transform="translate(0, 3484)">
                <g id="Group-27" transform="translate(174, 138)">
                  <g id="Group-14" transform="translate(44.0672, 26.7665)">
                    <g
                      id="Logo-horizontal-blue-white"
                      transform="translate(289.1093, 298.2335)"
                    >
                      <path
                        d="M78.7196767,1.71610256 L138.284542,36.2840441 C142.256564,38.5891723 144.705882,42.8656823 144.705882,47.4957087 L144.705882,116.504291 C144.705882,121.134318 142.256564,125.410828 138.284542,127.715956 L78.7196767,162.283897 C74.7769324,164.572034 69.9289495,164.572034 65.9862052,162.283897 L6.42134025,127.715956 C2.44931752,125.410828 0,121.134318 0,116.504291 L0,47.4957087 C0,42.8656823 2.44931752,38.5891723 6.42134025,36.2840441 L65.9862052,1.71610256 C69.9289495,-0.572034185 74.7769324,-0.572034185 78.7196767,1.71610256 Z"
                        id="Combined-Shape-Copy-2"
                        stroke="#156DE0"
                        strokeWidth="2"
                      ></path>
                      <path
                        d="M78.2632278,6.60099812 L133.832889,38.8503582 C137.538494,41.0008741 139.823529,44.9905451 139.823529,49.3100209 L139.823529,113.689979 C139.823529,118.009455 137.538494,121.999126 133.832889,124.149642 L78.2632278,156.399001 C74.5849359,158.533666 70.0621226,158.533666 66.3838306,156.399001 L10.81417,124.149642 C7.10856344,121.999126 4.82352941,118.009455 4.82352941,113.689979 L4.82352941,49.3100209 C4.82352941,44.9905451 7.10856344,41.0008741 10.81417,38.8503582 L66.3838306,6.60099812 C70.0621226,4.46633396 74.5849359,4.46633396 78.2632278,6.60099812 Z"
                        id="Combined-Shape-Copy-2"
                        fill="#156DE0"
                      ></path>
                      <path
                        d="M47.8235294,104.351142 C47.8235294,109.847485 49.3378446,111.189532 54.7676672,112.412326 C57.2921391,113.022833 63.1010006,114 70.6762563,114 C90.2482737,114 97.8235294,108.015964 97.8235294,95.5584171 C97.8235294,85.2972718 92.645786,80.7780961 83.3041359,77.2360876 L70.1720979,72.2292183 C66.3835499,70.7625776 64.9961945,70.0292572 64.9961945,68.0749229 C64.9961945,65.8767417 66.7625888,64.778541 74.3396845,64.778541 C81.2838223,64.778541 85.1974898,65.6328949 87.8489213,66.2434019 C93.4038635,67.5872293 94.9200188,66.2434019 94.9200188,60.7470591 L94.9200188,59.5260451 C94.9200188,54.0297022 93.5308232,52.6858749 87.9758809,51.4648608 C86.4615657,51.0982007 82.1651795,50 74.5899238,50 C55.9047836,50 48.8336861,56.10507 48.8336861,67.9538894 C48.8336861,77.969408 53.88447,82.00089 61.9657242,85.2972718 L73.7085666,90.0602943 C80.1467059,92.6251356 81.6628611,93.4812694 81.6628611,95.6794505 C81.6628611,98.4881386 79.2635088,99.2214591 71.9403322,99.2214591 C62.9740409,99.2214591 57.925097,98.1214785 54.7676672,97.2671247 C49.2127249,95.800484 47.8235294,97.5109715 47.8235294,103.007314 L47.8235294,104.351142 Z"
                        id="Path"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </Box>

      {/* Orbitando os cards */}
      {items.map((item, index) => {
        const angle =
          (index / items.length) * (2 * Math.PI) + rotation * (Math.PI / 180);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={index}
            style={{ position: 'absolute' }}
            animate={{ x, y }}
          >
            <Box
              sx={{
                backgroundImage: 'url(/assets/home/hexagon-card.svg)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: 180,
                width: 180,
                p: 6,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                color="white"
                fontWeight={500}
                fontSize={20}
                textAlign="center"
              >
                {item}
              </Typography>
            </Box>
          </motion.div>
        );
      })}
    </Box>
  );
};
