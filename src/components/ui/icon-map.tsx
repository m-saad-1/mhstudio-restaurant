import AppWindow from "lucide-react/dist/esm/icons/app-window";
import BadgeDollarSign from "lucide-react/dist/esm/icons/badge-dollar-sign";
import Bot from "lucide-react/dist/esm/icons/bot";
import Box from "lucide-react/dist/esm/icons/box";
import Brain from "lucide-react/dist/esm/icons/brain";
import BriefcaseBusiness from "lucide-react/dist/esm/icons/briefcase-business";
import Calendar from "lucide-react/dist/esm/icons/calendar";
import ChartNoAxesColumn from "lucide-react/dist/esm/icons/chart-no-axes-column";
import Cloud from "lucide-react/dist/esm/icons/cloud";
import CodeXml from "lucide-react/dist/esm/icons/code-xml";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import Database from "lucide-react/dist/esm/icons/database";
import Goal from "lucide-react/dist/esm/icons/goal";
import Gauge from "lucide-react/dist/esm/icons/gauge";
import GitMerge from "lucide-react/dist/esm/icons/git-merge";
import Images from "lucide-react/dist/esm/icons/images";
import Layers from "lucide-react/dist/esm/icons/layers";
import LayoutDashboard from "lucide-react/dist/esm/icons/layout-dashboard";
import Lightbulb from "lucide-react/dist/esm/icons/lightbulb";
import Mail from "lucide-react/dist/esm/icons/mail";
import MailCheck from "lucide-react/dist/esm/icons/mail-check";
import Map from "lucide-react/dist/esm/icons/map";
import MapPinned from "lucide-react/dist/esm/icons/map-pinned";
import Megaphone from "lucide-react/dist/esm/icons/megaphone";
import MessageCircleMore from "lucide-react/dist/esm/icons/message-circle-more";
import MessageSquareQuote from "lucide-react/dist/esm/icons/message-square-quote";
import Monitor from "lucide-react/dist/esm/icons/monitor";
import MonitorSmartphone from "lucide-react/dist/esm/icons/monitor-smartphone";
import Newspaper from "lucide-react/dist/esm/icons/newspaper";
import Palette from "lucide-react/dist/esm/icons/palette";
import Plug from "lucide-react/dist/esm/icons/plug";
import RefreshCw from "lucide-react/dist/esm/icons/refresh-cw";
import Rocket from "lucide-react/dist/esm/icons/rocket";
import Search from "lucide-react/dist/esm/icons/search";
import SearchCheck from "lucide-react/dist/esm/icons/search-check";
import ServerCog from "lucide-react/dist/esm/icons/server-cog";
import Share2 from "lucide-react/dist/esm/icons/share-2";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import ShoppingCart from "lucide-react/dist/esm/icons/shopping-cart";
import Smartphone from "lucide-react/dist/esm/icons/smartphone";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import Star from "lucide-react/dist/esm/icons/star";
import UtensilsCrossed from "lucide-react/dist/esm/icons/utensils-crossed";
import Workflow from "lucide-react/dist/esm/icons/workflow";
import Wrench from "lucide-react/dist/esm/icons/wrench";
import Zap from "lucide-react/dist/esm/icons/zap";
import { type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "app-window": AppWindow,
  "badge-dollar-sign": BadgeDollarSign,
  bot: Bot,
  box: Box,
  brain: Brain,
  "briefcase-business": BriefcaseBusiness,
  calendar: Calendar,
  "chart-no-axes-column": ChartNoAxesColumn,
  cloud: Cloud,
  "code-xml": CodeXml,
  cpu: Cpu,
  database: Database,
  goal: Goal,
  gauge: Gauge,
  "git-merge": GitMerge,
  images: Images,
  layers: Layers,
  "layout-dashboard": LayoutDashboard,
  lightbulb: Lightbulb,
  mail: Mail,
  "mail-check": MailCheck,
  map: Map,
  "map-pinned": MapPinned,
  megaphone: Megaphone,
  "message-circle-more": MessageCircleMore,
  "message-square-quote": MessageSquareQuote,
  monitor: Monitor,
  "monitor-smartphone": MonitorSmartphone,
  newspaper: Newspaper,
  palette: Palette,
  plug: Plug,
  "refresh-cw": RefreshCw,
  rocket: Rocket,
  search: Search,
  "search-check": SearchCheck,
  "server-cog": ServerCog,
  "share-2": Share2,
  "shield-check": ShieldCheck,
  "shopping-cart": ShoppingCart,
  smartphone: Smartphone,
  sparkles: Sparkles,
  star: Star,
  "utensils-crossed": UtensilsCrossed,
  workflow: Workflow,
  wrench: Wrench,
  zap: Zap,
};

export function getIcon(icon: string) {
  return iconMap[icon] ?? Palette;
}
