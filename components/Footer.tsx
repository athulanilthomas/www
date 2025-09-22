export function Header() {
const year = new Date().getFullYear;

  const socialLinks = [
    {
      icon: "i-grommet-icons:github",
      href: "https://github.com/athulanilthomas",
    },
    {
      icon: "i-grommet-icons:linkedin",
      href: "https://github.com/athulanilthomas",
    }
]

return (
     <footer className={container}>
      <section>
        <div>
          <strong>Follow me</strong>

          <span>
            <a target="_blank" href="https://github.com/lucasviga">
              <Image src={ghIcon} alt="GitHub Icon" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/lucasviga/">
              <Image src={inIcon} alt="LinkedIn Icon" />
            </a>
            <a target="_blank" href="https://medium.com/@lucasviga">
              <Image src={mdIcon} alt="Medium Icon" />
            </a>
            <a target="_blank" href="https://www.figma.com/@lucasviga">
              <Image src={figmaIcon} alt="Medium Icon" />
            </a>            
          </span>
        </div>
      </section>

      <p>vigads © {year}</p>
    </footer>
)
}