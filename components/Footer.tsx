import { Mail } from "lucide-react";
import { site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "@/components/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  const iconLinks = [
    { label: site.social.instagram[0].label, href: site.social.instagram[0].href, Icon: InstagramIcon },
    { label: site.social.instagram[1].label, href: site.social.instagram[1].href, Icon: InstagramIcon },
    { label: site.social.facebook.label, href: site.social.facebook.href, Icon: FacebookIcon },
    { label: `WhatsApp — ${site.phoneDisplay}`, href: `https://wa.me/${site.waNumber}`, Icon: WhatsappIcon },
    { label: site.email, href: `mailto:${site.email}`, Icon: Mail },
  ];

  return (
    <footer className="bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
        <div>
          <p className="font-serif text-[12px] tracking-[0.3em] text-white/70">
            {site.name}
          </p>
          <p className="mt-2 text-[11px] tracking-[0.05em] text-white/30">
            © {year} Karaoğlan Saat. Tüm hakları saklıdır.
          </p>
        </div>

        <nav className="flex items-center gap-8" aria-label="Sosyal medya ve iletişim">
          {iconLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              title={label}
              className="text-white/45 transition-colors hover:text-white"
            >
              <Icon size={23} />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
