
export function getStrapiURL(path = '') {
    const config = useRuntimeConfig()
    const baseUrl = config.public.strapiUrl || "http://localhost:1337"
    const result = `${baseUrl}${path}`
    console.log('getStrapiURL:', { path, baseUrl, result })
    return result
}

export function getStrapiMedia(url) {
    console.log('getStrapiMedia called with:', url)

    if (url == null) {
        console.log('getStrapiMedia: url is null')
        return null
    }

    const config = useRuntimeConfig()
    const baseUrl = config.public.strapiUrl || "http://localhost:1337"

    // Если URL уже абсолютный, возвращаем как есть
    if (url.startsWith("http") || url.startsWith("//")) {
        console.log('getStrapiMedia: already absolute URL')

        if (url.includes('localhost:1337')) {
            const corrected = url.replace('http://localhost:1337', baseUrl)
            console.log('getStrapiMedia: corrected localhost URL', corrected)
            return corrected
        }
        return url
    }

    // Для относительных путей добавляем базовый URL
    const result = `${baseUrl}${url}`
    console.log('getStrapiMedia: built URL', result)
    return result
}

// handle the redirection to the homepage if the page we are browsinng doesn't exists
export function redirectToHomepage() {
    return {
        redirect: {
            destination: `/`,
            permanent: false,
        },
    };
}

// This function will build the url to fetch on the Strapi API
export function getData(slug, locale) {
    const slugToReturn = `/${slug}?lang=${locale}`;
    const apiUrl = `/pages?slug=${slug}&_locale=${locale}`;

    return {
        data: getStrapiURL(apiUrl),
        slug: slugToReturn,
    };
}

export function childrenToHtml(children) {
    if (!Array.isArray(children)) return ''
    return children
        .map((child) => {
            if (child.type === 'text') {
                let text = child.text || ''
                if (child.bold) text = `<strong>${text}</strong>`
                if (child.italic) text = `<em>${text}</em>`
                if (child.underline) text = `<u>${text}</u>`
                return text
            }
            if (child.type === 'link') {
                // Очистка URL от дублирования
                let href = child.url || '#'

                // Удаление дублирующихся частей
                href = href.replace(/^(.*?)(mailto:)?/, 'mailto:')

                // Удаление дублирующихся доменов
                const cleanUrl = new URL(href)
                href = `mailto:${cleanUrl.pathname.replace(/^\//, '')}`

                // Получение текста ссылки
                const linkText = childrenToHtml(child.children) || href.replace('mailto:', '')

                return `<a href="${href}" target="_blank">${linkText}</a>`
            }
            return ''
        })
        .join('')
}

export function richTextToHtml(blocks) {
    if (!Array.isArray(blocks)) return '';
    return blocks
        .map((block) => {
            switch (block.type) {
                case 'paragraph':
                    return `<p>${childrenToHtml(block.children)}</p>`;
                case 'heading': {
                    const level = block.level || 1;
                    return `<h${level} class="h${level}">${childrenToHtml(block.children)}</h${level}>`;
                }
                case 'list': {
                    const listTag = block.format === 'unordered' ? 'ul' : 'ol';
                    return `<${listTag}>${(block.children || [])
                        .map((li) => `<li>${childrenToHtml(li.children)}</li>`)
                        .join('')}</${listTag}>`;
                }
                default:
                    console.warn('Неизвестный тип блока:', block.type);
                    return '';
            }
        })
        .filter(item => item !== '')
        .join('');
}