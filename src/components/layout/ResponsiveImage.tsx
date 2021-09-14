import {Box} from '@chakra-ui/react'

import styled from '@emotion/styled'

import {mq} from '../../utils'

export const ResponsiveImage = styled(Box)`
  .responsiveImage {
    ${mq[0]} {
      width: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    ${mq[1]} {
      width: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    ${mq[2]} {
      width: 22vw;
    }
    ${mq[3]} {
      width: 22vw;
    }
  }
`