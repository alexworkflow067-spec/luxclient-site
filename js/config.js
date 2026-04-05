window.LUX_CONFIG = {
  appName: "Lux Client",
  owner: "Alexetrey",
  versionRange: "1.20 - 1.21.11",
  latestVersion: "1.21.11",
  loader: "Fabric",
  download: {
    file: "/files/LuxClient-Setup-1.0.0.exe",
    version: "1.0.0",
    sizeLabel: "~100 MB",
    platformLabel: "Windows x64",
    sha256: "544395c44d4f79be0636a86c5b3af4c1623e2cdea388bf2701dc8554e030eef6"
  },
  community: {
    discord: "https://discord.gg/Wck39YDpZx",
    youtube: "https://youtube.com/@lucnoxity1258",
    tierlist: "https://discord.gg/luctierlist",
    development: "https://discord.gg/4nU3FUVRC8"
  },
  titlePills: [
    { label: "Development", url: "https://discord.gg/9S3rMutnbp" },
    { label: "Lucnoxity", url: "https://youtube.com/@lucnoxity1258" },
    { label: "Optimization Mods", url: "https://modrinth.com/mods?g=categories:%27optimization%27" }
  ],
  defaultMods: ["Fabric API", "Cloth Config", "Sodium", "Lithium", "FerriteCore", "ImmediatelyFast", "Entity Culling", "Dynamic FPS", "Krypton", "ModernFix", "Cubes Without Borders", "Mod Menu", "FastQuit", "Marlow's Crystal Optimizer", "Hero's Anchor Optimizer"],
  partners: [
    { label: "Lucnoxity", role: "Creator", color: "#acd0ff" },
    { label: "Alexetrey", role: "Developer", color: "#a8e6a3" }
  ],
  announcements: [
    {
      id: "beta-live",
      type: "update",
      title: "Lux Client Beta is live!",
      body: "Welcome to Lux Client Beta. Minecraft 1.20 through 1.21.11 is supported, with Sodium, Lithium, and FerriteCore pre-installed for better performance. Report issues in our Discord.",
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
      desc: "Sodium, Lithium, FerriteCore, Entity Culling, and ImmediatelyFast are included by default in every install. No manual setup needed.",
      highlight: "Up to 3x higher FPS"
    },
    {
      icon: "📦",
      category: "Mods",
      title: "Full Mod Manager",
      desc: "Import .jar mods with drag-and-drop, enable or disable them instantly, and keep each Minecraft version fully isolated.",
      highlight: "Version-isolated mods"
    },
    {
      icon: "🛡",
      category: "Security",
      title: "Microsoft Authentication",
      desc: "Sign in safely through Microsoft's official login flow. Passwords are never stored in the launcher.",
      highlight: "No password stored"
    },
    {
      icon: "🧠",
      category: "Java",
      title: "Automatic Java Management",
      desc: "Lux Client detects local Java automatically or installs JRE 21 for you, then applies optimized JVM launch flags.",
      highlight: "JRE 21 auto-installed"
    },
    {
      icon: "🧩",
      category: "Versions",
      title: "Multi-Version Support",
      desc: "Install and switch quickly between supported Minecraft releases using clean, per-version Fabric profiles.",
      highlight: "1.20 - 1.21.11"
    },
    {
      icon: "🔁",
      category: "Updates",
      title: "Automatic Update Notifications",
      desc: "Lux Client checks for new releases in the background and shows a clear in-app banner when an update is ready.",
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
