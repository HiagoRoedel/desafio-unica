import { headers } from 'next/headers'
import './globals.css'
import Header from '../components/header/header'
import Banner from '../components/mainBanner/banner'
import Gif from '../components/gif/gif'
import PerfectForYou from '../components/perrfectforyou/perfectforyou'
import Construct from '../components/construct/construct'
import Future from '../components/future/future'
import Education from '../components/education/education'
import Modality from '../components/modality/modality'
import Depoiments from '../components/depoiments/depoiments'
import Faq from '../components/faq/faq'
import List from '../components/list/list'
import Footer from '../components/footer/footer'

export default function Page() {
  const headersList = headers()
  const referer = headersList.get('referer')
 
  return(
    <>
   
    <Header />
    <Banner />
    <Gif />
    <PerfectForYou />
    <Construct />
    <Future />
    <Education />
    <Modality />
    <Depoiments />
    <Faq />
    <List />
    <Footer />
   
    
    </>
  )
}