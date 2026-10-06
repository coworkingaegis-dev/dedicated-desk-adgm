import { useEffect, useRef } from 'react'
import aegisLogo from '../assets/aegis-logo-96.png'
import heroSmall from '../assets/dedicated-desk-adgm-addax-tower-640.webp'
import { images, cardPerks, BUSINESS } from '../data/content'

// 3D tilt for the member card (pointer devices only, respects reduced motion)
function useCardTilt() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(hover: hover)').matches) return
    const stage = el.parentElement
    const move = (e) => {
      const r = stage.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.setProperty('--ry', `${(x * 14).toFixed(2)}deg`)
      el.style.setProperty('--rx', `${(-y * 12).toFixed(2)}deg`)
      el.style.setProperty('--gx', `${((x + 0.5) * 100).toFixed(1)}%`)
      el.style.setProperty('--gy', `${((y + 0.5) * 100).toFixed(1)}%`)
    }
    const leave = () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg') }
    stage.addEventListener('pointermove', move)
    stage.addEventListener('pointerleave', leave)
    return () => { stage.removeEventListener('pointermove', move); stage.removeEventListener('pointerleave', leave) }
  }, [])
  return ref
}

function Hero() {
  const card = useCardTilt()

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-tag hl" style={{ '--d': 0 }}>
            <span className="pulse" aria-hidden="true" />Level 38, Addax Tower, Al Reem Island
          </p>
          <h1 id="hero-title" className="hero-title hl" style={{ '--d': 1 }}>
            Dedicated desk in ADGM, yours every day
          </h1>
          <p className="hero-lead hl" style={{ '--d': 2 }}>
            An ADGM-compliant dedicated desk for AED 1,150 a month — your own permanent desk with a
            registered ADGM business address for your licence, a lease registered on AccessRP and 24/7
            access. Only AED 150 more than a flexi desk in ADGM.
          </p>
          <div className="hero-ctas hl" style={{ '--d': 3 }}>
            <a className="btn btn-dark" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to reserve a dedicated desk in ADGM.')}`} target="_blank" rel="noopener noreferrer">Reserve a desk</a>
            <a className="btn btn-ghost" href="#price">See what's included</a>
          </div>
          <ul className="hero-ticks hl" style={{ '--d': 4 }}>
            <li>No deposit</li><li>No setup or admin fees</li><li>Free registration</li>
          </ul>
        </div>

        <div className="hero-stage" role="group" aria-label="Aegis dedicated desk membership">
          <figure className="hero-photo">
            <img src={images.heroImg} srcSet={`${heroSmall} 640w, ${images.heroImg} 1200w`} sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1080px) 640px, 560px" alt="Dedicated desk in ADGM with registered business address at Aegis Coworking, Addax Tower, Al Reem Island"
              width="1200" height="900" fetchPriority="high" decoding="async" />
          </figure>

          <div className="card-wrap">
            <div className="mcard" ref={card}>
              <div className="mcard-face">
                <span className="mcard-sheen" aria-hidden="true" />
                <div className="mcard-top">
                  <span className="mcard-brand"><img src={aegisLogo} alt="" width="96" height="96" />Aegis</span>
                  <span className="mcard-chip" aria-hidden="true" />
                </div>
                <p className="mcard-kind">Dedicated Desk</p>
                <p className="mcard-price"><b>AED 1,150</b><span>/ month</span></p>
                <ul className="mcard-perks">
                  {cardPerks.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <div className="mcard-foot">
                  <span>Level 38, Addax Tower</span>
                  <span>ADGM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap hero-strip">
        <p>
          Aegis Coworking is an office space provider in ADGM. Rent desk space in ADGM as a dedicated desk
          or a flexi desk, or find cheap desk space in ADGM with a day pass from AED 100 — flexible office
          space in ADGM, inside the Abu Dhabi Global Market jurisdiction on Al Reem Island.
        </p>
      </div>
    </section>
  )
}

export default Hero
