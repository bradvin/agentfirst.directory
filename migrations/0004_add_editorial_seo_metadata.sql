ALTER TABLE categories ADD COLUMN seo_title TEXT;
ALTER TABLE categories ADD COLUMN description_md TEXT;
ALTER TABLE categories ADD COLUMN definition_md TEXT;
ALTER TABLE categories ADD COLUMN scope_md TEXT;
ALTER TABLE categories ADD COLUMN inclusion_md TEXT;
ALTER TABLE categories ADD COLUMN exclusion_md TEXT;
ALTER TABLE categories ADD COLUMN selection_guide_md TEXT;
ALTER TABLE categories ADD COLUMN use_cases_json TEXT NOT NULL DEFAULT '[]';
ALTER TABLE categories ADD COLUMN sources_json TEXT NOT NULL DEFAULT '[]';
ALTER TABLE categories ADD COLUMN reviewed_by TEXT;
ALTER TABLE categories ADD COLUMN reviewed_at TEXT;
ALTER TABLE categories ADD COLUMN published_at TEXT;
ALTER TABLE categories ADD COLUMN content_modified_at TEXT;
ALTER TABLE categories ADD COLUMN is_indexable INTEGER NOT NULL DEFAULT 1 CHECK (is_indexable IN (0, 1));

ALTER TABLE tools ADD COLUMN logo_width INTEGER CHECK (logo_width IS NULL OR logo_width > 0);
ALTER TABLE tools ADD COLUMN logo_height INTEGER CHECK (logo_height IS NULL OR logo_height > 0);
ALTER TABLE tools ADD COLUMN og_image_width INTEGER CHECK (og_image_width IS NULL OR og_image_width > 0);
ALTER TABLE tools ADD COLUMN og_image_height INTEGER CHECK (og_image_height IS NULL OR og_image_height > 0);
ALTER TABLE tools ADD COLUMN entity_type TEXT CHECK (
  entity_type IS NULL OR entity_type IN (
    'software-application',
    'web-application',
    'software-source-code',
    'web-api',
    'service',
    'technical-standard',
    'protocol'
  )
);
ALTER TABLE tools ADD COLUMN developer_name TEXT;
ALTER TABLE tools ADD COLUMN docs_url TEXT;
ALTER TABLE tools ADD COLUMN pricing_url TEXT;
ALTER TABLE tools ADD COLUMN license_url TEXT;
ALTER TABLE tools ADD COLUMN interfaces_json TEXT NOT NULL DEFAULT '[]';
ALTER TABLE tools ADD COLUMN deployment_modes_json TEXT NOT NULL DEFAULT '[]';
ALTER TABLE tools ADD COLUMN evidence_json TEXT NOT NULL DEFAULT '[]';
ALTER TABLE tools ADD COLUMN verification_level TEXT CHECK (
  verification_level IS NULL OR verification_level IN (
    'documentation-reviewed',
    'vendor-confirmed',
    'hands-on-tested'
  )
);
ALTER TABLE tools ADD COLUMN classification_rationale_md TEXT;
ALTER TABLE tools ADD COLUMN inclusion_rationale_md TEXT;
ALTER TABLE tools ADD COLUMN best_for_md TEXT;
ALTER TABLE tools ADD COLUMN not_best_for_md TEXT;
ALTER TABLE tools ADD COLUMN limitations_md TEXT;
ALTER TABLE tools ADD COLUMN unknowns_md TEXT;
ALTER TABLE tools ADD COLUMN reviewed_by TEXT;
ALTER TABLE tools ADD COLUMN reviewed_at TEXT;
ALTER TABLE tools ADD COLUMN published_at TEXT;
ALTER TABLE tools ADD COLUMN content_modified_at TEXT;
ALTER TABLE tools ADD COLUMN is_indexable INTEGER NOT NULL DEFAULT 1 CHECK (is_indexable IN (0, 1));

CREATE INDEX IF NOT EXISTS idx_tools_indexable_category
  ON tools(is_published, is_indexable, category_slug, sort_order, name);

CREATE TABLE IF NOT EXISTS url_redirects (
  source_path TEXT PRIMARY KEY,
  destination_path TEXT,
  status_code INTEGER NOT NULL DEFAULT 301 CHECK (status_code IN (301, 308, 410)),
  is_active INTEGER NOT NULL DEFAULT 1 CHECK (is_active IN (0, 1)),
  note TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CHECK (
    (status_code = 410 AND destination_path IS NULL)
    OR (status_code IN (301, 308) AND destination_path IS NOT NULL)
  )
);

CREATE INDEX IF NOT EXISTS idx_url_redirects_active_source
  ON url_redirects(is_active, source_path);
