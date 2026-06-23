'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="logo">Rupesh<span>.</span></a>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <ul className={menuOpen ? 'open' : ''}>
          {['Services', 'Projects', 'Experience', 'Testimonials', 'Skills', 'Education', 'Contact'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-label">Based in Plymouth, UK</div>
            <h1>Operations, <em>Executive&nbsp;Support</em> &amp; Automation</h1>
            <p className="hero-desc">Strategic professional with proven experience supporting senior leadership and driving operational excellence. I bring process optimisation, discretion, and a tech-savvy approach to every engagement.</p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Get in Touch &rarr;</a>
              <a href="https://www.upwork.com/freelancers/~01e48fff8c3eed55f8" target="_blank" rel="noopener" className="btn-secondary">View Upwork</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-photo-wrapper">
              <Image className="hero-photo" src="/photo.jpg" alt="Rupesh Adhikari" width={380} height={420} priority />
            </div>
            <div className="hero-stats-bar">
              <div className="mini-stat"><div className="mini-stat-number">25+</div><div className="mini-stat-label">Projects</div></div>
              <div className="mini-stat"><div className="mini-stat-number">5+</div><div className="mini-stat-label">Years Experience</div></div>
            </div>
            <div className="hero-tools">
              {['Zoho CRM', 'HubSpot', 'Salesforce', 'Zapier', 'Microsoft 365', 'Asana'].map(t => (<span key={t} className="tool-tag">{t}</span>))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="section-label">What I Do</div>
        <h2 className="section-title">Services &amp; Expertise</h2>
        <p className="section-desc">I help businesses run smoother — from executive-level calendar management to building full CRM systems and automation pipelines.</p>
        <div className="services-grid">
          {[
            { icon: '📋', title: 'Executive Assistance', desc: 'Calendar management, travel planning, inbox oversight, board packs, meeting coordination, and confidential communication handling for C-suite leaders.' },
            { icon: '⚙️', title: 'Operations & Project Management', desc: 'End-to-end project coordination, timeline monitoring, cross-team collaboration, workflow optimisation, and structured status reporting.' },
            { icon: '🤖', title: 'CRM & Automation', desc: 'Custom Zoho, HubSpot, and Salesforce builds. Workflow blueprints, automated invoicing, email sequences, and integrations via Zapier and webhooks.' },
            { icon: '👥', title: 'Client Operations', desc: 'Managing client communications, onboarding workflows, launch coordination, post-launch monitoring, and escalation to technical teams.' },
          ].map(s => (<div key={s.title} className="service-card"><div className="service-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.desc}</p></div>))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-label">Selected Work</div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-desc">Hands-on builds that delivered real operational impact.</p>
        <div className="projects-grid">
          {[
            { date: 'Jun 2025 – Present', title: 'SEO Strategy & Optimisation for Parasol UK', desc: 'Leading ongoing SEO efforts including keyword research, on-page optimisation, content strategy, technical audits, and performance tracking to improve organic visibility and search rankings across the site.', tools: ['SEO', 'Keyword Research', 'Content Strategy', 'Analytics'] },
            { date: 'Nov – Dec 2025', title: 'Custom Zoho CRM for Lending Operations', desc: 'Delivered a full CRM setup covering enquiry-to-completion workflow with blueprint transitions, automated term sheets, invoice generation via Zoho Books, and webhook integrations.', tools: ['Zoho CRM', 'Zoho Books', 'Webhooks', 'Blueprints'] },
            { date: 'Aug – Sep 2025', title: 'AI Workflow Automation System', desc: 'Created AI agents for daily research and news tasks with scheduled triggers. Built workflows for task updates, assessment processing, email actions, and notification routing. Connected GoCardless to QuickBooks for automatic invoicing.', tools: ['AI Agents', 'GoCardless', 'QuickBooks', 'Automation'] },
            { date: 'Jan – Feb 2025', title: 'HubSpot Event & Sales Automation', desc: 'Built a multi-step workflow tied to event registration with form-triggered automation, smart content for personalised messaging, automatic payment links, deal creation, and CRM record updates.', tools: ['HubSpot', 'Workflows', 'Smart Content', 'CRM'] },
          ].map(p => (<div key={p.title} className="project-card"><div className="project-tag">{p.date}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="project-tools">{p.tools.map(t => <span key={t}>{t}</span>)}</div></div>))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-label">Career</div>
        <h2 className="section-title">Experience</h2>
        <p className="section-desc">A track record across executive support, operations, project management, and business development.</p>
        <div className="timeline">
          {[
            { date: 'Jun 2025 – Present', role: 'Business Development Executive', company: 'Nepatech Solutions', desc: 'Identifying new markets and business opportunities through cold calling, networking, and digital channels. Preparing proposals and maintaining CRM records.' },
            { date: 'Jul – Nov 2025', role: 'Client Operations Coordinator', company: 'Zeno AI', desc: 'Managed 20–30 client relationships, coordinated technical launches, and bridged communication between clients and engineering teams.' },
            { date: 'May 2022 – Jul 2025', role: 'Manager of Project Managers / EAs', company: 'YittBox', desc: 'Led a team of PMs and developers across 100+ IT projects. Oversaw recruitment, CRM updates, and cross-functional delivery.' },
            { date: 'Jan 2024 – Apr 2025', role: 'Executive Administrative Assistant', company: 'Healthclic', desc: 'Managed executive calendars, travel planning, and confidential communications for clinicians in a healthcare environment.' },
            { date: 'Oct 2024 – Mar 2025', role: 'Healthcare Recruitment Coordinator', company: 'Azile Medical', desc: 'Recruited healthcare professionals ensuring NHS compliance, streamlined workflows, and improved candidate response rates.' },
            { date: 'Nov 2023 – Sep 2024', role: 'Operations / Marketing Executive', company: 'Moorland Hotel', desc: 'Managed hotel operations and led marketing campaigns achieving 20% growth in social engagement and increased direct bookings.' },
            { date: 'Feb 2022 – Apr 2023', role: 'Executive Assistant', company: 'Genese Solution', desc: "Managed CTO's international calendar across global teams, produced board packs and executive summaries, and planned strategic events." },
          ].map(e => (<div key={e.role + e.company} className="timeline-item"><div className="timeline-date">{e.date}</div><div className="timeline-role">{e.role}</div><div className="timeline-company">{e.company}</div><div className="timeline-desc">{e.desc}</div></div>))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="section-label">Client Feedback</div>
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-desc">All reviews from verified Upwork contracts. 100% Job Success Score across 26 completed jobs.</p>
        <div className="testimonials-grid">
          {[
            { name: 'Laura Taylor', review: "Rupesh was an absolute joy to work with and I highly recommend him if you're looking for a reliable virtual assistant!" },
            { name: 'Nicole Gibson', review: "Rupesh is an absolute find — he is so thorough, incredibly intelligent and as soon as I can offer him full-time work, it'll be my first ask!" },
            { name: 'Frances Ly', review: "Rupesh has been incredible to work with. In a short amount of time, he's picked things up quickly and has already made a noticeable impact on how smoothly things run. He's proactive, detail-oriented, and brings a lot of valuable knowledge. He's reliable, easy to communicate with, and genuinely invested in doing good work." },
            { name: 'Piers Chen', review: 'Rupesh is excellent to work with. An incredibly hard working person with a great attitude to go alongside it. I would recommend him to anyone.' },
            { name: 'Lucas Vegvary', review: "I truly enjoyed working with Rupesh, he's extremely knowledgeable and works hard on projects and learns quickly. If you're looking for an excellent executive virtual assistant, he's your guy." },
            { name: 'Lauren Hall', review: "Rupesh was incredible! I'll hire him again in a heartbeat whenever I need support. He was accessible and prompt plus really helped me work through what I actually needed for projects and goals along with then executing tasks. He elevated my online presence and organizational systems." },
            { name: 'Joseph Randy Murphy', review: 'Rupesh has been a valuable member of our management team. He consistently demonstrated professionalism, reliability, and strong leadership throughout his work with us. His ability to collaborate effectively and contribute was outstanding.' },
            { name: 'Matthew Stafford', review: 'Rupesh has been excellent and highly recommended. Able to just get on with tasks with clear instructions and requires minimal oversight afterwards. Has been really appreciated.' },
          ].map(t => (<div key={t.name} className="testimonial-card"><div className="testimonial-stars">★★★★★</div><p>{t.review}</p><div className="testimonial-author">{t.name}</div></div>))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-label">Core Skills</div>
        <h2 className="section-title">Skills &amp; Tools</h2>
        <p className="section-desc">A broad toolkit spanning administration, project delivery, CRM platforms, and technical support.</p>
        <div className="skills-grid">
          {[
            { category: 'Administrative & Organisational', skills: ['Complex Diary & Schedule Management', 'Confidential Information Handling', 'Inbox & Communication Oversight', 'Travel Planning & Itinerary Coordination', 'Meeting Scheduling & Minute-Taking', 'Event & Meeting Logistics', 'Task & Deadline Tracking', 'Report & Document Preparation', 'CRM & Database Management'] },
            { category: 'Project & Operations Support', skills: ['Project Coordination', 'Timeline Monitoring', 'Process Improvement', 'Workflow Optimisation', 'Requirement Gathering', 'Cross-Team Collaboration', 'Status Reporting', 'Follow-Up Management', 'Action Tracking', 'Risk Identification'] },
            { category: 'Technical & Tools', skills: ['Zoho CRM', 'HubSpot', 'Salesforce', 'Zapier Automation', 'Workflow & Blueprint Design', 'WordPress', 'SSL Installation', 'Google Workspace', 'Microsoft 365', 'Trello', 'Asana', 'Notion', 'Monday.com'] },
            { category: 'Customer Success & Technical Support', skills: ['System Troubleshooting', 'Product Configuration', 'Onboarding Support', 'Post-Launch Monitoring', 'Pilot Support', 'Technical Documentation', 'Issue Escalation', 'Client Communication', 'Expectation Alignment'] },
          ].map(group => (<div key={group.category} className="skill-group"><h3>{group.category}</h3><div className="skill-tags">{group.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}</div></div>))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="section-label">Education</div>
        <h2 className="section-title">Academic Background</h2>
        <div className="edu-grid" style={{ marginTop: '2rem' }}>
          <div className="edu-card"><h3>MSc International Management</h3><div className="school">UWE Bristol</div><div className="year">2023 – 2024</div></div>
          <div className="edu-card"><h3>Bachelor&apos;s Hotel Management</h3><div className="school">Purbanchal University</div><div className="year">2015 – 2019</div></div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="section-label">Let&apos;s Work Together</div>
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-desc">Looking for an operations professional, executive assistant, or someone to build out your CRM and automation workflows? I&apos;d love to hear from you.</p>
        <div className="contact-links">
          <a href="mailto:rupace63@gmail.com" className="primary-link">✉ rupace63@gmail.com</a>
          <a href="https://www.upwork.com/freelancers/~01e48fff8c3eed55f8" target="_blank" rel="noopener">💼 Upwork</a>
          <a href="https://www.linkedin.com/in/rupesh-plym/" target="_blank" rel="noopener">🔗 LinkedIn</a>
        </div>
      </section>

      <footer>&copy; 2026 Rupesh Adhikari. All rights reserved.</footer>
    </>
  )
}
