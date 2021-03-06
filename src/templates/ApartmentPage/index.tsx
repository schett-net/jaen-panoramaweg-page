//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from 'react'
//> MDB
// "Material Design for Bootstrap" is a great UI design framework

import Footer from '../../components/molecules/Footer'
import {Navbar} from '../../components/molecules'
import {navigate} from 'gatsby-link'

//> SNEK
import {fields} from '@snek-at/jaen-pages'
import {JaenTemplate} from '@snek-at/jaen-pages/src/types'
import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Wrap
} from '@chakra-ui/react'
import {DownloadIcon} from '@chakra-ui/icons'
import {Link} from 'gatsby'
import ApartmentHidden from '../../components/organisms/ApartmentHidden'

import * as style from './style'
import ImageCollection from '../../components/organisms/ImageCollection'

const ApartmentPage: JaenTemplate = () => {
  const url = (typeof window !== 'undefined' && window.location.href) || ''
  const bgColor = useColorModeValue('panoramaweg.lightgray', 'gray.700')
  const breadcumbFontColor = useColorModeValue('#0645AD', 'white')

  let breadcrumbs = url.split('/')

  breadcrumbs = breadcrumbs.slice(
    breadcrumbs.length - 3,
    breadcrumbs.length - 1
  )

  function format(value: string[]) {
    if (value.length > 1) {
      value[0] = value[0].replace('haus', 'haus ')
      value[1] = value[1].replace('top', 'top ')
      for (let i = 0; i < value.length; i++) {
        value[i] = value[i].charAt(0).toUpperCase() + value[i].substring(1)
      }
    }
    return value
  }

  const parenthref = '/haus/' + breadcrumbs[0] + '/'
  let params: string[] = []
  params = params.concat(breadcrumbs)
  breadcrumbs = format(breadcrumbs)
  return (
    <style.responsiveImage>
      <Box
        as="section"
        id="apartmentpage"
        minH="100vh"
        overflow="hidden"
        paddingTop="140px"
        paddingBottom="115px">
        <Navbar />
        <Center mb="5">
          <Breadcrumb
            backgroundColor={bgColor}
            borderRadius="25px"
            w={['100%', '100%', '58vw', '58vw']}
            ml={['5', '5', '0', '0']}
            mr={['5', '5', '0', '0']}
            padding="3"
            color={breadcumbFontColor}>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link to="/">??bersicht</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link to={parenthref}>{breadcrumbs[0]}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>{breadcrumbs[1]}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Center>
        <Container centerContent mb="5" maxW="100%">
          <Heading>{breadcrumbs[0] + ' / ' + breadcrumbs[1]}</Heading>
          <fields.ChoiceField
            fieldName="apartmenttype"
            options={['Penthouse', '4-Zimmer', '3-Zimmer']}
            initValue="Penthouse"
            onRenderPopover={(selection, options, select) => {
              return (
                <Box>
                  {options.map((option, key) => {
                    return (
                      <Button
                        key={key}
                        colorScheme="gray"
                        variant="ghost"
                        onClick={() => select(option)}
                        disabled={option === selection}>
                        {option}
                      </Button>
                    )
                  })}
                </Box>
              )
            }}
            onRender={selection => {
              return (
                <Text mb="4" fontSize="xl" fontWeight="light">
                  {selection}
                </Text>
              )
            }}
          />
          <fields.ChoiceField
            fieldName="apartmentavailable"
            initValue="Verf??gbar"
            options={['Verf??gbar', 'Verkauft']}
            onRenderPopover={(selection, options, select) => {
              return (
                <Box>
                  {options.map((option, key) => {
                    return (
                      <Button
                        key={key}
                        disabled={option === selection}
                        onClick={() => select(option)}
                        textTransform="none"
                        variant="solid"
                        color="white"
                        backgroundColor={
                          option === 'Verf??gbar' ? '#77bd43' : '#f61a42'
                        }
                        fontSize="0.8rem"
                        paddingTop="3"
                        paddingBottom="3"
                        paddingLeft="8"
                        paddingRight="8"
                        _hover={
                          option === 'Verf??gbar'
                            ? {bg: '#6bab3c'}
                            : {bg: '#DD173B'}
                        }>
                        {option}
                      </Button>
                    )
                  })}
                </Box>
              )
            }}
            onRender={selection => {
              return (
                <Badge
                  textTransform="none"
                  variant="solid"
                  color="white"
                  backgroundColor={
                    selection === 'Verf??gbar' ? '#77bd43' : '#f61a42'
                  }
                  fontSize="0.8rem"
                  paddingTop="3"
                  paddingBottom="3"
                  paddingLeft="8"
                  paddingRight="8">
                  {selection}
                </Badge>
              )
            }}
          />
        </Container>
        <Container maxW={['100%', '100%', '70%', '70%']}>
          <Wrap spacing="7" justify="center">
            <Box
              border={['0px', '0px', '1px', '1px']}
              borderColor={[
                '',
                '',
                'panoramaweg.lightgray',
                'panoramaweg.lightgray'
              ]}
              borderRadius="25px"
              minH="40vh"
              w={['300px', '300px', '600px', '600px']}>
              <Box padding="4">
                <VStack spacing="5">
                  <Container centerContent>
                    <Text fontSize="1.1rem">Wohnungsgr????e</Text>
                    <Flex>
                      <Box fontSize="1.5rem" fontWeight="bold">
                        <fields.TextField
                          fieldName="apartmentsize"
                          initValue="0"
                          rtf={false}
                        />
                      </Box>
                      <Text ml="1" fontSize="1.5rem" fontWeight="bold">
                        m??
                      </Text>
                    </Flex>
                    <>
                      <ApartmentHidden />
                    </>
                    <Text color="gray" fontSize="xs">
                      exkl. Balkon
                    </Text>
                  </Container>
                  <Container centerContent>
                    <Text fontSize="1.1rem">Preis</Text>
                    <Flex fontSize="1.5rem" fontWeight="bold">
                      <fields.TextField
                        fieldName="apartmentprice"
                        initValue="0"
                        rtf={false}
                      />
                      <Text ml="1">???</Text>
                    </Flex>
                    <Text fontSize="xs" color="gray">
                      inkl. Provision
                    </Text>
                  </Container>
                  <Container centerContent>
                    <Text fontSize="1.1rem">Wohnungstyp</Text>
                    <fields.ChoiceField
                      fieldName="apartmenttype"
                      options={['Penthouse', '4-Zimmer', '3-Zimmer']}
                      initValue="Penthouse"
                      onRenderPopover={(selection, options, select) => {
                        return (
                          <Box>
                            {options.map((option, key) => {
                              return (
                                <Button
                                  key={key}
                                  colorScheme="gray"
                                  variant="ghost"
                                  onClick={() => select(option)}
                                  disabled={option === selection}>
                                  {option}
                                </Button>
                              )
                            })}
                          </Box>
                        )
                      }}
                      onRender={selection => {
                        return (
                          <Text fontSize="1.5rem" fontWeight="bold" mb="3">
                            {selection}
                          </Text>
                        )
                      }}
                    />
                  </Container>
                </VStack>
                <Container centerContent>
                  <Button
                    backgroundColor="panoramaweg.green"
                    _hover={{bg: '#6bab3c'}}
                    color="white"
                    borderRadius="25px"
                    size="lg"
                    fontSize="xs"
                    paddingLeft="8"
                    paddingRight="8"
                    onClick={() =>
                      navigate(`/kontakt/?top=${params[1]}&house=${params[0]}`)
                    }>
                    Kontakt
                  </Button>
                </Container>
              </Box>
            </Box>
            <fields.ImageField
              fieldName="apartmentrightimg"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'rightimg'
              }}
              borderRadius="25px"
              objectFit="fill"
              className="responsiveImage"
            />

            <fields.ImageField
              fieldName="apartmentleftimg"
              initValue={{
                src: 'https://i.ibb.co/J2jzkBx/placeholder.jpg',
                alt: 'lefttimg'
              }}
              borderRadius="25px"
              objectFit="fill"
              className="responsiveImage"
            />
            <Box
              border={['0px', '0px', '1px', '1px']}
              borderColor={[
                'panoramaweg.lightgray',
                'panoramaweg.lightgray',
                'panoramaweg.lightgray',
                'panoramaweg.lightgray'
              ]}
              borderRadius="25px"
              minH="40vh"
              w={['300px', '300px', '600px', '600px']}>
              <Box
                padding="4"
                fontSize="1.1rem"
                borderBottom={['1px', '1px', '0px', '0px']}
                borderColor={[
                  'panoramaweg.lightgray',
                  'panoramaweg.lightgray'
                ]}>
                <fields.TextField
                  fieldName="apartmentrichtextright"
                  initValue="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"
                />
              </Box>
            </Box>
          </Wrap>
        </Container>
        <Container
          pb="2"
          mt={['5', '5', '12', '12']}
          borderBottom="1px"
          borderColor="panoramaweg.lightgray"
          maxW={['85%', '85%', '70%', '70%']}>
          <Text fontSize="1.1rem" fontWeight="light" maxW="100%">
            <fields.TextField
              fieldName="apartmentbottomrichtext"
              initValue="<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>"
            />
          </Text>
          <Button
            leftIcon={<DownloadIcon color="white" />}
            backgroundColor="gray.600"
            _hover={{bg: 'gray.500'}}
            borderRadius="25px"
            textColor="white"
            fontSize="sm"
            fontWeight="light"
            mt="3"
            mb="5">
            Bau und Ausstattungsbeschreibung
          </Button>
        </Container>
        <Box as="div" mt="5" mb="10"></Box>
        <Container as="div" centerContent mt="5" mb="10">
          <Heading>Interessiert?</Heading>
          <Button
            backgroundColor="panoramaweg.green"
            _hover={{bg: '#6bab3c'}}
            color="white"
            variant="solid"
            borderRadius="25px"
            size="lg"
            onClick={() =>
              navigate(`/kontakt/?top=${params[1]}&house=${params[0]}`)
            }>
            Kontaktiere uns
          </Button>
        </Container>
        <Center>
          <ImageCollection />
        </Center>
        <Footer />
      </Box>
    </style.responsiveImage>
  )
}
//#endregion

ApartmentPage.TemplateName = 'ApartmentPage'

//#region > Exports
export default ApartmentPage
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright ?? 2021 Christian Aichner
 */
