import styles from './list.module.scss'
import { ArticleProps } from './types'
import Image from 'next/image'
import cn from 'classnames'
import Parser from 'html-react-parser'
import { domainImage } from '../functions'

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

    return (
        /*  <div
            className={cn(styles.root)}
        >
            <div
                className={cn(styles.wrapper, {
                    [styles.bordered]: border === true,
                    [styles.imageArticle]: imageUrl && modLayout != 'card',
                    [styles.reverse]: reverse,
                })}
                style={themeStylesObj}
            >
                {modLayout == 'card' && (
                    <div className={styles.title} style={headingColor}>
                        <div className={styles.textGutter}></div>
                        <div className={styles.insideTextGutter}></div>
                        <div className={styles.titleText}>
                            <h2 className={styles.text}>{headline || ''}</h2>
                        </div>
                        <div className={cn(styles.textGutter, styles.textGutter_2)}></div>
                    </div>
                )}

                <div className={styles.features}>
                    {modLayout === 'card' && (
                        <div className={styles.colorBlock}>
                            <div className={styles.colorFill} style={gutterStyle}></div>
                        </div>
                    )}

                    <div className={styles.imageBlock}>
                        <div className={styles.blockPicture}>
                            {imageUrl && (
                                <Image
                                    src={domainImage(imageUrl)}
                                    height="450px"
                                    width="600px"
                                    layout="responsive"
                                    objectFit="cover"
                                    alt={altText}
                                    quality="50"
                                />
                            )}
                        </div>
                    </div>

                    
                </div>
            </div>
        </div> */
        <div className="item_1 the_list_item  not_hero yes_image yes_heads yes_desc" lang="en">
            <div className="the_list_wrap">
                <div className="the_list_item_image">
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
                        {props.image && <Image className="item_image beacon-lazy-load" src={props.image} layout="fill" alt="unsure" />}
                    </a>
                </div>
                <div className="the_list_item_heads">
                    <h1 className="the_list_item_headline hds_color">{props.headline}</h1>
                    <h3 className="the_list_item_subheadline hds_color">{props.subheader}</h3>
                </div>
                <div className="the_list_item_desc txt_color">
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Article
