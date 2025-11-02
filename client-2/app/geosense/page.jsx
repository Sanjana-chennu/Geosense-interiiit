'use client'
import MapComponent from '@/components/MapComponent'
import SideBar from '@/components/SideBar'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'

const page = () => {
  const [textMode, setTextMode] = useState(false)
  const [features, setFeatures] = useState([])
  const [editDetails, setEditDetails] = useState({ id: null, newText: '' });
  const [selectionHandlers, setSelectionHandlers] = useState(null);

  const handleSegmentationComplete = async () => {
    const mapComponent = document.querySelector('#map-container');
    if (mapComponent && mapComponent.fetchSegmentationData) {
      await mapComponent.fetchSegmentationData();
    }
  };

  // const MapComponentWithoutSSR = dynamic(() => import('@/components/MapComponent'), { ssr: false });
  return (
    <>
          <div className='w-full h-full' >
    
            {/* Main Component */}
            <div id="main-container">
              <MapComponent
                textMode={textMode} 
                editDetails={editDetails} 
                features={features}
                setFeatures={setFeatures}
                setSelectionHandlers={setSelectionHandlers}
              />
              {/* <EditMode textMode={textMode} setTextMode={setTextMode}/> */}
            </div>
    
            {/* Sidebar */}
            <SideBar 
              features={features} 
              setEditDetails={setEditDetails}
              onSegmentationComplete={handleSegmentationComplete}
              selectionHandlers={selectionHandlers}
            />
          </div>
        </>
  )
}

export default page
