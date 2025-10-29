
export function useMenuData(locale) {
    const { find } = useStrapi()
    const menuData = ref(null)
    const isLoading = ref(false)
    const error = ref(null)
    const errorMessage = ref('')

    async function loadData() {
        try {
            isLoading.value = true
            error.value = null

            const response = await find('top-menu', {
                locale: locale.value,
                populate: ['MainMenuItems', 'MainMenuItems.logo', 'MainMenuItems.sections', 'MainMenuItems.sections.links'],
            })
            
            // API top-menu возвращает объект, а не массив
            if (response && response.data && response.data.MainMenuItems) {
                menuData.value = response.data.MainMenuItems
            } else {
                menuData.value = null
            }

        } catch (err) {
            error.value = err
            console.error('Strapi error:', err)
            
            // Безопасная обработка сообщения об ошибке
            let message = 'Не удалось загрузить меню'
            
            if (err && typeof err === 'object') {
                if (err.response?.status === 403) {
                    message = 'Нет доступа к меню (403)'
                } else if (err.statusCode === 403) {
                    message = 'Нет доступа к меню (403)'
                } else if (err.message) {
                    message = err.message
                }
            } else if (typeof err === 'string') {
                message = err
            }
            
            errorMessage.value = message
            
            // Если ошибка 403, устанавливаем пустое меню
            if (err?.response?.status === 403 || err?.statusCode === 403) {
                menuData.value = []
            }
        } finally {
            isLoading.value = false
        }
    }

    // Загружаем меню только на клиенте
    onMounted(() => {
        loadData()
    })
    
    watch([() => locale.value], () => {
        if (process.client) {
            loadData()
        }
    })

    return {
        menuData,
        isLoading,
        error,
        errorMessage,
        refresh: loadData
    }
}