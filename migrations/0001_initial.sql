CREATE TABLE IF NOT EXISTS categories (
  slug TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  sort_order INTEGER,
  source_path TEXT NOT NULL,
  is_active INTEGER NOT NULL DEFAULT 1,
  synced_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_categories_active_sort_label
  ON categories(is_active, sort_order, label);

CREATE TABLE IF NOT EXISTS tools (
  slug TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  body_md TEXT NOT NULL,
  category_slug TEXT NOT NULL,
  tags_json TEXT NOT NULL,
  website_url TEXT NOT NULL,
  github_url TEXT,
  pricing TEXT NOT NULL,
  logo_url TEXT,
  og_image_url TEXT,
  sort_order INTEGER,
  source_path TEXT NOT NULL,
  is_published INTEGER NOT NULL DEFAULT 1,
  synced_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_slug) REFERENCES categories(slug)
);

CREATE INDEX IF NOT EXISTS idx_tools_published_category_sort_name
  ON tools(is_published, category_slug, sort_order, name);
