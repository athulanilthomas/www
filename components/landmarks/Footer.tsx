export function Footer() {
  const year = new Date().getFullYear();
  const links = [
    {
      icon: "i-grommet-icons:github",
      href: "https://github.com/athulanilthomas",
    },
    {
      icon: "i-grommet-icons:linkedin",
      href: "https://github.com/athulanilthomas",
    },
    { icon: "i-grommet-icons:x", href: "https://github.com/athulanilthomas" },
    {
      icon: "i-grommet-icons:spotify",
      href: "https://github.com/athulanilthomas",
    },
  ];

  return (
    <footer class="xl:max-w-[1120px] 2xl:max-w-[1520px] mt-0 mb-[8rem] md:mb-0 mx-[2.125rem] xl:mx-auto">
      <section class="bg-[rgba(33,31,35,0.35)] rounded-[6.25rem] py-[1.625rem] px-[2rem]">
        <div class="flex justify-between text-gray-400">
          <strong class="font-normal">Follow me</strong>
          <span class="flex items-center gap-[1rem]">
            {links.map((link) => (
              <a
                target="_blank"
                href={link.href}
                class={`${link.icon} text-primary hover:brightness-[0.8]`}
              />
            ))}
          </span>
        </div>
      </section>

      <p class="text-gray-300 py-[1.625rem] px-[2rem]">
        athulanilthomas © {year}
      </p>
    </footer>
  );
}
