import styles from './video.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import { VideoProps } from './types'
import ReactPlayer from 'react-player/lazy'
import { useEffect, useState } from 'react'
import { domainImage } from '../functions'

const Video = (props: VideoProps) => {
    const { videoUrl, modLayout = 'local' } = props

    const [isSSR, setIsSSR] = useState(true)

    useEffect(() => {
        setIsSSR(false)
    }, [])

    /*     function getThumb(str: string) {
        const id = str.split('=')[1]
        const thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">'
        return thumb.replace('ID', id)
    }
 */
    return (
        <div className={styles.root}>
            {!isSSR && (
                <div className={styles.wrapper}>
                    <div className={styles.videoBlock}>
                        {modLayout === 'ext' && (
                            <>
                                <ReactPlayer url={videoUrl} light controls={true}></ReactPlayer>
                            </>
                        )}
                        {modLayout === 'local' && (
                            <>
                                <ReactPlayer url={domainImage(videoUrl)} controls={true}></ReactPlayer>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Video
