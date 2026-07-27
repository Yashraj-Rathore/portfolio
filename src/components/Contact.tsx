import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import Reveal from "./Reveal";

const email = "rathore.yash6@yahoo.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact__glow" aria-hidden="true" />
      <div className="section-kicker section-kicker--light">
        <span>05</span>
        <p>Start a conversation</p>
      </div>

      <Reveal>
        <p className="contact__pretitle">Have a hard problem or a bright idea?</p>
        <h2>
          Let&apos;s make something
          <br />
          <em>worth remembering.</em>
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="contact__actions">
          <a className="button button--light" href={`mailto:${email}`}>
            <FiMail /> Send me a message <FiArrowUpRight />
          </a>
          <button className="copy-button" type="button" onClick={copyEmail}>
            {copied ? <FiCheck /> : <FiCopy />}
            {copied ? "Copied!" : email}
          </button>
        </div>
      </Reveal>

      <div className="contact__bottom">
        <Reveal>
          <p>
            Open to meaningful full-time roles, ambitious products, and
            conversations with people who care about the details.
          </p>
        </Reveal>
        <div className="contact__socials">
          <a
            href="https://github.com/Yashraj-Rathore"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub /> GitHub <FiArrowUpRight />
          </a>
          <a
            href="https://ca.linkedin.com/in/yashraj-rathore"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin /> LinkedIn <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
