// app/composables/usePageTransition.js
import { ref } from 'vue'

const isTransitioning = ref(false)
const loadingProgress = ref(0)
let timer = null

function startTransition() {
    clearInterval(timer)
    isTransitioning.value = true
    loadingProgress.value = 0 // сброс только здесь!
    if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden'
    }
    timer = setInterval(() => {
        if (loadingProgress.value < 90) {
            loadingProgress.value = Math.min(90, loadingProgress.value + 1)
        }
    }, 120)
}

function endTransition() {
    clearInterval(timer)
    loadingProgress.value = 100
    setTimeout(() => {
        isTransitioning.value = false
        if (typeof document !== 'undefined') {
            document.body.style.overflow = ''
        }
        // НЕ СБРАСЫВАТЬ loadingProgress.value = 0 здесь!
    }, 1000)
}

export function usePageTransition() {
    return {
        isTransitioning,
        loadingProgress,
        startTransition,
        endTransition
    }
}