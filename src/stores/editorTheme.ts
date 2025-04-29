import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

/* thememirror */
import {
  amy,
  ayuLight,
  barf,
  bespin,
  birdsOfParadise,
  boysAndGirls,
  clouds,
  cobalt,
  coolGlow,
  dracula,
  espresso,
  noctisLilac,
  rosePineDawn,
  smoothy,
  solarizedLight,
  tomorrow,
} from 'thememirror'

/* @ddietr/codemirror-themes */
import { aura } from '@ddietr/codemirror-themes/aura'
import { materialDark } from '@ddietr/codemirror-themes/material-dark'
import { materialLight } from '@ddietr/codemirror-themes/material-light'
import { githubDark } from '@ddietr/codemirror-themes/github-dark'
import { githubLight } from '@ddietr/codemirror-themes/github-light'
import { solarizedDark } from '@ddietr/codemirror-themes/solarized-dark'
import { tokyoNight } from '@ddietr/codemirror-themes/tokyo-night'
import { tokyoNightDay } from '@ddietr/codemirror-themes/tokyo-night-day'
import { tokyoNightStorm } from '@ddietr/codemirror-themes/tokyo-night-storm'

/* @codemirror/theme-one-dark */
import { oneDark } from '@codemirror/theme-one-dark'

export const useEditorThemeStore = defineStore('editorTheme', () => {
  const themes = [
    'amy',
    'aura',
    'ayuLight',
    'barf',
    'bespin',
    'birdsOfParadise',
    'boysAndGirls',
    'clouds',
    'cobalt',
    'coolGlow',
    'dracula',
    'espresso',
    'githubDark',
    'githubLight',
    'materialDark',
    'materialLight',
    'noctisLilac',
    'oneDark',
    'rosePineDawn',
    'smoothy',
    'solarizedDark',
    'solarizedLight',
    'tokyoNightDay',
    'tokyoNightStorm',
    'tokyoNight',
    'tomorrow',
  ] as const

  type EditorTheme = (typeof themes)[number]

  const editorThemesMap = {
    amy: amy,
    aura: aura,
    ayuLight: ayuLight,
    barf: barf,
    bespin: bespin,
    birdsOfParadise: birdsOfParadise,
    boysAndGirls: boysAndGirls,
    clouds: clouds,
    cobalt: cobalt,
    coolGlow: coolGlow,
    dracula: dracula,
    espresso: espresso,
    githubDark: githubDark,
    githubLight: githubLight,
    materialDark: materialDark,
    materialLight: materialLight,
    noctisLilac: noctisLilac,
    oneDark: oneDark,
    rosePineDawn: rosePineDawn,
    smoothy: smoothy,
    solarizedDark: solarizedDark,
    solarizedLight: solarizedLight,
    tokyoNightDay: tokyoNightDay,
    tokyoNightStorm: tokyoNightStorm,
    tokyoNight: tokyoNight,
    tomorrow: tomorrow,
  }

  const editorTheme = ref<EditorTheme>(
    (localStorage.getItem('editorTheme') ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'githubDark'
        : 'githubLight')) as EditorTheme,
  )

  const editorPreviewTheme = ref<EditorTheme | null>(null)

  const theme = computed(() => {
    return editorThemesMap[editorPreviewTheme.value ?? editorTheme.value]
  })

  function isActive(theme: EditorTheme) {
    return editorTheme.value === theme
  }

  function name(theme: EditorTheme = editorTheme.value) {
    return theme.replace(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase())
  }

  function preview(theme: EditorTheme) {
    editorPreviewTheme.value = theme
  }

  function unpreview() {
    editorPreviewTheme.value = null
  }

  function set(newTheme: EditorTheme) {
    editorTheme.value = newTheme
    localStorage.setItem('editorTheme', newTheme)
  }

  set(editorTheme.value)

  return { themes, theme, isActive, name, preview, unpreview, set }
})
