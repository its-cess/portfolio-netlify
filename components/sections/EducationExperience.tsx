import { education, experiences } from '@/lib/data'

export function EducationExperience() {
  // Show experiences oldest-first; split across two columns
  const expChronological = [...experiences].reverse()
  const midpoint = Math.ceil(expChronological.length / 2)
  const expColA = expChronological.slice(0, midpoint)
  const expColB = expChronological.slice(midpoint)

  return (
    <section id="experience" className="bg-charcoal py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wide mb-20">
          Education &amp; Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Education */}
          <div>
            <p className="text-pearl/30 text-xs tracking-widest uppercase mb-10">
              Education
            </p>
            <div className="space-y-10">
              {education.map((edu, i) => (
                <div key={i}>
                  <h3 className="text-white text-xl font-semibold leading-tight mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-pearl/40 text-base">{edu.school}</p>
                  <p className="text-magenta text-xs mt-1">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Earlier experience */}
          <div>
            <p className="text-pearl/30 text-xs tracking-widest uppercase mb-10">
              Experience
            </p>
            <div className="space-y-10">
              {expColA.map((exp, i) => (
                <div key={i}>
                  <h3 className="text-white text-xl font-semibold leading-tight mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-pearl/40 text-base">{exp.company}</p>
                  <p className="text-magenta text-xs mt-1">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Recent experience */}
          <div>
            <p className="text-pearl/30 text-xs tracking-widest uppercase mb-10">
              &nbsp;
            </p>
            <div className="space-y-10">
              {expColB.map((exp, i) => (
                <div key={i}>
                  <h3 className="text-white text-xl font-semibold leading-tight mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-pearl/40 text-base">{exp.company}</p>
                  <p className="text-magenta text-xs mt-1">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
