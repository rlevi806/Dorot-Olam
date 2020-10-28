import { Family } from '../family/family';
import { Legacy } from '../legacy/legacy';
import { LifeStory } from '../lifeStory/life-story';
import { PersonalInformation } from '../personalInformation/personal-information';

export class Record {
    personalInformation:PersonalInformation;
    lifeStory:LifeStory;
    family:Family;
    legacy:Legacy;
}
