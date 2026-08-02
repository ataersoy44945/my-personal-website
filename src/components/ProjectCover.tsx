type ProjectCoverProps = {
  title: string
  category: string
  accent?: string
  image?: string
  priority?: boolean
  variant?: 'card' | 'detail'
}

function toWebp(src: string) {
  if (src.endsWith('.webp')) return src
  return src.replace(/\.(jpe?g|png)$/i, '.webp')
}

export function ProjectCover({
  title,
  category,
  accent = '#ff6a1a',
  image,
  priority = false,
  variant = 'card',
}: ProjectCoverProps) {
  const initials = title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  const webp = image ? toWebp(image) : null
  const isDetail = variant === 'detail'

  return (
    <div
      className={`project-cover${image ? ' has-image' : ''}${isDetail ? ' is-detail' : ''}`}
      style={
        image
          ? undefined
          : {
              background: `
          radial-gradient(circle at 80% 20%, ${accent}66, transparent 45%),
          radial-gradient(circle at 15% 85%, ${accent}33, transparent 40%),
          linear-gradient(145deg, #1c1713, #12100e)
        `,
            }
      }
      aria-hidden="true"
    >
      {image ? (
        <picture>
          {webp && webp !== image ? (
            <source srcSet={webp} type="image/webp" />
          ) : null}
          <img
            src={image}
            alt=""
            className="project-cover-img"
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </picture>
      ) : (
        <>
          <strong className="project-cover-initials">{initials}</strong>
          <span className="project-cover-grid" />
        </>
      )}
      {!isDetail ? <span className="project-cover-cat">{category}</span> : null}
      <span className="project-cover-shade" />
    </div>
  )
}
