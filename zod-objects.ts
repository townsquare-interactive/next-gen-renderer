import { z } from 'zod'

//Layout
const Slot = z.object({
    // Define the properties for Slot here.
})

const LogoSlot = z.object({
    pct: z.nullable(z.number()),
    slots: z.array(Slot),
    activeSlots: z.array(z.number()),
})

const Logo = z.object({
    fonts: z.array(z.unknown()),
    footer: LogoSlot,
    header: LogoSlot,
    mobile: LogoSlot,
    list: z.record(z.string()), // Define the type for the list property.
})

const Contact = z.object({
    email: z.unknown(),
    hours: z.object({
        friday: z.string(),
        monday: z.string(),
        sunday: z.string(),
        tuesday: z.string(),
        saturday: z.string(),
        thursday: z.string(),
        wednesday: z.string(),
    }),
    phone: z.array(
        z.object({
            name: z.string(),
            number: z.string(),
            disabled: z.string(),
            isPrimaryPhone: z.boolean(),
        })
    ),
    address: z.object({
        zip: z.string(),
        city: z.string(),
        name: z.optional(z.string()),
        state: z.string(),
        street: z.string(),
        street2: z.optional(z.string()),
        coordinates: z.optional(z.array(z.string())),
        url: z.optional(z.string()),
    }),
    hideZip: z.optional(z.boolean()),
    advanced: z.optional(
        z.object({
            lat: z.string(),
            long: z.string(),
        })
    ),
    disabled: z.optional(z.union([z.boolean(), z.string()])),
    hideCity: z.optional(z.boolean()),
    hideState: z.optional(z.boolean()),
    isPrimary: z.optional(z.boolean()),
    hideAddress: z.optional(z.boolean()),
    displayInMap: z.optional(z.boolean()),
    hideAddress2: z.optional(z.boolean()),
    displayInFooter: z.optional(z.boolean()),
    contactLinks: z.optional(
        z.array(
            z.object({
                cName: z.string(),
                link: z.string(),
                icon: z.array(z.string()),
                content: z.string(),
                active: z.boolean(),
            })
        )
    ),
    showContactBox: z.optional(z.boolean()),
})

const Composite = z.object({
    type: z.string(),
    layout: z.nullable(z.unknown()),
    columns: z.number(),
    modules: z.array(
        z.object({
            type: z.string(),
            items: z.array(z.unknown()),
        })
    ),
    sections: z.nullable(z.unknown()),
})

const ThemeStyles = z.object({
    // Define the properties for ThemeStyles here.
})

const Config = z.object({
    mailChimp: z.object({
        audId: z.string(),
        datacenter: z.string(),
    }),
    zapierUrl: z.string(),
    makeUrl: z.string(),
})

const Address = z.object({
    zip: z.string(),
    city: z.string(),
    name: z.optional(z.string()),
    state: z.string(),
    street: z.string(),
    street2: z.optional(z.string()),
    coordinates: z.optional(z.array(z.string())),
    url: z.optional(z.string()),
})

const Phone = z.object({
    name: z.string(),
    number: z.string(),
    disabled: z.string(),
    isPrimaryPhone: z.boolean(),
})

const ContactLink = z.object({
    cName: z.string(),
    link: z.string(),
    icon: z.array(z.string()),
    content: z.string(),
    active: z.boolean(),
})

export const SiteDataSchema = z.object({
    logos: Logo,
    social: z.array(z.unknown()),
    contact: Contact,
    siteName: z.string(),
    url: z.string(),
    /*composites: z.optional(
        z.object({
            footer: z.optional(Composite),
        })
    ),*/
    composites: z.unknown(),
    cmsColors: ThemeStyles,
    theme: z.string(),
    cmsUrl: z.string(),
    s3Folder: z.string(),
    favicon: z.string(),
    fontImport: z.string(),
    config: Config,
    error: z.unknown(),
})

//page
// Define the schema for the CMSPage interface
export const CMSPageSchema = z.object({
    data: z.object({
        id: z.string(),
        title: z.string(),
        slug: z.string(),
        pageType: z.string(),
        url: z.string(),
        JS: z.string(),
        type: z.string(),
        layout: z.number(),
        columns: z.number(),
        modules: z.unknown(), // 2D array of Modules
        sections: z.unknown(), // Array of Sections
        hideTitle: z.number(),
        head_script: z.string(),
        columnStyles: z.string(),
        page_type: z.optional(z.string()),
    }),
    attrs: z.record(z.unknown()), // An empty record (you can adjust the type)
    /*     seo: z.optional(
        z.object({
            title: z.optional(z.string()),
            descr: z.optional(z.string()),
            selectedImages: z.optional(z.string()),
            imageOverride: z.optional(z.string()),
        })
    ), */
    seo: z.unknown(),
    head_script: z.optional(z.string()), // Optional head_script
    JS: z.optional(z.string()), // Optional JS
    //title: z.string(),
    //slug: z.string(),
    //page_type: z.string(),
    //url: z.string(),
    //id: z.string(),
    sections: z.unknown(), // Array of Sections
})

export const PageListSchema = z.object({
    pages: z.array(
        z.object({
            name: z.string(),
            slug: z.string(),
            id: z.string(),
            page_type: z.optional(z.string()),
        })
    ),
})
