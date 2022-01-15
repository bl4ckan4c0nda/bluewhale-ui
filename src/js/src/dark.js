const items = {
    'theme': { localStorage: 'bluewhaleTheme', default: 'light' },
}
const toggle_theme_mode_dark = document.querySelectorAll('.toggle-theme-mode')[0];
const toggle_theme_mode_light = document.querySelectorAll('.toggle-theme-mode')[1];

// Theme config
const config = {}
for (const [key, params] of Object.entries(items)) {
    config[key] = localStorage.getItem(params.localStorage) ? localStorage.getItem(params.localStorage) : params.default
}

// When windows Loaded add light as default value to localStorage
window.onload = (event) => {
    if(localStorage.getItem(items.theme.localStorage) === 'light'){
        updateBodyClass()
    }
    if(localStorage.getItem(items.theme.localStorage) === 'dark'){
        updateBodyClass()
    }
};

toggle_theme_mode_dark.onclick = () => {
    if(document.body.classList.contains('theme-light')) {
        window.localStorage.setItem(items.theme.localStorage,'dark')
        config.theme = localStorage.getItem(items.theme.localStorage)
        updateBodyClass()
    }
}
toggle_theme_mode_light.onclick = () => {
    if(document.body.classList.contains('theme-dark')) {
        window.localStorage.setItem(items.theme.localStorage,'light')
        config.theme = localStorage.getItem(items.theme.localStorage)
        updateBodyClass()
    }
}
const updateBodyClass = () => {
    document.body.classList.remove('theme-dark')
    document.body.classList.remove('theme-light')

    document.body.classList.add(`theme-${config.theme}`);
}

