import { getPageMetadata, getStructuredData } from "@/lib/metadata"

export const metadata = getPageMetadata("contact")

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(getStructuredData("contact"))
                }}
            />
            {children}
        </>
    )
}
