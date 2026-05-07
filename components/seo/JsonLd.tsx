/**
 * Server-rendered JSON-LD script tag.
 * Pass a single schema object or an array of schemas.
 */

type Props = {
  data: object | object[]
  /** Override the script id (handy for debugging). */
  id?: string
}

export default function JsonLd({ data, id }: Props) {
  const payload = Array.isArray(data) ? data : [data]
  return (
    <script
      id={id}
      type="application/ld+json"
      // The JSON we emit is fully controlled by us — no untrusted strings reach here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
