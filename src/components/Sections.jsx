import { useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import {
  sections, included, noFees, compare, audiences, steps, images,
  PRICE, FLEXI_PRICE, DUE_DILIGENCE, MAIN_SITE, BUSINESS,
} from '../data/content'

const aed = (n) => `AED ${n.toLocaleString('en-US')}`

export function Answer() {
  return (
    <section className="answer-sec sec" aria-labelledby="what-is">
      <div className="wrap answer-grid">
        <div>
          <h2 id="what-is">What is a dedicated desk in ADGM?</h2>
          <p className="answer">
            A dedicated desk in ADGM is a permanent, personally assigned desk inside an Abu Dhabi Global
            Market business centre that comes with a registered ADGM business address and a lease you can
            use for your ADGM licence. Unlike a flexi desk, it is yours every day — and it is usually the
            lowest-cost workspace that satisfies ADGM's physical-presence requirement.
          </p>
          <p>
            At Aegis Coworking, the dedicated desk space in ADGM sits on the 38th
            floor of Addax Tower and costs AED 1,150 a month. It is the desk for an ADGM licence that most new
            companies choose, and it qualifies as the ADGM flexi desk requirement for your business licence.
          </p>
        </div>
        <nav className="toc" aria-label="On this page">
          <p>On this page</p>
          <ul>{sections.map((s) => <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>)}</ul>
        </nav>
      </div>
    </section>
  )
}

export function Price() {
  const terms = [12, 24, 36]
  const [months, setMonths] = useState(12)
  const rent = PRICE * months
  const total = rent + DUE_DILIGENCE

  return (
    <section className="price sec" id="price" aria-labelledby="price-title">
      <div className="wrap price-grid">
        <div className="price-copy">
          <h2 id="price-title">Dedicated desk ADGM price: AED 1,150 a month</h2>
          <p>
            One clear monthly price for your dedicated desk in ADGM, Abu Dhabi. No deposit, no admin fees,
            no setup fees and free registration — just a one-time AED 1,200 due-diligence fee that covers the
            checks ADGM requires.
          </p>
          <ul className="nofee">{noFees.map((f) => <li key={f}><Icon name="check" size={15} strokeWidth={2.4} />{f}</li>)}</ul>
        </div>

        <Reveal className="calc" variant="zoom">
          <p className="calc-label" id="term-label">Lease term</p>
          <div className="seg" role="radiogroup" aria-labelledby="term-label" style={{ '--n': terms.length, '--i': terms.indexOf(months) }}>
            {terms.map((t) => (
              <button key={t} type="button" role="radio" aria-checked={months === t} className={months === t ? 'on' : ''} onClick={() => setMonths(t)}>
                {t} months
              </button>
            ))}
            <span className="seg-pill" aria-hidden="true" />
          </div>
          <dl className="calc-rows" aria-live="polite">
            <div><dt>Desk rent ({months} × AED 1,150)</dt><dd key={`r${months}`}>{aed(rent)}</dd></div>
            <div><dt>Due-diligence fee (one-time)</dt><dd>{aed(DUE_DILIGENCE)}</dd></div>
            <div><dt>Deposit, setup &amp; admin fees</dt><dd>AED 0</dd></div>
            <div className="calc-total"><dt>Total for {months} months</dt><dd key={`t${months}`}>{aed(total)}</dd></div>
          </dl>
          <p className="calc-note">ADGM government fees are separate. Published monthly prices.</p>
          <a className="btn btn-mint" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi Aegis, I'm interested in a ${months}-month dedicated desk in ADGM.`)}`} target="_blank" rel="noopener noreferrer">
            Ask about a {months}-month desk
          </a>
        </Reveal>
      </div>

      <div className="wrap">
        <h3 className="inc-title">Included with every ADGM dedicated desk</h3>
        <ul className="inc">
          {included.map((x, i) => (
            <Reveal as="li" key={x.title} delay={(i % 3) * 70}>
              <span className="inc-ic"><Icon name={x.icon} size={20} strokeWidth={1.6} /></span>
              <h4>{x.title}</h4>
              <p>{x.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Compare() {
  const cell = (v) => (v === true ? <span className="yes"><Icon name="check" size={16} strokeWidth={2.4} /><span className="sr-only">Yes</span></span>
    : v === false ? <span className="no" aria-label="No">—</span> : v)
  return (
    <section className="compare sec" id="compare" aria-labelledby="compare-title">
      <div className="wrap">
        <div className="head">
          <h2 id="compare-title">Dedicated &amp; flexi desk in ADGM: which one do you need?</h2>
          <p>Both live in the same Addax Tower business centre. The difference is the registered address — and that decides whether the desk counts for your licence.</p>
        </div>
        <div className="cmp">
          <div className="cmp-col cmp-head" aria-hidden="true">
            <span />
            <span className="cmp-ded"><b>Dedicated desk</b><small>{aed(PRICE)} / month</small></span>
            <span><b>Flexi desk</b><small>{aed(FLEXI_PRICE)} / month</small></span>
          </div>
          <table className="cmp-table">
            <caption className="sr-only">Dedicated desk vs flexi desk in ADGM</caption>
            <thead className="sr-only"><tr><th scope="col">Feature</th><th scope="col">Dedicated desk</th><th scope="col">Flexi desk</th></tr></thead>
            <tbody>
              {compare.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  <td className="cmp-ded" data-label="Dedicated">{cell(r.dedicated)}</td>
                  <td data-label="Flexi">{cell(r.flexi)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="fine">
          Unsure which desk your licence needs? Read
        </p>
      </div>
    </section>
  )
}

export function Audiences() {
  return (
    <section className="aud sec" aria-labelledby="aud-title">
      <div className="wrap aud-grid">
        <div className="aud-head">
          <h2 id="aud-title">Who chooses a dedicated desk in ADGM</h2>
          <figure className="aud-photo">
            <img src={images.flexiImg} alt="ADGM desk space with window desks and Al Reem Island views at Aegis Coworking" width="900" height="675" loading="lazy" decoding="async" />
          </figure>
        </div>
        <ul className="aud-list">
          {audiences.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 70}>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Licence() {
  return (
    <section className="licence sec" id="licence" aria-labelledby="lic-title">
      <div className="wrap">
        <div className="head">
          <h2 id="lic-title">From desk to ADGM licence in four steps</h2>
          <p>Your dedicated desk with a registered ADGM business address is the workspace part of your licence application. Here's how it fits together.</p>
        </div>
        <Reveal as="ol" className="steps">
          {steps.map((s, i) => (
            <li key={s.title} style={{ '--i': i }}>
              <span className="st-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function Gallery() {
  const pics = [
    { src: images.heroImg, w: 1200, h: 900, alt: 'Dedicated desk space ADGM on the 38th floor of Addax Tower', cls: 'g1' },
    { src: images.privateImg, w: 900, h: 675, alt: 'Private office upgrade for growing teams at Aegis Coworking, ADGM', cls: 'g2' },
    { src: images.meetingImg, w: 900, h: 675, alt: 'Meeting room for dedicated desk members in ADGM', cls: 'g3' },
    { src: images.boardroomImg, w: 1024, h: 683, alt: 'Boardroom with Abu Dhabi skyline at Aegis Coworking, ADGM', cls: 'g4' },
    { src: images.receptionImg, w: 900, h: 675, alt: 'Reception at Aegis Coworking business centre in ADGM', cls: 'g5' },
  ]
  return (
    <section className="gallery sec" aria-labelledby="gal-title">
      <div className="wrap">
        <div className="head head-row">
          <h2 id="gal-title">Inside our ADGM desk space</h2>
          <p>Level 38 of Addax Tower: desks by the window, meeting rooms, a boardroom and staffed reception.</p>
        </div>
        <div className="bento">
          {pics.map((p, i) => (
            <Reveal as="figure" key={p.cls} className={p.cls} delay={i * 60} variant="zoom">
              <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
