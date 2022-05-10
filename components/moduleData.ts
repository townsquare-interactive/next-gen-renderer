import { ImagesProps, ListProps, HomeProps, ModuleData } from '../components/types'

const data: ModuleData = {
    imagesData: {
        gap: true,
        modLayout: '3-2/3',

        items: [
            {
                imageUrl: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg',
                linkText: 'Menu',
                linkUrl: '/menu',
                body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor',
            },
            {
                imageUrl: 'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg',
                linkText: 'Images',
                body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor',
            },
            {
                imageUrl: 'https://images.pexels.com/photos/10838475/pexels-photo-10838475.jpeg',
                linkText: 'Blog',
                linkUrl: '/blog',
                body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor',
            },
        ],
    },

    listData: {
        headline: 'Headline for text',
        body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
        imageUrl: 'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg',
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
        imageUrl: 'https://images.pexels.com/photos/10838475/pexels-photo-10838475.jpeg',
        backgroundImageUrl: '/images/seamless-5178982.png',
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
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        gap: false,
        align: 'left',
        border: false,
        textSize: 'md',
    },

    sliderData: {
        modLayout: 'text',
        slideCount: 3,
        items: [
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                imageUrl: 'https://images.pexels.com/photos/10914326/pexels-photo-10914326.jpeg',
                headline: '-Rupert Tolson',
            },
            {
                text: '                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                imageUrl: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg',
                headline: '-Jeff Grover',
            },
            {
                text: '                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                imageUrl: 'https://images.pexels.com/photos/10838475/pexels-photo-10838475.jpeg',
                headline: '-Mark Ilten',
            },
            {
                text: '                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                imageUrl: 'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg',
                headline: '-Sarah Patterson',
            },
        ],
    },

    footerData: {
        socialData: [
            {
                linkUrl: 'https://www.google.com/',
                fontAwesomeName: 'fa-brands fa-google',
            },
            {
                linkUrl: 'https://www.facebook.com',
                fontAwesomeName: 'fa-brands fa-facebook',
            },
            {
                linkUrl: 'https://www.instagram.com',
                fontAwesomeName: 'fa-brands fa-instagram',
            },
            {
                linkUrl: 'https://www.twitter.com',
                fontAwesomeName: 'fa-brands fa-twitter',
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
                text: 'Home',
                linkUrl: '/',
            },
            {
                text: 'Menu',
                linkUrl: '/menu',
            },
            {
                text: 'Images',
                linkUrl: '/images',
            },
            {
                text: 'Blog',
                linkUrl: '/blog',
            },
            {
                text: 'Contact',
                linkUrl: '/',
            },
            {
                text: 'About Us',
                linkUrl: '/',
            },
            {
                text: 'Our Sponsors',
                linkUrl: '/',
            },
        ],
        //modLayout: 'header',
        navStyle: 'layout1',
    },

    videoData: {
        //modLayout: 'local',
        modLayout: 'youtube',
        //videoUrl: '/videos/local_vid.mp4',
        videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    },
}

export default data
