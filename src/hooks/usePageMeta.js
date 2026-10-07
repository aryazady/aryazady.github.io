import { useEffect } from 'react'

export default function usePageMeta(data, view) {
  useEffect(() => {
    document.title = data.meta.pageTitles[view] || data.profile.name

    const faviconPath = data.meta.favicon

    // Remove dynamically created favicon links
    document
      .querySelectorAll('link[data-dynamic-favicon]')
      .forEach((link) => link.remove())

    const addLink = (attributes) => {
      const link = document.createElement('link')

      Object.entries(attributes).forEach(([key, value]) => {
        link.setAttribute(key, value)
      })

      link.dataset.dynamicFavicon = 'true'
      document.head.appendChild(link)
    }

    addLink({
      rel: 'icon',
      type: 'image/x-icon',
      href: `${faviconPath}/favicon.ico`,
    })

    addLink({
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `${faviconPath}/favicon-32x32.png`,
    })

    addLink({
      rel: 'manifest',
      href: `${faviconPath}/site.webmanifest`,
    })
  }, [data, view])
}

// Sets document.title and favicon (emoji) from JSON config, per current view.
// export default function usePageMeta(data, view) {
//   useEffect(() => {
//     document.title = data.meta.pageTitles[view] || data.profile.name;

//     const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="82" font-size="80">${data.meta.favicon}</text></svg>`;
//     const href = 'data:image/svg+xml,' + encodeURIComponent(svg);
//     let link = document.getElementById('favicon');
//     if (!link) {
//       link = document.createElement('link');
//       link.id = 'favicon';
//       link.rel = 'icon';
//       document.head.appendChild(link);
//     }
//     link.href = href;
//   }, [data, view]);
// }
