import styles from './video.module.scss'
import Link from 'next/dist/client/link'
import cn from 'classnames'
import { VideoProps } from './types'
import ReactPlayer from 'react-player/lazy'
import { useEffect, useState } from 'react'

const Video = (props: VideoProps) => {
    const { videoUrl, modLayout = 'local' } = props

    /* <video autoPlay loop controls preload="none">
                            <source src={videoUrl} />
                        </video> */

    const [isSSR, setIsSSR] = useState(true)

    //let id = 'ysz5S6PUM-U'

    useEffect(() => {
        setIsSSR(false)
    }, [])

    function getThumb(str: string) {
        var id = str.split('=')[1]
        var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">'
        return thumb.replace('ID', id)
    }

    /*     function labnolThumb(id: string) {
        var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">'
        console.log(thumb.replace('ID', id))
        return thumb.replace('ID', id)
    }
 */
    return (
        <div className={styles.root}>
            {!isSSR && (
                <div className={styles.wrapper}>
                    {modLayout === 'youtube' && (
                        <div className={styles.videoBlock}>
                            <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" light controls={true}>
                                {getThumb(videoUrl)}
                            </ReactPlayer>
                        </div>
                    )}
                    {modLayout === 'local' && (
                        <div className={styles.videoBlock}>
                            <ReactPlayer url={videoUrl} controls={true} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Video
