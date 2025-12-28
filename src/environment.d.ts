declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PAYLOAD_SECRET: string
      DATABASE_URI: string
      NEXT_PUBLIC_SERVER_URL: string
      VERCEL_PROJECT_PRODUCTION_URL: string
      NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN?: string
      NEXT_PUBLIC_MAPBOX_STYLE_DEFAULT?: string
      NEXT_PUBLIC_MAPBOX_STYLE_MONO?: string
      NEXT_PUBLIC_MAPBOX_STYLE_MONO_BLACK?: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
