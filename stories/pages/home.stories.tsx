import { ComponentStory, ComponentMeta } from '@storybook/react'
import Home from '../../pages/index'

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />

export const Default = Template.bind({})
const moduleData = {}
const globalData = {
  seo: {
    favicon: "/company-fav.png"
  },
  themeStyles: {
    mainColor: "#3232bf",
    textColor: "rgb(46, 46, 46)",
    headingColor: "rgb(46, 46, 46)",
    textColorAccent: "#fff",
    linkColor: "rgb(230, 211, 65)",
    accentBackgroundColor: "#000",
    accentColor2: "rgb(230, 211, 65)",
    altColor: "#f68a33",
    headerBackground: "#000",
    footerBackground: "linear-gradient(rgba(0, 0, 0, 0.6) 0%, #000 23%)",
    navBackground: "rgb(0,0,0,.9)"
  },
  modules: [
    {
      componentType: "navigation",
      attributes: {
        logoUrl: "/company-logo.png",
        pages: [
          {
            name: "Home",
            slug: "/",
            id: "0"
          },
          {
            name: "Destinations",
            slug: "/destinations",
            id: "1"
          },
          {
            name: "Media",
            slug: "/media",
            id: "2"
          },
          {
            name: "Reviews",
            slug: "/reviews",
            id: "3"
          },
          {
            name: "Module Descriptions",
            slug: "/module-descriptions",
            id: "5"
          },
          {
            name: "Contact",
            slug: "/contact",
            id: "6"
          },
          {
            name: "Other",
            slug: "/",
            id: "7"
          }
        ],
        navStyle: "layout1",
        borderNum: 6,
        navImage: "/juan-test-012.jpg",
        altText: "Glowing tent under the Northern Lights"
      }
    },
    {
      componentType: "footer",
      attributes: {
        logoUrl: "/company-logo.png",
        socialData: [
          {
            linkUrl: "https://www.google.com/"
          },
          {
            linkUrl: "https://www.facebook.com"
          },
          {
            linkUrl: "https://www.instagram.com"
          },
          {
            linkUrl: "https://www.twitter.com"
          }
        ],
        pages: [
          {
            name: "Home",
            slug: "/",
            id: "0"
          },
          {
            name: "Destinations",
            slug: "/destinations",
            id: "1"
          },
          {
            name: "Media",
            slug: "/media",
            id: "2"
          },
          {
            name: "Reviews",
            slug: "/reviews",
            id: "3"
          },
          {
            name: "Module Descriptions",
            slug: "/module-descriptions",
            id: "5"
          },
          {
            name: "Contact",
            slug: "/contact",
            id: "6"
          },
          {
            name: "Other",
            slug: "/",
            id: "7"
          }
        ],
        borderNum: 6,
        addressData: {
          street: "444 happy road",
          cityState: "Townsville, Georgia",
          zip: "47384"
        },
        siteName: "Travel 365",
        phoneNumber: "922-444-2849"
      }
    }
  ]
}
const page = {}
Default.args = {
  moduleData,
  globalData,
  page
}
