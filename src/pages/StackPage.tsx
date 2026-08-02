import { PageHeader } from '../components/PageHeader'
import { stackGroups } from '../data/stack'

export function StackPage() {
  return (
    <section className="page shell">
      <PageHeader
        eyebrow="Stack"
        title="Araç çantam."
        description="Projelerde kullandığım diller, framework’ler ve çalışma alanlarım."
      />

      <div className="stack-grid">
        {stackGroups.map((group) => (
          <article key={group.title} className="stack-card">
            <h2>{group.title}</h2>
            <div className="chip-row">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
