import { education, experiences } from '@/lib/data'

export function EducationExperience() {
  return (
    <section id="experience" className="bg-charcoal py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wide mb-20">
          Education &amp; Experience
        </h2>

        {/* Experience entries */}
        <div className="space-y-16 mb-20">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-16"
            >
              <div className="pt-1">
                <p className="text-magenta text-lg font-medium">{exp.period}</p>
                <p className="text-pearl/40 text-lg mt-1">{exp.company}</p>
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-5">{exp.role}</h3>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-pearl/60 text-lg flex gap-3 leading-relaxed"
                    >
                      <span className="text-magenta shrink-0 mt-1">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="border-t border-white/10 pt-16">
          <p className="text-pearl/30 text-sm tracking-widest uppercase mb-10">
            Education
          </p>
          {education.map((edu, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-16"
            >
              <div className="pt-1">
                <p className="text-magenta text-sm font-medium">{edu.year}</p>
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">{edu.degree}</h3>
                <p className="text-pearl/40 text-base mt-1">{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
