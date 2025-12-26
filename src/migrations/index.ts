import * as migration_20251220_143729 from './20251220_143729';
import * as migration_20251225_132755 from './20251225_132755';
import * as migration_20251226_133252 from './20251226_133252';
import * as migration_20251226_145900 from './20251226_145900';
import * as migration_20251226_155253 from './20251226_155253';

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
    name: '20251226_133252',
  },
  {
    up: migration_20251226_145900.up,
    down: migration_20251226_145900.down,
    name: '20251226_145900',
  },
  {
    up: migration_20251226_155253.up,
    down: migration_20251226_155253.down,
    name: '20251226_155253'
  },
];
