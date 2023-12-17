import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {store} from "../app/store"
import {Provider } from 'react-redux'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {propertyApi} from '../features/apiSlice'
import {Header} from '../components/Header'
import {Navigation} from '../components/Navigation'
// import {Property} from '../components/Property'
// import {Banner} from '../components/Banner'
// import {Featured} from '../components/Featured'
// import {BestProperty} from '../components/BestDeal'


export default function App({ Component, pageProps }) {
  return (

    <Provider store={store}>
        <ApiProvider api={propertyApi}>

    <Header/>
    <Navigation/>
    <Component {...pageProps} />
    
    {/* <Banner/>
    <Property/> 
    <Featured/>
    <BestProperty/>   */}

    </ApiProvider>
  
       </Provider> 
  );
 
}
