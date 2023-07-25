'use client'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import Link from 'next/link'
import L from 'leaflet'
import { MapAddress } from '../types'

const Map = (props: { address: MapAddress; mapTitle: string }) => {
    const { address, mapTitle } = props

    const marker = 'https://townsquareinteractive.s3.amazonaws.com/global-assets/placeholder.png'
    const myIcon = new L.Icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
        popupAnchor: [-0, -0],
        iconSize: [32, 32],
    })

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
        </div>
    )
}

export default Map
