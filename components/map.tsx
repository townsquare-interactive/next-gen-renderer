'use client'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import Link from 'next/link'
import L from 'leaflet'
//import dynamic from 'next/dynamic'

const marker = 'https://townsquareinteractive.s3.amazonaws.com/global-assets/placeholder.png'
const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor: [-0, -0],
    iconSize: [32, 32],
})

/* export const MapWithNoSSR = dynamic(() => <Map />, {
    ssr: false,
})
 */
/* export const MapLoad = (props: any) => {
    return <MapWithNoSSR />
} 
*/

export const Map = (props: any) => {
    const { address } = props
    //const { page, siteData } = props

    /*     const addy = {
        street: '17035 Soho Drive',
        zip: '28204',
        state: 'NC',
        city: 'Charlotte',
    }

    //const coords = await getAddressCoords(addy)
    //console.log(coords) */
    const position: LatLngTuple = address.coordinates

    return (
        <div>
            <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={myIcon}>
                    <Popup>
                        <Link href={address.url || ''} target={'_blank'}>
                            {address.street}
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
        </div>
    )
}
