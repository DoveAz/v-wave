interface IVWaveDirectiveOptions {
  /**
   * The `background-color` of the wave.
   *
   * @remarks
   * You can set this to `currentColor` to automatically use the text-color of the element.
   *
   * @default
   * 'currentColor'
   */
  color: string
  /**
   * The opacity of the wave when it first appears.
   *
   * @default
   * 0.2
   */
  initialOpacity: number
  /**
   * The opacity the wave should be when it has stopped moving.
   *
   * @default
   * 0.1
   */
  finalOpacity: number
  /**
   * The duration of the wave animation in seconds.
   *
   * @default
   * 0.4
   */
  duration: number
  /**
   * Any valid CSS `<timing-function>`
   *
   * @default
   * 'ease-out'
   */
  easing: string
  /**
   * The delay, in milliseconds, during which the animation will be canceled if the user moves their figure/pointer (e.g. while scrolling).
   *
   * @note
   * The wave will not appear until after the delay, meaning a delay greater than 100ms can make the site feel sluggish.
   *
   * @default
   * 75
   */
  cancellationPeriod: number

  /**
   * Sets the behavior of the wave when used with triggers.
   *
   * Possible values:
   * - `false`: disables the use of triggers.
   *   - if a `v-wave-trigger` (without an ID) is present in the dom tree of this element, it will be ignored (i.e. `v-wave` always behaves as if there's no trigger).
   * - `true`: requires a trigger to activate the wave.
   *   - `v-wave` assumes the presence of a `v-wave-trigger` (without an ID) in its dom tree. The wave will only active for `pointerdown` events on the trigger element.
   * - `"auto"`: if a `v-wave-trigger` (without an ID) is present in the dom-tree of the v-wave element, it behaves as `trigger: true`, otherwise it behaves as `trigger: false`.
   * - `string`: any string other than `"auto"` will be treated as an ID. `v-wave` will only activate when a `v-wave-trigger` with a matching ID receives a `pointerdown` event.
   *
   * @default
   * "auto"
   */
  trigger: string | boolean
}

interface IVWavePluginOptions extends IVWaveDirectiveOptions {
  /**
   * Used to overwrite the directive's name.
   *
   * @remarks
   * This can be useful if you're migrating from another ripple plugin.
   *
   * @example
   * ```html
   * <!-- If you set `directive: 'ripple'` -->
   * <!-- You would use it like so:        -->
   * <button v-ripple>Click here</button>`
   * ```
   *
   * @default
   * 'wave'
   */
  directive: string
}

const DEFAULT_PLUGIN_OPTIONS: IVWavePluginOptions = {
  directive: 'wave',
  color: 'currentColor',
  initialOpacity: 0.2,
  finalOpacity: 0.1,
  duration: 0.4,
  easing: 'ease-out',
  cancellationPeriod: 75,
  trigger: 'auto'
}

export { DEFAULT_PLUGIN_OPTIONS, IVWavePluginOptions, IVWaveDirectiveOptions }
