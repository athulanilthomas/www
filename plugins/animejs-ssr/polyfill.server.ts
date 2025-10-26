// deno-lint-ignore-file ban-types

const noOpAnimation = () => ({
  // Control Methods
  play: () => noOpAnimation(),
  pause: () => noOpAnimation(),
  restart: () => noOpAnimation(),
  reverse: () => noOpAnimation(),
  cancel: () => noOpAnimation(),
  revert: () => noOpAnimation(),
  resume: () => noOpAnimation(),
  complete: () => noOpAnimation(),
  seek: () => noOpAnimation(),
  stretch: () => noOpAnimation(),
  alternate: () => noOpAnimation(),
  refresh: () => noOpAnimation(),

  // Properties
  duration: 0,
  currentTime: 0,
  progress: 0,
  reversed: false,
  began: false,
  paused: false,
  completed: false,
  finished: Promise.resolve(),

  // Promise Support
  then: (callback?: Function) => {
    return Promise.resolve().then(() => callback && callback());
  },
});

const noOpTimeline = () => ({
  ...noOpAnimation(),
  // Timeline Methods
  add: () => noOpTimeline(),
  set: () => noOpTimeline(),
  call: () => noOpTimeline(),
  label: () => noOpTimeline(),
  remove: () => noOpTimeline(),
  sync: () => noOpTimeline(),
  init: () => noOpTimeline(),

  // Properties
  children: [],
});

const noOpScope = () => ({
  animate: () => noOpAnimation(),
  add: () => noOpScope(),
  addOnce: () => noOpScope(),
  revert: () => noOpScope(),
  refresh: () => noOpScope(),
  keepTime: () => noOpScope(),

  // Properties
  root: null,
  defaults: {},
});

const noOpScrollObserver = () => ({
  // Methods
  revert: () => noOpScrollObserver(),
  refresh: () => noOpScrollObserver(),
  link: () => noOpScrollObserver(),

  // Properties
  progress: 0,
  isInView: false,
  container: null,
  target: null,
});

const noOpDraggable = () => ({
  // Methods
  enable: () => noOpDraggable(),
  disable: () => noOpDraggable(),
  revert: () => noOpDraggable(),
  refresh: () => noOpDraggable(),
  reset: () => noOpDraggable(),
  stop: () => noOpDraggable(),
  setX: () => noOpDraggable(),
  setY: () => noOpDraggable(),
  animateInView: () => noOpDraggable(),
  scrollInView: () => noOpDraggable(),

  // Properties
  x: 0,
  y: 0,
  isDragging: false,
  isEnabled: false,
});

const noOpTextSplitter = () => ({
  // Methods
  revert: () => noOpTextSplitter(),
  refresh: () => noOpTextSplitter(),

  // Properties
  chars: [],
  words: [],
  lines: [],
  original: "",
});

const noOpTimer = () => ({
  // Control Methods
  play: () => noOpTimer(),
  pause: () => noOpTimer(),
  restart: () => noOpTimer(),
  reverse: () => noOpTimer(),
  cancel: () => noOpTimer(),
  revert: () => noOpTimer(),
  resume: () => noOpTimer(),
  complete: () => noOpTimer(),
  seek: () => noOpTimer(),
  stretch: () => noOpTimer(),
  alternate: () => noOpTimer(),

  // Properties
  duration: 0,
  currentTime: 0,
  progress: 0,
  reversed: false,
  began: false,
  paused: false,
  completed: false,

  // Promise Support
  then: (callback?: Function) =>
    Promise.resolve().then(() => callback && callback()),
});

const noOpCubicBezier = () => ({})

const noOpAnimatable = () => ({
  // Methods
  revert: () => noOpAnimatable(),

  // Getters/Setters
  get: () => null,
  set: () => noOpAnimatable(),

  // Properties
  target: null,
  duration: 0,
  ease: "linear",
});

const serverFallback = {
  // Core Animation
  animate: () => noOpAnimation(),

  // Timeline
  createTimeline: () => noOpTimeline(),

  // Stagger
  stagger: () => () => 0,

  // Scope
  createScope: () => noOpScope(),

  // Scroll
  onScroll: () => noOpScrollObserver(),

  // Draggable
  createDraggable: () => noOpDraggable(),

  // Text
  text: {
    split: () => noOpTextSplitter(),
  },

  // SVG
  svg: {
    createMotionPath: () => ({
      x: () => 0,
      y: () => 0,
      angle: () => 0,
      length: 0,
    }),
    morphTo: () => noOpAnimation(),
    createDrawable: () => ({
      draw: () => {},
      length: 0,
    }),
  },

  // Utils
  utils: {
    // DOM Utils
    get: () => null,
    set: () => {},
    remove: () => {},
    cleanInlineStyles: () => {},

    // Math Utils
    random: (min = 0, max = 1) => min + Math.random() * (max - min),
    randomPick: (array: any[]) =>
      array[Math.floor(Math.random() * array.length)],
    lerp: (start: number, end: number, progress: number) =>
      start + (end - start) * progress,
    clamp: (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max),
    round: (value: number, precision = 0) =>
      Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision),
    roundPad: (value: number, precision: number) => value.toFixed(precision),
    snap: (value: number, increment: number) =>
      Math.round(value / increment) * increment,
    wrap: (value: number, min: number, max: number) =>
      ((value - min) % (max - min) + (max - min)) % (max - min) + min,
    mapRange: (
      value: number,
      inMin: number,
      inMax: number,
      outMin: number,
      outMax: number,
    ) => (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin,
    interpolate: (start: any, end: any, progress: number) => start,

    // String Utils
    padStart: (str: string, length: number, char = " ") =>
      str.padStart(length, char),
    padEnd: (str: string, length: number, char = " ") =>
      str.padEnd(length, char),
    shuffle: (array: any[]) => [...array].sort(() => Math.random() - 0.5),

    // Conversion Utils
    degToRad: (degrees: number) => degrees * Math.PI / 180,
    radToDeg: (radians: number) => radians * 180 / Math.PI,

    // Advanced Utils
    sync: (callback: Function) => callback(),
    createTimekeeper: () => ({
      time: 0,
      progress: 0,
      play: () => ({}),
      pause: () => ({}),
      restart: () => ({}),
    }),
    $: () => null,
  },

  // Timer
  createTimer: () => noOpTimer(),

  // Engine
  engine: {
    // Methods
    update: () => {},
    pause: () => {},
    resume: () => {},

    // Parameters
    fps: 60,
    precision: 0.01,
    timeUnit: "ms" as const,
    pauseOnDocumentHidden: true,
    speed: 1,

    // Properties
    isRunning: false,
    currentTime: 0,
  },

  cubicBezier: () => noOpCubicBezier(),

  // Animatable
  animatable: () => noOpAnimatable(),
};

export const createScope = serverFallback.createScope;
export const animate = serverFallback.animate;
export const createTimeline = serverFallback.createTimeline;
export const createTimer = serverFallback.createTimer;
export const utils = serverFallback.utils;
export const svg = serverFallback.svg;
export const cubicBezier = serverFallback.cubicBezier
