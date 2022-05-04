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
        gap: false,
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
}

export default data
