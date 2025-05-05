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
  /** The themes of the editor. */
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

  /** A theme of the editor. */
  type EditorTheme = (typeof themes)[number]

  /** The themes of the editor. */
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

  /** The current theme of the editor. */
  const editorTheme = ref<EditorTheme>(
    (localStorage.getItem('editorTheme') ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'githubDark'
        : 'githubLight')) as EditorTheme,
  )

  /** The preview theme of the editor. */
  const editorPreviewTheme = ref<EditorTheme | null>(null)

  /** Gets the current theme of the editor */
  const theme = computed(() => {
    return editorThemesMap[editorPreviewTheme.value ?? editorTheme.value]
  })

  /**
   * Gets whether a theme is active.
   * @param theme The theme to check.
   * @returns Whether the theme is active.
   */
  function isActive(theme: EditorTheme) {
    return editorTheme.value === theme
  }

  /**
   * Gets the name of a theme.
   * @param theme The theme to get the name of.
   * @returns The name of the theme.
   */
  function name(theme: EditorTheme = editorTheme.value) {
    return theme.replace(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase())
  }

  /**
   * Previews a theme.
   * @param theme The theme to preview.
   */
  function preview(theme: EditorTheme) {
    editorPreviewTheme.value = theme
  }

  /** Unpreviews a theme. */
  function unpreview() {
    editorPreviewTheme.value = null
  }

  /**
   * Sets the theme of the editor.
   * @param newTheme The theme to set.
   */
  function set(newTheme: EditorTheme) {
    editorTheme.value = newTheme
    localStorage.setItem('editorTheme', newTheme)
  }

  set(editorTheme.value)

  return { themes, theme, isActive, name, preview, unpreview, set }
})
