import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          SimpleStatic page Deployed over cloudflare pages <br className="hidden sm:inline" />
          built with Nextjs and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          This is just a simple static page with no content generation or dynamic server-side-rendering,
          this could be used for a static blog post or documentation
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="https://github.com/moibraahim/Nextjs-SSR-Cloudflare"
          rel="https://github.com/moibraahim/Nextjs-SSR-Cloudflare"
          className={buttonVariants()}
        >
          View Github Repo
        </Link>
        <Link
          target="https://github.com/moibraahim/Nextjs-SSR-Cloudflare"
          rel="https://github.com/moibraahim/Nextjs-SSR-Cloudflare"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          SSR version
        </Link>
      </div>
    </section>
  )
}
