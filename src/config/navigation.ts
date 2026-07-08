import type { LucideIcon } from 'lucide-react'
import {
	Ticket,
	Activity,
	Users,
	Repeat,
	Compass,
	ShoppingBag,
	Music,
} from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'codes' -> t('nav.codes')
	path: string // URL 路径，如 '/codes'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

// 导航分类顺序按 SEO 优先级与用户意图排列：
// Codes → Tier List → Characters → Combos → Guide → Skins → Music
export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'codes', path: '/codes', icon: Ticket, isContentType: true },
	{ key: 'tierlist', path: '/tierlist', icon: Activity, isContentType: true },
	{ key: 'characters', path: '/characters', icon: Users, isContentType: true },
	{ key: 'combos', path: '/combos', icon: Repeat, isContentType: true },
	{ key: 'guide', path: '/guide', icon: Compass, isContentType: true },
	{ key: 'skins', path: '/skins', icon: ShoppingBag, isContentType: true },
	{ key: 'music', path: '/music', icon: Music, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/' -> ['codes', 'tierlist', 'characters', 'combos', 'guide', 'skins', 'music']

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
