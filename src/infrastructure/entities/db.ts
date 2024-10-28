// import * as repositories from './*{.ts}';

import { Categories } from './category.entity';
import { Devices } from './device.entity';
import { Exercises } from './exercise.entity';
import { Profiles } from './profile.entity';
import { Routines } from './routine.entity';
import { Supports } from './support.entity';
import { Users } from './user.entity';
import { UserPreferences } from './userpreference.entity';
import { UserPreferencesResponses } from './userpreferencesresponse.entity';

export default [
  Users,
  Devices,
  Exercises,
  Profiles,
  Routines,
  Categories,
  UserPreferences,
  UserPreferencesResponses,
  Supports,
];
