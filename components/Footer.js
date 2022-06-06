import Link from 'next/link'

const Footer = () => {
  /*================Design Object======================*/
  const design = {
    footerStyle:
      'flex flex-col justify-center items-center p-2 gap-4 bg-zinc-900 text-gray-500 mt-auto',
    spanStyle: 'text-[10px] text-gray-500 text-center font-medium w-10/12',
    linkStyle: 'flex gap-2',
  }
  return (
    <div className={design.footerStyle}>
      <div className={design.linkStyle}>
        &copy; 2022 | <a href="https://www.jscrips.com">Jscrips</a> |{' '}
        <a href="https://www.github.com/Jscrips">Github</a> |{' '}
        <a href="https://www.linkedin.com/in/jscrips/">LinkedIn</a>
      </div>
      <span className={design.spanStyle}>
        Apex Legends is a registered trademark of Electronic Arts. Trademarks
        are the property of their respective owners. Game materials copyright
        Electronic Arts. Electronic Arts has not endorsed and is not responsible
        this site or its content.
      </span>
    </div>
  )
}

export default Footer
