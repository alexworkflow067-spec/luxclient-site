window.LUX_CONFIG = {
  appName: "Lux Client",
  owner: "Alexetrey",
  versionRange: "1.20 - 1.21.11",
  latestVersion: "1.21.11",
  loader: "Fabric",
  download: {
    file: "/downloads/LuxClient-Setup-latest.exe",
    version: "1.0.0",
    sizeLabel: "~100 MB",
    platformLabel: "Windows x64",
    sha256: "a0ab03086686d67b24fc2d4e9b8e4dc92707caa4c4d10be77f97f4941fd8a7f8"
  },
  community: {
    discord: "https://discord.gg/Wck39YDpZx",
    youtube: "https://youtube.com/@lucnoxity1258",
    tierlist: "https://discord.gg/luctierlist",
    development: "https://discord.gg/4nU3FUVRC8"
  },
  titlePills: [
    { label: "play.smpvpp.com", url: "https://play.smpvpp.com" },
    { label: "Lucnoxity", url: "https://youtube.com/@lucnoxity1258" },
    { label: "Optimization Mods", url: "https://modrinth.com/mods?g=categories:%27optimization%27" }
  ],
  defaultMods: ["Fabric API", "Cloth Config", "WalksyLib", "Sodium", "Lithium", "FerriteCore", "ImmediatelyFast", "Entity Culling", "Dynamic FPS", "Nvidium", "Iris Shaders", "Cubes Without Borders", "Mod Menu", "AppleSkin", "Shield Fixes", "FastQuit", "Shulker Box Tooltip", "Combat Hitboxes", "Marlow's Crystal Optimizer", "Hero's Anchor Optimizer"],
  partners: [
    { label: "Lucnoxity", role: "Creator", color: "#acd0ff" },
    { label: "Alexetrey", role: "Developer", color: "#a8e6a3" }
  ],
  announcements: [
    {
      id: "beta-live",
      type: "update",
      title: "Lux Client Beta is live!",
      body: "Welcome to Lux Client Beta. Fabric 1.20 through 1.21.11 supported. Sodium, Lithium, FerriteCore pre-installed for maximum performance. Report bugs in our Discord.",
      pinned: true
    },
    {
      id: "mc-1214",
      type: "info",
      title: "1.21.11 now supported",
      body: "The latest Minecraft 1.21.11 release is now available. All performance mods have been updated to support the latest version.",
      pinned: false
    }
  ],
  features: [
    {
      icon: "⚡",
      category: "Performance",
      title: "Pre-configured Performance Mods",
      desc: "Sodium, Lithium, FerriteCore, EntityCulling and ImmediatelyFast ship with every install. No setup required.",
      highlight: "Up to 3x FPS improvement"
    },
    {
      icon: "📦",
      category: "Mods",
      title: "Full Mod Manager",
      desc: "Add .jar mods with drag and drop, toggle them on or off, and keep each Minecraft version isolated.",
      highlight: "Version-isolated mods"
    },
    {
      icon: "🛡",
      category: "Security",
      title: "Microsoft Authentication",
      desc: "Secure sign-in through Microsoft's login flow. Passwords are never stored in the launcher.",
      highlight: "No password stored"
    },
    {
      icon: "🧠",
      category: "Java",
      title: "Automatic Java Management",
      desc: "Lux Client detects local Java or downloads JRE 21 automatically and applies optimized JVM flags.",
      highlight: "JRE 21 auto-installed"
    },
    {
      icon: "🧩",
      category: "Versions",
      title: "Multi-Version Support",
      desc: "Install and switch quickly between supported Minecraft releases with Fabric profiles.",
      highlight: "1.20 - 1.21.11"
    },
    {
      icon: "🔁",
      category: "Updates",
      title: "Automatic Update Notifications",
      desc: "Lux Client checks for new releases in the background and shows a banner when an update is ready to install.",
      highlight: "In-app update banner"
    }
  ],
  changelog: [
    {
      version: "1.0.0-beta",
      date: "March 2026",
      type: "release",
      title: "Initial Beta Release",
      changes: [
        { type: "new", text: "Microsoft account login with browser sign-in flow" },
        { type: "new", text: "Minecraft 1.20 to 1.21.11 support" },
        { type: "new", text: "Fabric mod loader integration with auto-install" },
        { type: "new", text: "Default performance mods pre-installed" },
        { type: "new", text: "Full mod manager with drag-and-drop .jar support" },
        { type: "new", text: "RAM allocation slider and per-version profiles" },
        { type: "new", text: "Java 21 auto-detection and download" },
        { type: "new", text: "Website installer update flow for beta releases" }
      ]
    }
  ],
  storeItems: [],
  installSteps: [
    { n: 1, title: "Download installer", desc: "Click Download to get the latest LuxClient-Setup.exe." },
    { n: 2, title: "Run installer", desc: "Open the .exe and follow the setup wizard." },
    { n: 3, title: "Sign in", desc: "Use Microsoft sign-in, or enter a username for offline mode." },
    { n: 4, title: "Select version", desc: "Choose your Minecraft version and install." },
    { n: 5, title: "Launch", desc: "Press Launch and play with pre-installed performance mods." }
  ],
  systemRequirements: [
    { label: "OS", value: "Windows 10 or 11 (64-bit)" },
    { label: "RAM", value: "4 GB minimum, 8 GB recommended" },
    { label: "Storage", value: "2 GB free space" },
    { label: "Java", value: "Auto-installed (JRE 21)" },
    { label: "Minecraft", value: "Valid Microsoft / Mojang account" }
  ]
}
