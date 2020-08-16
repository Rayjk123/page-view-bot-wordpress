export interface Guid {
    rendered: string;
}

export interface Title {
    rendered: string;
}

export interface Content {
    rendered: string;
    protected: boolean;
}

export interface Excerpt {
    rendered: string;
    protected: boolean;
}

export interface Meta {
    _bbp_topic_count: number;
    _bbp_reply_count: number;
    _bbp_total_topic_count: number;
    _bbp_total_reply_count: number;
    _bbp_voice_count: number;
    _bbp_anonymous_reply_count: number;
    _bbp_topic_count_hidden: number;
    _bbp_reply_count_hidden: number;
    _bbp_forum_subforum_count: number;
}

export interface Self {
    href: string;
}

export interface Collection {
    href: string;
}

export interface About {
    href: string;
}

export interface Author {
    embeddable: boolean;
    href: string;
}

export interface Reply {
    embeddable: boolean;
    href: string;
}

export interface VersionHistory {
    count: number;
    href: string;
}

export interface PredecessorVersion {
    id: number;
    href: string;
}

export interface WpFeaturedmedia {
    embeddable: boolean;
    href: string;
}

export interface WpAttachment {
    href: string;
}

export interface WpTerm {
    taxonomy: string;
    embeddable: boolean;
    href: string;
}

export interface Cury {
    name: string;
    href: string;
    templated: boolean;
}

export interface Links {
    self: Self[];
    collection: Collection[];
    about: About[];
    author: Author[];
    replies: Reply[];
    'version-history': VersionHistory[];
    'predecessor-version': PredecessorVersion[];
    'wp:featuredmedia': WpFeaturedmedia[];
    'wp:attachment': WpAttachment[];
    'wp:term': WpTerm[];
    curies: Cury[];
}

export interface wpPostObject {
    id: number;
    date: Date;
    date_gmt: Date;
    guid: Guid;
    modified: Date;
    modified_gmt: Date;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Title;
    content: Content;
    excerpt: Excerpt;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: Meta;
    categories: number[];
    tags: any[];
    jetpack_featured_media_url: string;
    yoast_head: string;
    _links: Links;
}


