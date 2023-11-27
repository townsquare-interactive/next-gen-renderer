'use client'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'
import Link from 'next/link'
import L from 'leaflet'
import { MapAddress, GlobalData } from '../types'
import styles from './map.module.scss'
import { useEffect, useState } from 'react'

const MapWrapper = (props: { addresss?: MapAddress; mapTitle: string; siteData: GlobalData }) => {
    const [isWindow, checkWindow] = useState(false)
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            checkWindow(true)

        }
    }, [])
    

    return <>{isWindow && <Map {...props} />}</>
}

const Map = (props: { addresss?: MapAddress; mapTitle: string; siteData: GlobalData }) => {
    const { mapTitle, siteData } = props
    //const [isWindow, checkWindow] = useState(false)
    const [mapIcon, setMapIcon] = useState<any>()
    

    const marker = 'https://townsquareinteractive.s3.amazonaws.com/global-assets/placeholder.png'

    setMapIcon(
        new L.Icon({
            iconUrl: marker,
            iconRetinaUrl: marker,
            popupAnchor: [-0, -0],
            iconSize: [32, 32],
        })
    )

    const address = siteData.contact.address

    const position: LatLngTuple = [address.coordinates.lat, address.coordinates.long]

    return (
        <div className={styles.root}>
            {position && position.length > 1 && (
                <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={mapIcon}>
                        <Popup>
                            <Link href={address.url || ''} target={'_blank'}>
                                {address.street}
                            </Link>
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </div>
    )
}

export default MapWrapper
