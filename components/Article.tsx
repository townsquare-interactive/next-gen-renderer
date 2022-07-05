import styles from './article.module.scss'
import { ArticleProps, Media } from './types'
import Image from 'next/image'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { domainImage } from '../functions'
import { useState } from 'react'

const Article = (props: ArticleProps) => {
    /*  const themeStylesObj = {
        backgroundColor: border ? `${themeStyles['accentBackgroundColor']}` : 'transparent',
      
    }

    const headingColor = {
        color: border ? `${themeStyles['textColorAccent']}` : `${themeStyles['headingColor']}`,
    }
    const textColor = {
        color: border ? `${themeStyles['textColorAccent']}` : `${themeStyles['textColor']}`,
    }

    const gutterStyle = {
        backgroundColor: `${themeStyles['mainColor']}`,
    } */
    const [imageHeight, setHeight] = useState(100)
    const [imageWidth, setWidth] = useState(300)

    const calcImageSize = (loadedMedia: Media) => {
        setWidth(loadedMedia.naturalWidth)
        setHeight(loadedMedia.naturalHeight)
    }

    //non constrained images
    const imageNoSizings = ['no_sizing', 'no_set_height']

    return (
        <div
            id="section_1"
            className={cn(
                styles['list_block'],
                styles['type_article'],
                styles['a1'],
                styles['column_amt_1 '],

                styles['large '],
                styles['not_well '],
                {
                    [styles.square_1_1]: props.imgSize === 'square_1_1',
                    [styles.landscape_4_3]: props.imgSize === 'landscape_4_3',
                    [styles.landscape_3_2]: props.imgSize === 'landscape_3_2',
                    [styles.portrait_3_4]: props.imgSize === 'portrait_3_4',
                    [styles.portrait_2_3]: props.imgSize === 'portrait_2_3',
                    [styles.widescreen_16_9]: props.imgSize === 'widescreen_16_9',
                    [styles.widescreen_3_1]: props.imgSize === 'widescreen_3_1',
                    [styles.widescreen_2_4_1]: props.imgSize === 'widescreen_2_4_1',
                    [styles.no_sizing]: props.imgSize === 'no_sizing',
                    [styles.no_set_height]: props.imgSize === 'no_set_height',
                }
            )}
        >
            {props.items.map((item, index) => (
                <div
                    className={cn(styles['the_list_item'], 'item_1', 'the_list_item', 'yes_image', 'yes_heads', 'yes_desc', {
                        [styles.the_list_item_right]: item.align === 'right',
                        [styles.the_list_item_left]: item.align === 'left',
                        [styles.hero]: item.isFeatured === 'active',
                    })}
                    lang="en"
                    key={index}
                >
                    <div className={styles.the_list_wrap}>
                        {item.image && (
                            <div
                                className={cn(styles['the_list_item_image'], {
                                    [styles.right]: item.align === 'right',
                                    [styles.left]: item.align === 'left',
                                })}
                            >
                                <a data-title="This is our article page : first element">
                                    {/*                       <img
                                    alt="This is our article page : first element"
                                    data-src=""
                                    data-lazy-load-img-src="/files/2019/03/1553524133677_pasta_with_meatballs_and_parsl_57257360.jpg?w=1440&amp;h=1080&amp;a=t"
                                     border="0" 
                                    className="item_image beacon-lazy-load"
                                    src="/files/2019/03/1553524133677_pasta_with_meatballs_and_parsl_57257360.jpg?w=1440&amp;h=1080&amp;a=t"
                                     style="display: inline;" 
                                /> */}
                                    {/* {props.imgSize != 'nosizing' ? ( */}
                                    {!imageNoSizings.includes(props.imgSize) ? (
                                        <Image
                                            className={cn(styles['item_image'], 'item_image', 'beacon-lazy-load')}
                                            src={domainImage(item.image)}
                                            layout="fill"
                                            alt="unsure"
                                            objectFit="cover"
                                        />
                                    ) : (
                                        //Setting width and height to image props if nosizing added
                                        <Image
                                            src={domainImage(item.image)}
                                            alt="logo"
                                            onLoadingComplete={calcImageSize}
                                            width={imageWidth}
                                            height={imageHeight}
                                            layout="responsive"
                                        />
                                    )}
                                </a>
                            </div>
                        )}
                        <div className="the_list_item_heads">
                            <h1 className={cn(styles['the_list_item_headline'], 'hds_color')}>{Parser(item.headline)}</h1>
                            <h3 className={cn(styles['the_list_item_subheadline'], 'hds_color')}>{Parser(item.subheader)}</h3>
                        </div>
                        <div className={cn(styles['the_list_item_desc'], 'txt_color')}>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Article
