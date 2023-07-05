import Head from 'next/head'
import { Button, Text, Center, Box, Container, Flex, Heading, Link, Spacer, useMediaQuery, useColorModeValue, Image } from '@chakra-ui/react'
import { useColorMode } from "@chakra-ui/color-mode";
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import styled from '@emotion/styled'
import Section from '../components/Section'
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import { BsChevronRight } from "react-icons/bs";
import Layout from '../components/layout/Layout';

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  font-weight: 400;
  padding-bottom: 10px;
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
  font-weight: 400;
`

const Home = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isLargerThan650] = useMediaQuery('(min-width: 650px)')
    const [isLargerThan6502] = useMediaQuery('(max-width: 650px)')
    const downloadFile = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = 'https://anupam-homepage.vercel.app/Anupam%Kumar%Khamrai%Portfolio.pdf';
        downloadLink.download = 'Anupam Kumar Khamrai CV.pdf';
        downloadLink.click();
    };
    return (
        <>
            <Head>
                <title>Sourav Bose - Homepage</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
                <link rel="favicon" href="https://anupam-homepage.vercel.app/favicon.png" />
                <link rel="shortcut icon" href="https://anupam-homepage.vercel.app/favicon.png" type="image/x-icon" />

                <meta name="description" content="Greeting there ! My name is Sourav Bose. I am a developer. Welcome to my portfolio website! ❤️" />

                <meta itemProp="name" content="Anupam Kumar Khamrai - Homepage" />
                <meta itemProp="description" content="Greeting there ! My name is Sourav Bose. I am a developer. Welcome to my portfolio website! ❤️" />
                <meta itemProp="image" content="https://anupam-homepage.vercel.app/favicon.png" />

                <meta property="og:url" content="https://anupam-homepage.vercel.app" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Sourav Bose - Homepage" />
                <meta property="og:description" content="Greeting there ! My name is Sourav Bose. I am a  developer. Welcome to my portfolio website! ❤️" />
                <meta property="og:image" content="https://anupam-homepage.vercel.app/favicon.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Anupam Kumar Khamrai - Homepage" />
                <meta name="twitter:description" content="Greeting there ! My name is Sourav Bose. I am a  developer. Welcome to my portfolio website! ❤️" />
                <meta name="twitter:image" content="https://anupam-homepage.vercel.app/favicon.png" />
                <meta name="twitter:site" content="@anupam-homepage" />
                <meta name="twitter:creator" content="@1Khamrai" />
            </Head>
                <Section delay={0.1}>
                    <Box fontSize="15px" fontWeight="semibold" border="lg" mb="5" mt="40" p="3" textAlign="center" borderRadius="8px" bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.200')} style={{ backdropFilter: 'blur(10px)' }}>
                        Hello there, I&apos;m Sourav a Developer from India.
                    </Box>
                    <div>
                        {isLargerThan650 &&
                            <p>
                                <Flex>
                                    <Box ml="2" pt="5" mt="5">
                                        <Heading size="lg" fontFamily="'M PLUS Rounded 1c', sans-serif;">
                                            Sourav Bose
                                        </Heading>
                                        <p><Text fontWeight="semibold" pt="3" fontSize="15px">( Developer / Digital Content Creator )</Text></p>
                                    </Box>
                                    <Spacer></Spacer>
                                    <Image border="2px" mt="8" mr="5" borderRadius='full' boxSize='100px' src='anupamlite.jpg' alt='Anupam Kumar Khamrai Image Social' ml="6" />
                                </Flex>
                            </p>
                        }
                    </div>
                    <div>
                        {isLargerThan6502 &&
                            <p>
                                <Center>
                                    <Heading size="" textAlign="center" fontFamily="'M PLUS Rounded 1c', sans-serif;">
                                        Sourav Bose
                                    </Heading>
                                </Center>
                                <Center>
                                    <p><Text fontWeight="semibold" pt="3" fontSize="inherit" textAlign="center">( Developer / Digital Content Creator )</Text></p>
                                </Center>
                                <Center mt="8">
                                    <Image border="2px" borderRadius='full' boxSize='150px' src='anupamlite.jpg' objectFit="cover" loading='eager' alt='Anupam Kumar Khamrai Image Social' />
                                </Center>
                            </p>
                        }
                    </div>
                </Section>
                <Section delay={0.3}>
                    <Flex mt="12">
                        <Text pl="2" style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif", fontSize: 20, fontWeight: "bold", lineHeight: 1, marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
                            Work
                        </Text>
                    </Flex>
                    <Text fontWeight={400} fontSize="16px" ml="2" mr="2" mt="3" textAlign="justify">
                        &nbsp;&nbsp;My name is Sourav, a BCA student interested in web development and automation. I love bringing ideas to life and experimenting with new tools to create efficient applications. I am also an anime enthusiast and enjoy watching different genres of anime and reading manga.
                    </Text>
                    <Center>
                        <Button mt="5" colorScheme="teal" _hover={{ cursor: "pointer",colorScheme: "whatsapp" }}>
                            <Link href='/doc/Anupam Kumar Khamrai CV.pdf' download textDecoration="none" textAlign="center" css={{display:"flex"}} _hover={{textDecoration: "none"}}>
                                My CV &nbsp; <BsChevronRight />
                            </Link>
                        </Button>
                    </Center>
                </Section>
                <Section delay={0.5}>
                    <Flex mt="12">
                        <Text pl="2" style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif", fontSize: 20, fontWeight: "bold", lineHeight: 1, marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
                            Bio
                        </Text>
                    </Flex>
                    <Box ml="2" pb="3" mt="3">
                        <BioSection>
                            <BioYear>2003</BioYear>
                            Born in Kharagpur, West Bengal, India.
                        </BioSection>
                        <BioSection>
                            <BioYear>2018</BioYear>
                            Completed Secondary Education at Kharagpur Silver Jubilee High School.
                        </BioSection>
                        <BioSection>
                            <BioYear>2020</BioYear>
                            Completed Higher Secondary Education at Kharagpur Silver Jubilee High School.
                        </BioSection>
                        <BioSection>
                            <BioYear>2023</BioYear>
                            Pursuing BCA at Midnapore College Autonomous and Freelancing.
                        </BioSection>
                    </Box>
                </Section>
                <Section delay={0.7}>
                    <Flex>
                        <Text pl="2" style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif", fontSize: 20, fontWeight: "bold", lineHeight: 1, marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
                            <Flex>I <Text textColor="pink.300">&nbsp;♥</Text></Flex>
                        </Text>
                    </Flex>
                    <Text pl="2" mt="3" fontWeight="semibold">
                        &nbsp;&nbsp;&nbsp;Music, Cricket, Anime.
                    </Text>
                </Section>
                <Section delay={0.9}>
                    <Flex mt="12" mb="2">
                        <Text pl="2" style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif", fontSize: 20, fontWeight: "bold", lineHeight: 1, marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "#525252", textDecorationThickness: 4, textUnderlineOffset: 6 }}>
                            On the web
                        </Text>
                    </Flex>
                    <Flex flexDirection="column" alignItems="baseline">
                        <Button variant="ghost" color="teal.300" ><FaTwitter /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://twitter.com/SouravBose255' isExternal>@SouravBose255</Link></Button>
                        <Button variant="ghost" color="teal.300" ><FaFacebook /><Link ml="4" textDecoration="none" _hover={{ lineHeight: [1.33, null, 1.2], marginBottom: 4, marginTop: 3, textDecoration: "underline", textDecorationColor: "pink", textDecorationThickness: 2, textUnderlineOffset: 3 }} href='https://www.facebook.com/sourav.bose.31521?eav=AfbXoQszxTuMfr_PZhlt-XI__lukFR6IwrI1Zt5z7ez_cS1VncTgJOIOKzlMLluxpe0&paipv=0&_rdr' isExternal>@SouravBose</Link></Button>
                        
                    </Flex>
                </Section>
        </>
    )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false })
