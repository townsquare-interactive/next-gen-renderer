import { ImagesProps, ListProps, HomeProps, ModuleData } from '../components/types'

const data: ModuleData = {
    logoUrl: '/company-logo.png',
    //logoUrl: '/juan-test-015.jpg',
    //logoUrl: '/images/logo-test.png',
    imagesData: {
        gap: true,
        modLayout: '3-2/3',

        items: [
            {
                imageUrl: '/juan-test-015.jpg',
                linkText: 'Menu',
                linkUrl: '/menu',
                body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor',
                //headline: 'Hello',
            },
            {
                imageUrl: '/juan-test-016.jpg',
                linkText: 'Images',
                body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor',
            },
            {
                imageUrl: '/juan-test-011.jpg',
                linkText: 'Blog',
                linkUrl: '/blog',
                body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor',
            },
        ],
    },

    listData: {
        headline: 'Headline for text',
        body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
        imageUrl: '/juan-test-008.jpg',
        border: true,
        linkUrl: '/',
        btnText: 'Contact Us',
        modLayout: 'article',
        textSize: 'md',
        align: 'left',
        reverse: false,
    },

    headerData: {
        headline: 'My Website',
        imageUrl: '/juan-test-014.jpg',
        backgroundImageUrl: '/seamless-5178982.png',
        reverse: false,
        modLayout: 'normal',
    },

    labelData: {
        text: 'Images Module',
        gap: true,
        align: 'left',
        border: true,
        textSize: 'md',
    },

    textData: {
        gap: false,
        align: 'left',
        border: false,
        textSize: 'md',
        text: '<b>Text:</b>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <ul><li>sed do eiusmod tempor</li><li>sed do eiusmod tempor</li><li>sed do eiusmod tempor</li></ul>',
    },

    carouselData: {
        modLayout: 'text',
        slideCount: 3,
        autoPlay: false,
        items: [
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                imageUrl: '/juan-test-010.jpg',
                byline: '-Rupert Tolson',
            },
            {
                text: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                imageUrl: '/juan-test-001.jpg',
                byline: '-Jeff Grover',
            },
            {
                text: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                imageUrl: '/juan-test-002.jpg',
                byline: '-Mark Ilten',
            },
            {
                text: ' proident, sunt in culpa qui officia deserunt mollit anim id est laborum. proident, sunt in culpa qui officia deserunt mollit anim id est laborum.proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                imageUrl: '/juan-test-005.jpg',
                byline: '-Sarah Patterson',
            },
        ],
    },

    footerData: {
        socialData: [
            {
                linkUrl: 'https://www.google.com/',
            },
            {
                linkUrl: 'https://www.facebook.com',
            },
            {
                linkUrl: 'https://www.instagram.com',
            },
            {
                linkUrl: 'https://www.twitter.com',
            },
        ],
        pages: [
            {
                name: 'Home',
                slug: '/',
                id: '0',
            },
            {
                name: 'Menu',
                slug: '/menu',
                id: '1',
            },
            {
                name: 'Images',
                slug: '',
                id: '2',
            },
            {
                name: 'Blog',
                slug: '/blog',
                id: '3',
            },
            {
                name: 'Module Descriptions',
                slug: '/module-descriptions',
                id: '4',
            },
            {
                name: 'About Us',
                slug: '/',
                id: '5',
            },
            {
                name: 'Our Sponsors',
                slug: '/',
                id: '6',
            },
            {
                name: 'Blog',
                slug: '/blog',
                id: '7',
            },
            {
                name: 'Contact',
                slug: '/',
                id: '8',
            },
            {
                name: 'Our Projects',
                slug: '/',
                id: '9',
            },
            {
                name: 'Other',
                slug: '/',
                id: '10',
            },
        ],
        addressData: {
            street: '444 happy road',
            cityState: 'Townsville, Georgia',
            zip: '47384',
        },

        siteName: 'Travel 365',
        phoneNumber: '922-444-2849',
    },

    navData: {
        pages: [
            {
                name: 'Home',
                slug: '/',
                id: '0',
            },
            {
                name: 'Menu',
                slug: '/menu',
                id: '1',
            },
            {
                name: 'Images',
                slug: '/images',
                id: '2',
            },
            {
                name: 'Blog',
                slug: '/blog',
                id: '3',
            },
            {
                name: 'Module Descriptions',
                slug: '/module-descriptions',
                id: '4',
            },
            {
                name: 'About Us',
                slug: '/',
                id: '5',
            },
            {
                name: 'Our Sponsors',
                slug: '/',
                id: '6',
            },
            {
                name: 'Blog',
                slug: '/blog',
                id: '7',
            },
            {
                name: 'Contact',
                slug: '/',
                id: '8',
            },
            {
                name: 'Our Projects',
                slug: '/',
                id: '9',
            },
            {
                name: 'Other',
                slug: '/',
                id: '10',
            },
        ],
        navStyle: 'layout1',
        borderNum: 7,
        navImage: 'https://townsquareinteractivetest.s3.amazonaws.com/Assets/juan-test-012.jpg',
    },
    videoData: {
        //modLayout: 'local',
        modLayout: 'ext',
        //videoUrl: '/videos/local_vid.mp4',
        videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
        //videoUrl: 'https://vimeo.com/300544856',
        //videoUrl: 'https://youtu.be/Qt0-9mO-ZXY',
    },

    gridData: {
        items: [
            {
                //headline: 'Headline for text',
                body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab',
                imageUrl: '/juan-test-012.jpg',
                // linkUrl: '/',
                //btnText: 'Contact Us',
                textSize: 'md',
                align: 'left',
            },
            {
                body: ' Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
                imageUrl: '/juan-test-010.jpg',
                /*            border: false,
                linkUrl: '/',
                btnText: 'Contact Us',
                textSize: 'md',
                align: 'left', */
            },

            {
                body: ' Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
                imageUrl: '/juan-test-011.jpg',
                /*                linkUrl: '/',
                headline: 'Headline for text',
                btnText: 'Contact Us',
                textSize: 'md',
                align: 'left', */
            },

            {
                headline: 'Headline 1',
                body: ' totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,  ',
                imageUrl: '/juan-test-009.jpg',
                linkUrl: '/',
                btnText: 'Contact Us',
                textSize: 'sm',
                align: 'left',
                border: true,
            },

            {
                headline: 'Headline 2',
                body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  ',
                imageUrl: '/juan-test-008.jpg',
                linkUrl: '/',
                btnText: 'Contact Us',
                textSize: 'sm',
                align: 'left',
            },

            {
                headline: 'Headline 3',
                body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa  ',
                imageUrl: '/juan-test-006.jpg',
                linkUrl: '/',
                btnText: 'Contact Us',
                textSize: 'sm',
                align: 'left',
                border: true,
            },
        ],
    },
}

export default data
