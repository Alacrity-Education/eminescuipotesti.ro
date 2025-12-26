import * as migration_20251220_143729 from './20251220_143729';
import * as migration_20251225_132755 from './20251225_132755';
import * as migration_20251226_133252 from './20251226_133252';

export const migrations = [
  {
    up: migration_20251220_143729.up,
    down: migration_20251220_143729.down,
    name: '20251220_143729',
  },
  {
    up: migration_20251225_132755.up,
    down: migration_20251225_132755.down,
    name: '20251225_132755',
  },
  {
    up: migration_20251226_133252.up,
    down: migration_20251226_133252.down,
    name: '20251226_133252'
  },
];
