-- Optional, explicitly supplied announcement tag; independent of GitHub attribution.
-- Existing rows remain NULL (no announcement tag). Apply before the content publisher writes it.
ALTER TABLE tools ADD COLUMN announcement_x_handle TEXT;
