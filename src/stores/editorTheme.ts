import { defineStore } from 'pinia'
import type { Extension } from '@codemirror/state'
import { computed, ref } from 'vue'
import { useAppThemeStore } from './appTheme'

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
  /** A theme of an editor. */
  type EditorTheme =
    | 'amy'
    | 'aura'
    | 'ayuLight'
    | 'barf'
    | 'bespin'
    | 'birdsOfParadise'
    | 'boysAndGirls'
    | 'clouds'
    | 'cobalt'
    | 'coolGlow'
    | 'dracula'
    | 'espresso'
    | 'githubDark'
    | 'githubLight'
    | 'materialDark'
    | 'materialLight'
    | 'noctisLilac'
    | 'oneDark'
    | 'rosePineDawn'
    | 'smoothy'
    | 'solarizedDark'
    | 'solarizedLight'
    | 'tokyoNightDay'
    | 'tokyoNightStorm'
    | 'tokyoNight'
    | 'tomorrow'

  /** The themes of the editor. */
  const themes = [
    { key: 'amy', name: 'Amy', theme: amy },
    { key: 'aura', name: 'Aura', theme: aura },
    { key: 'ayuLight', name: 'Ayu Light', theme: ayuLight },
    { key: 'barf', name: 'Barf', theme: barf },
    { key: 'bespin', name: 'Bespin', theme: bespin },
    { key: 'birdsOfParadise', name: 'Birds of Paradise', theme: birdsOfParadise },
    { key: 'boysAndGirls', name: 'Boys and Girls', theme: boysAndGirls },
    { key: 'clouds', name: 'Clouds', theme: clouds },
    { key: 'cobalt', name: 'Cobalt', theme: cobalt },
    { key: 'coolGlow', name: 'Cool Glow', theme: coolGlow },
    { key: 'dracula', name: 'Dracula', theme: dracula },
    { key: 'espresso', name: 'Espresso', theme: espresso },
    { key: 'githubDark', name: 'GitHub Dark', theme: githubDark },
    { key: 'githubLight', name: 'GitHub Light', theme: githubLight },
    { key: 'materialDark', name: 'Material Dark', theme: materialDark },
    { key: 'materialLight', name: 'Material Light', theme: materialLight },
    { key: 'noctisLilac', name: 'Noctis Lilac', theme: noctisLilac },
    { key: 'oneDark', name: 'One Dark', theme: oneDark },
    { key: 'rosePineDawn', name: 'Rose Pine Dawn', theme: rosePineDawn },
    { key: 'smoothy', name: 'Smoothy', theme: smoothy },
    { key: 'solarizedDark', name: 'Solarized Dark', theme: solarizedDark },
    { key: 'solarizedLight', name: 'Solarized Light', theme: solarizedLight },
    { key: 'tokyoNightDay', name: 'Tokyo Night Day', theme: tokyoNightDay },
    { key: 'tokyoNightStorm', name: 'Tokyo Night Storm', theme: tokyoNightStorm },
    { key: 'tokyoNight', name: 'Tokyo Night', theme: tokyoNight },
    { key: 'tomorrow', name: 'Tomorrow', theme: tomorrow },
  ] satisfies { key: EditorTheme; name: string; theme: Extension }[]

  /** The preview theme of the editor. */
  const previewTheme = ref<EditorTheme | null>(null)

  /** The theme of the editor. */
  const editorTheme = ref<EditorTheme>(
    (localStorage.getItem('editorTheme') ??
      (useAppThemeStore().isDark ? 'githubDark' : 'githubLight')) as EditorTheme,
  )

  /** Gets the theme of the editor. */
  const theme = computed(() => (previewTheme.value ? previewTheme.value : editorTheme.value))

  /**
   * Previews the theme of the editor.
   * @param newTheme The theme to preview.
   */
  function preview(newTheme: EditorTheme) {
    previewTheme.value = newTheme
  }

  /**
   * Sets the theme of the editor.
   * @param newTheme The theme to set the editor to.
   */
  function set(newTheme: EditorTheme) {
    editorTheme.value = newTheme
    localStorage.setItem('editorTheme', newTheme)
  }

  return { themes, theme, preview, set }
})
