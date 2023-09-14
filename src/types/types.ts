export interface PostSummary {
  readonly id: number;
  readonly frontmatter: {
    readonly title: string;
  };
  readonly excerpt: string;
}

export interface Post {
  readonly id: number;
  readonly frontmatter: {
    readonly title: string;
    readonly sponsor?: string;
  };
  readonly html: string;
}
