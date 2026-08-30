ALTER TABLE tools ADD COLUMN classification TEXT CHECK (
  classification IN ('agent-native', 'agent-enabling', 'agent-internet-protocol')
);
