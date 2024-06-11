import { headers } from 'next/headers'
import './globals.css'
import Header from '../components/header/header'
import Banner from '../components/mainBanner/banner'
import Gif from '../components/gif/gif'
import PerfectForYou from '../components/perrfectforyou/perfectforyou'

export default function Page() {
  const headersList = headers()
  const referer = headersList.get('referer')
 
  return(
    <>
    <Header />
    <Banner />
    <Gif />
    <PerfectForYou />
    </>
  )
}