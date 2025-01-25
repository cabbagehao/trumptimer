const ANIMAL_AVATARS = [
  'https://api.dicebear.com/7.x/bottts/svg?seed=cat',
  'https://api.dicebear.com/7.x/bottts/svg?seed=dog',
  'https://api.dicebear.com/7.x/bottts/svg?seed=fox',
  'https://api.dicebear.com/7.x/bottts/svg?seed=panda',
  'https://api.dicebear.com/7.x/bottts/svg?seed=bear',
  'https://api.dicebear.com/7.x/bottts/svg?seed=tiger',
  'https://api.dicebear.com/7.x/bottts/svg?seed=lion',
  'https://api.dicebear.com/7.x/bottts/svg?seed=elephant',
  'https://api.dicebear.com/7.x/bottts/svg?seed=penguin',
  'https://api.dicebear.com/7.x/bottts/svg?seed=koala',
  'https://api.dicebear.com/7.x/bottts/svg?seed=rabbit',
  'https://api.dicebear.com/7.x/bottts/svg?seed=monkey',
  'https://api.dicebear.com/7.x/bottts/svg?seed=giraffe',
  'https://api.dicebear.com/7.x/bottts/svg?seed=zebra',
  'https://api.dicebear.com/7.x/bottts/svg?seed=owl',
  'https://api.dicebear.com/7.x/bottts/svg?seed=dolphin',
  'https://api.dicebear.com/7.x/bottts/svg?seed=turtle',
  'https://api.dicebear.com/7.x/bottts/svg?seed=hamster',
  'https://api.dicebear.com/7.x/bottts/svg?seed=raccoon',
  'https://api.dicebear.com/7.x/bottts/svg?seed=squirrel',
];

export function getRandomAnimalAvatar(): string {
  const randomIndex = Math.floor(Math.random() * ANIMAL_AVATARS.length);
  return ANIMAL_AVATARS[randomIndex];
}