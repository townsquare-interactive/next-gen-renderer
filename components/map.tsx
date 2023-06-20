'use client'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import Link from 'next/link'
import L from 'leaflet'
import dynamic from 'next/dynamic'

const marker = 'https://townsquareinteractive.s3.amazonaws.com/global-assets/placeholder.png'
const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor: [-0, -0],
    iconSize: [32, 32],
})

//['fab', 'google']

const position: LatLngTuple = [35.248434104850894, -80.80578988974007]

/* export const MapWithNoSSR = dynamic(() => <Map />, {
    ssr: false,
})
 */
/* export const MapLoad = (props: any) => {
    return <MapWithNoSSR />
} */

export const Map = (props: any) => {
    //const { page, siteData } = props

    return (
        <>
            {/*  <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                //crossorigin=""
            /> */}

            <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={myIcon}>
                    <Popup>
                        <Link href="https://goo.gl/maps/fD4SbbjUX4S9aXax7" target={'_blank'}>
                            Cabo Fish Taco
                        </Link>
                    </Popup>
                </Marker>
            </MapContainer>
            {/*             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26069.674739505677!2d-80.82843240106648!3d35.23860483917378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fd9953c7269%3A0xa7b3d0046342da11!2sCabo%20Fish%20Taco!5e0!3m2!1sen!2sus!4v1687207193118!5m2!1sen!2sus"
                width="100%"
                height="450"
                loading="lazy"
            ></iframe> */}
        </>
    )
}
