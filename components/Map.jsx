'use client';

import Images from "next/image";
import {useMediaQuery} from 'react-responsive'
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {motion} from 'framer-motion'
import {fadeIn} from "@/variants";

const markets = [
    {
        position: [21.0213987, 105.8092943],
        title: 'Location 1',
        subtitle: '',
        image: '/map/1.png'
    },
    // {
    //     position: [33.9478, -118.3356],
    //     title: 'Location 2',
    //     subtitle: '',
    //     image: '/map/2.png'
    // },
    // {
    //     position: [34.0211, -118.3965],
    //     title: 'Location 1',
    //     subtitle: '',
    //     image: '/map/3.png'
    // },
]

const customIcon = new Icon({
    iconUrl: '/pin-solid.svg',
    iconSize: [40, 40]
})

const Map = () => {
    const isMobile = useMediaQuery({
        query: '(max-width:768px)'
    })

    return (
        <section>
            <MapContainer center={[21.0213987, 105.8092943]} zoom={isMobile ? 10 : 100}
                          className={`${isMobile ? 'h-[300px]' : 'h-[900px]'} z-10`} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"/>
                {/*markers*/}
                {markets.map((marker, index) => {
                    return <Marker key={index} position={marker.position} icon={customIcon} />
                })}
            </MapContainer>
        </section>)
}

export default Map;