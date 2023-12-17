import React from 'react';
import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {store} from "../app/store"
import {Provider } from 'react-redux'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import {propertyApi} from '../features/apiSlice'
import {Banner} from '../components/Banner'
import {Featured} from '../components/Featured'
import {BestProperty} from '../components/BestDeal'


export default function Home() {
  return (

    <Provider store={store}>
    
        <ApiProvider api={propertyApi}>
    
    <Banner/>
    <Featured/>
    <BestProperty/> 

     </ApiProvider> 
  
      </Provider> 
  );
 
}
