import { ValidationError, handleFormError } from 'services/contact-us-form/errors'
import { ZodTypeAny, z } from 'zod'

//Layout
const Slot = z.object({
    // Define the properties for Slot here.
})

const LogoSlot = z.object({
    pct: z.nullable(z.number()),
    slots: z.array(Slot),
    activeSlots: z.array(z.number()),
})

const Logo = z
    .object({
        fonts: z.array(z.unknown()).optional(),
        footer: LogoSlot,
        header: LogoSlot,
        mobile: LogoSlot,
        list: z.record(z.string()).optional(), // Define the type for the list property.
    })
    .optional()

const Contact = z.object({
    email: z.unknown(),
    hours: z
        .object({
            friday: z.string(),
            monday: z.string(),
            sunday: z.string(),
            tuesday: z.string(),
            saturday: z.string(),
            thursday: z.string(),
            wednesday: z.string(),
        })
        .optional(),
    phone: z.array(
        z.object({
            name: z.string(),
            number: z.string(),
            disabled: z.string(),
            isPrimaryPhone: z.boolean(),
        })
    ),
    address: z
        .object({
            zip: z.string(),
            city: z.string(),
            name: z.optional(z.string()),
            state: z.string(),
            street: z.string(),
            street2: z.optional(z.string()),
            coordinates: z.optional(z.array(z.string())),
            url: z.optional(z.string()),
        })
        .optional(),
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
    mailChimp: z
        .object({
            audId: z.string(),
            datacenter: z.string(),
        })
        .optional(),
    zapierUrl: z.string().optional(),
    makeUrl: z.string().optional(),
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

/* export const SiteDataSchema = z.object({
    logos: Logo,
    social: z.array(z.unknown()),
    contact: Contact,
    siteName: z.string(),
    url: z.string(),
    composites: z.unknown(),
    cmsColors: ThemeStyles,
    theme: z.string(),
    cmsUrl: z.string(),
    s3Folder: z.string(),
    favicon: z.string(),
    fontImport: z.string(),
    config: Config,
    error: z.unknown(),
}) */

//page
// Define the schema for the CMSPage interface

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

export const ContactFormSchema = z.object({
    fName: z.string(),
    lName: z.string(),
    phone: z.string().optional(),
    email: z.string().optional(),
    messagebox: z.string(),
    address: z.object({ street: z.string().optional(), zip: z.string().optional(), state: z.string().optional(), city: z.string().optional() }).optional(),
    clientEmail: z.string().optional(),
})

/*---------------------- From transformer --------------------------*/
const socialItem = z.object({
    id: z.number().optional(),
    name: z.string(),
    format: z.string().optional(),
    label: z.string().optional(),
    value: z.string().optional(),
    enabled: z.number().optional(),
    input: z.array(z.string().nullable()).nullable().optional(),
    url: z.string(),
    icon: z.array(z.string()).optional(),
})

const SeoSchema = z.object({
    title: z.string().optional(),
    descr: z.string().optional(),
    selectedImages: z.string().optional(),
    imageOverride: z.string().optional(),
})

const CompositeItemSchema = z.object({
    items: z
        .array(
            z.object({
                title: z.string().optional(),
                component: z.string(),
                nav_menu: z.nullable(z.any()),
                name: z.string(),
                subtitle: z.string().optional(),
                text: z.string().optional(),
                autoopen: z.boolean().optional(),
            })
        )
        .optional(),
})
const ContactFormData = z.object({
    formTitle: z.string().optional(),
    formService: z.string(),
    email: z.string().optional(),
    formEmbed: z.string().optional(),
    formFields: z.array(
        z.object({
            name: z.string(),
            placeholder: z.string().optional(),
            type: z.string().optional(),
            label: z.string(),
            isReq: z.boolean(),
            fieldType: z.string(),
            isVisible: z.boolean(),
            size: z.string(),
        })
    ),
})

const CompositeSchema = z.object({
    footer: z
        .object({
            type: z.string(),
            layout: z.nullable(z.any()),
            columns: z.number(),
            modules: z.object({
                items: z.array(CompositeItemSchema),
                type: z.string(),
                modalNum: z.number().optional(),
            }),
            sections: z.nullable(z.any()),
            contactFormData: ContactFormData.optional(),
        })
        .optional(),
})

export const NavMenuItemSchema = z.object({
    ID: z.number(),
    menu_list_id: z.number(),
    title: z.string(),
    post_type: z.string(),
    type: z.string().nullish(),
    menu_item_parent: z.union([z.string(), z.number()]).nullable(),
    object_id: z.number().nullish(),
    object: z.string(),
    target: z.string().nullable(),
    classes: z.string().or(z.array(z.unknown())).nullable(),
    menu_order: z.number(),
    mi_url: z.string().nullable(),
    url: z.string(),
    disabled: z.boolean().optional(),
})

const CMSNavItemSchema = z.object({
    ...NavMenuItemSchema.shape,
    submenu: z
        .array(
            z
                .object({
                    submenu: z.array(z.object({ CMSNavItem: NavMenuItemSchema.nullish() })).nullish(),
                })
                .merge(NavMenuItemSchema)
        )
        .optional(),
})
const ActionSchema = z.object({
    name: z.string(),
    text: z.string(),
    icon: z.string().optional(),
})

const ThemeColorsSchema = z.object({
    color: z.string(),
    bgColor: z.string(),
    buttonTextColor: z.string(),
    buttonBgColor: z.string(),
    labelTextColor: z.string(),
    labelBgColor: z.string(),
})

const VcitaDataSchema = z.object({
    actions: z.array(ActionSchema),
    themeColors: ThemeColorsSchema.optional(),
    businessId: z.string(),
    titleText: z.string().optional(),
    mainAction: z.string().optional(),
    descText: z.string().optional(),
    businessInfo: z.unknown().optional(),
    showMyAccountBtn: z.boolean().optional(),
    widgetLabel: z.string().optional(),
})

export const AnalyticsSchema = z.object({
    gaId: z.string().optional(),
    gtmId: z.string().optional(),
})

export const SiteDataSchema = z.object({
    logos: Logo.describe('Data for all logo slots').optional(),
    social: z.array(socialItem.optional()).optional(),
    contact: Contact,
    siteName: z.string(),
    url: z.string(),
    composites: CompositeSchema.nullish().describe('modules in footer'),
    modalData: CompositeItemSchema.optional().describe('regular pop up modal'),
    cmsNav: z.array(CMSNavItemSchema.nullish()).nullish(),
    cmsColors: ThemeStyles.describe('website theme colors'),
    theme: z.string().describe('cms website theme'),
    cmsUrl: z.string().describe('current luna url'),
    s3Folder: z.string().describe('siteID where data is stored in s3'),
    favicon: z.string().optional(),
    fontImport: z.string().describe('CSS for importing google fonts'),
    config: Config,
    contactFormData: ContactFormData.optional(),
    published: z.boolean().optional(),
    redirectUrl: z.string().optional(),
    publishedDomains: z.array(z.string().optional()),
    allStyles: z.string().optional(),
    styles: z
        .object({
            global: z.string().optional(),
            custom: z.string().optional(),
        })
        .optional(),
    phoneNumber: z.string().optional(),
    email: z.string().optional(),
    customComponents: z.array(z.object({})).optional(),
    scripts: z
        .object({
            header: z.string().optional(),
            footer: z.string().optional(),
        })
        .optional(),
    vcita: VcitaDataSchema.optional().nullable(),
    siteType: z.string(),
    headerOptions: z
        .object({
            ctaBtns: z.array(z.object({})).optional(),
            hideNav: z.boolean().optional(),
            hideSocial: z.boolean().optional(),
        })
        .nullable(),
    analytics: AnalyticsSchema.optional(),
    formService: z.string().optional(),
})

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
        modules: z.unknown(),
        sections: z.unknown(),
        hideTitle: z.number(),
        head_script: z.string(),
        columnStyles: z.string(),
        page_type: z.optional(z.string()),
    }),
    attrs: z.record(z.unknown()),
    seo: z.unknown(),
    head_script: z.optional(z.string()),
    JS: z.optional(z.string()),
    sections: z.unknown(),
    siteLayout: SiteDataSchema.optional(),
})

export const ContactFormReqSchema = z.object({
    formData: ContactFormSchema,
    siteData: SiteDataSchema,
})

export type ContactFormReq = z.infer<typeof ContactFormReqSchema>
export type SiteData = z.infer<typeof SiteDataSchema>

export const zodDataParse = <T, S extends ZodTypeAny>(data: T, schema: S, type: string = 'input'): T => {
    const validatedPageData = schema.safeParse(data)

    const zodErrorLoop = (error: any) => {
        const pathList = []
        for (let i = 0; i < error.errors.length; i++) {
            const currentErrorPath = error.errors[i].path
            const innerPathList = []
            for (let x = 0; x < currentErrorPath.length; x++) {
                innerPathList.push(currentErrorPath[x])
            }
            const errorStatus = {
                fieldPath: error.errors[i].path,
                message: error.errors[i].message,
            }
            pathList.push(errorStatus)
        }
        return pathList
    }

    if (!validatedPageData.success) {
        console.log(validatedPageData.error)
        const pathList = zodErrorLoop(validatedPageData.error)

        const zodErrorObject = {
            message: type === 'input' ? 'Error validating form fields' : 'Validation error on output data going to S3',
            errorType: type === 'input' ? 'VAL-004' : 'VAL-005',
            state: {
                erroredFields: pathList,
            },
        }
        console.log(zodErrorObject)
        throw new ValidationError(zodErrorObject)
    } else {
        return validatedPageData.data
    }
}
