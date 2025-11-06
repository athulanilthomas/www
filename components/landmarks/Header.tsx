export function Header() {
  const navLinks = [
    { href: "/", label: "home", ariaLabel: "Home", clientNav: true },
    {
      href: "/experience",
      label: "experience",
      ariaLabel: "Experience",
      partial: "/partials/experience",
      clientNav: true,
    },
    {
      href: "/projects",
      label: "projects",
      ariaLabel: "Projects",
      partial: "/partials/projects",
      clientNav: true,
    },
  ];

  const socialLinks = [
    {
      icon: "i-grommet-icons:github",
      ariaLabel: "Github",
      href: "https://github.com/athulanilthomas",
    },
    {
      icon: "i-grommet-icons:linkedin",
      ariaLabel: "LinkedIn",
      href: "https://www.linkedin.com/in/athul-anil-thomas",
    },
    {
      icon: "i-grommet-icons:x",
      ariaLabel: "X",
      href: "https://twitter.com/AthulAnilThoma2",
    },
    {
      icon: "i-grommet-icons:spotify",
      ariaLabel: "Spotify",
      href: "https://open.spotify.com/user/31blayt3d6grdk7jtlm6zlsqp4oa",
    },
  ];

  return (
    <header class="header-base max-w-[325px] lg:max-w-[620px] lg:top-[2rem] bottom-[2rem] h-[5rem] scrollbar-none items-center  left-1/2 -translate-x-1/2 font-medium">
      <nav>
        <ul class="flex items-center flex-row gap-[2.625rem] items-center justify-center text-gray-300">
          {navLinks.map((link) => {
            return (
              <li>
                <a
                  href={link.href}
                  class="data-[current]:text-primary hover:brightness-[0.8]"
                  aria-label={link.ariaLabel}
                  f-partial={link.partial}
                  f-client-nav={link.clientNav}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li class="hidden lg:flex items-center gap-[1rem]">
            {socialLinks.map((link) => {
              return (
                <a
                  target="_blank"
                  aria-label={link.ariaLabel}
                  class={`${link.icon} text-primary hover:brightness-[0.8]`}
                  href={link.href}
                />
              );
            })}
          </li>
        </ul>
      </nav>
    </header>
  );
}
