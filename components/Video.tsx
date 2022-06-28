import styles from './video.module.scss'
import { VideoProps } from './types'
import ReactPlayer from 'react-player/lazy'
import { useEffect, useState } from 'react'
import { domainImage } from '../functions'

const Video = (props: VideoProps) => {
    const { videoUrl, modLayout = 'local' } = props
    const [isSSR, setIsSSR] = useState(true)

    //Setting state to false on load to avoid Hydration Error
    useEffect(() => {
        setIsSSR(false)
    }, [])

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
