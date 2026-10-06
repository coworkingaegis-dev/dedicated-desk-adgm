import { useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import { testimonials, guides, faqs, images, BUSINESS, MAIN_SITE } from '../data/content'

const initials = (n) => n.split(' ').map((p) => p[0]).slice(0, 2).join('')

export function Reviews() {
  const [feat, ...rest] = testimonials
  return (
    <section className="reviews sec" id="reviews" aria-labelledby="rev-title">
      <div className="wrap">
        <div className="head head-row">
          <h2 id="rev-title">What desk members say about Aegis</h2>
          <p>Founders, consultants and startups who rent desk space in ADGM with us. Reviews as published on <a href={`${MAIN_SITE}/`}>aegiscoworking.ae</a>.</p>
        </div>
        <div className="rev-grid">
          <Reveal as="figure" className="rev-feat" variant="left">
            <span className="rev-mark" aria-hidden="true">“</span>
            <blockquote><p>{feat.quote}</p></blockquote>
            <figcaption>
              <span className="rev-av" aria-hidden="true">{initials(feat.name)}</span>
              <span><b>{feat.name}</b><small>{feat.role}</small></span>
            </figcaption>
          </Reveal>
          <ul className="rev-list">
            {rest.map((t, i) => (
              <Reveal as="li" key={t.name} delay={(i % 2) * 80}>
                <figure>
                  <blockquote><p>{t.quote}</p></blockquote>
                  <figcaption>
                    <span className="rev-av" aria-hidden="true">{initials(t.name)}</span>
                    <span><b>{t.name}</b><small>{t.role}</small></span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Guides() {
  return (
    <section className="guides sec" id="guides" aria-labelledby="guides-title">
      <div className="wrap">
        <div className="head head-row">
          <h2 id="guides-title">ADGM desk guides from our blog</h2>
          <p>Licences, visas, registered addresses and costs — read before you choose a desk. <a href={`${MAIN_SITE}/blogs`}>All articles</a></p>
        </div>
        <ul className="g-grid">
          {guides.map((g, i) => (
            <Reveal as="li" key={g.slug} delay={(i % 3) * 60}>
              <a href={g.url}>
                <span className="g-tag">{g.tag}</span>
                <span className="g-title">{g.title}</span>
                <span className="g-go" aria-hidden="true"><Icon name="arrow" size={16} /></span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function FAQ() {
  return (
    <section className="faq sec" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <h2 id="faq-title">Dedicated desk ADGM: frequently asked questions</h2>
          <p>Prices, the ADGM flexi desk requirement, visas and licences. Still unsure? We usually reply on WhatsApp within the hour during business hours.</p>
          <a className="btn btn-dark" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0 ? true : undefined}>
              <summary><h3>{f.q}</h3><span className="fq-ic" aria-hidden="true" /></summary>
              <div className="fq-body">
                <p>{f.a}</p>
                {f.link && <p><a href={f.link.url}>{f.link.text}</a></p>}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Location() {
  const [mapOn, setMapOn] = useState(false)
  return (
    <section className="location sec" id="location" aria-labelledby="loc-title">
      <div className="wrap loc-grid">
        <div>
          <h2 id="loc-title">Dedicated desk ADGM Abu Dhabi: Addax Tower, Al Reem Island</h2>
          <p className="loc-sub">
            Addax Tower sits inside the Abu Dhabi Global Market jurisdiction on Al Reem Island — so your
            desk carries a genuine ADGM address, without ADGM Square prices.{' '}
            <a href={`${MAIN_SITE}/addax-tower-al-reem-island`}>About Addax Tower</a>
          </p>
          <dl className="nap">
            <div><dt>Address</dt><dd>{BUSINESS.name}, {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.country}</dd></div>
            <div><dt>Phone</dt><dd><a href={BUSINESS.phoneTel}>{BUSINESS.phoneDisplay}</a></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></dd></div>
            <div><dt>Hours</dt><dd>24/7 for dedicated desk members · tours Mon–Fri 9 AM–6 PM</dd></div>
          </dl>
          <a className="btn btn-dark" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
        </div>
        <div className="map">
          {mapOn ? (
            <iframe title="Map of Aegis Coworking dedicated desks, Addax Tower, Al Reem Island, ADGM" src={BUSINESS.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          ) : (
            <button type="button" className="map-facade" onClick={() => setMapOn(true)}>
              <img src={images.receptionImg} alt="" width="900" height="675" loading="lazy" decoding="async" />
              <span className="map-pin" aria-hidden="true"><Icon name="pin" size={22} strokeWidth={1.8} /></span>
              <span className="map-tag"><b>Addax Tower, Unit 3812</b><small>Al Reem Island, ADGM</small></span>
              <span className="map-load">Load interactive map</span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="wrap">
        <Reveal className="final-card" variant="zoom">
          <div>
            <p className="final-kicker">Dedicated desk · AED 1,150 / month</p>
            <h2 id="final-title">Your desk in ADGM is waiting on the 38th floor</h2>
            <p>Book a free tour of Addax Tower, or ask for a video walkthrough on WhatsApp today.</p>
          </div>
          <div className="final-actions">
            <a className="btn btn-mint" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to book a tour of your dedicated desks in ADGM.')}`} target="_blank" rel="noopener noreferrer">Book a tour on WhatsApp</a>
            <a className="btn btn-outline-light" href={BUSINESS.phoneTel}><Icon name="phone" size={16} />{BUSINESS.phoneDisplay}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function WhatsAppFab() {
  return (
    <a className="wa-fab" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Aegis Coworking on WhatsApp">
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.5 5.5 4.9 2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </a>
  )
}
