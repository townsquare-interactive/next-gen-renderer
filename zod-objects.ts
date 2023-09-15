import { z } from 'zod'

//Layout
const Slot = z.object({
    // Define the properties for Slot here.
})

const Logo = z.object({
    fonts: z.array(z.unknown()), // Adjust the type accordingly.
    footer: z.object({
        pct: z.nullable(z.number()),
        slots: z.array(Slot),
        activeSlots: z.array(z.number()),
    }),
    header: z.object({
        pct: z.nullable(z.number()),
        slots: z.array(Slot),
        activeSlots: z.array(z.number()),
    }),
    mobile: z.object({
        pct: z.nullable(z.number()),
        slots: z.array(Slot),
        activeSlots: z.array(z.number()),
    }),
    list: z.record(z.string()), // Define the type for the list property.
})

const Contact = z.object({
    email: z.unknown(), // Adjust the type accordingly.
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
            disabled: z.string(), // Adjust the type accordingly.
            isPrimaryPhone: z.boolean(),
        })
    ),
    address: z.object({
        zip: z.string(),
        city: z.string(),
        name: z.optional(z.string()), // Adjust the type accordingly.
        state: z.string(),
        street: z.string(),
        street2: z.optional(z.string()), // Adjust the type accordingly.
        coordinates: z.optional(z.array(z.string())), // Adjust the type accordingly.
        url: z.optional(z.string()), // Adjust the type accordingly.
    }),
    hideZip: z.optional(z.boolean()), // Adjust the type accordingly.
    advanced: z.optional(
        z.object({
            lat: z.string(),
            long: z.string(),
        })
    ),
    disabled: z.optional(z.union([z.boolean(), z.string()])), // Adjust the type accordingly.
    hideCity: z.optional(z.boolean()), // Adjust the type accordingly.
    hideState: z.optional(z.boolean()), // Adjust the type accordingly.
    isPrimary: z.optional(z.boolean()), // Adjust the type accordingly.
    hideAddress: z.optional(z.boolean()), // Adjust the type accordingly.
    displayInMap: z.optional(z.boolean()), // Adjust the type accordingly.
    hideAddress2: z.optional(z.boolean()), // Adjust the type accordingly.
    displayInFooter: z.optional(z.boolean()), // Adjust the type accordingly.
    contactLinks: z.optional(
        z.array(
            z.object({
                cName: z.string(),
                link: z.string(),
                icon: z.array(z.string()), // Adjust the type accordingly.
                content: z.string(),
                active: z.boolean(),
            })
        )
    ),
    showContactBox: z.optional(z.boolean()), // Adjust the type accordingly.
})

const Composite = z.object({
    type: z.string(),
    layout: z.nullable(z.unknown()), // Adjust the type accordingly.
    columns: z.number(),
    modules: z.array(
        z.object({
            type: z.string(),
            items: z.array(z.unknown()), // Adjust the type accordingly.
        })
    ),
    sections: z.nullable(z.unknown()), // Adjust the type accordingly.
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
    name: z.optional(z.string()), // Adjust the type accordingly.
    state: z.string(),
    street: z.string(),
    street2: z.optional(z.string()), // Adjust the type accordingly.
    coordinates: z.optional(z.array(z.string())), // Adjust the type accordingly.
    url: z.optional(z.string()), // Adjust the type accordingly.
})

const Phone = z.object({
    name: z.string(),
    number: z.string(),
    disabled: z.string(), // Adjust the type accordingly.
    isPrimaryPhone: z.boolean(),
})

const ContactLink = z.object({
    cName: z.string(),
    link: z.string(),
    icon: z.array(z.string()), // Adjust the type accordingly.
    content: z.string(),
    active: z.boolean(),
})

export const SiteDataSchema = z.object({
    logos: Logo,
    social: z.array(z.unknown()), // Adjust the type accordingly.
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
