export const categoryDefaults = [
  { categoryName: 'Arms' },
  { categoryName: 'Legs' },
  { categoryName: 'Cardio' },
  { categoryName: 'Rest' }
];

export const excerciseDefaults = [
  {
    categoryName: 'Arms',
    subCategories: ['Biceps'],
    exerciseName: 'Bicep Curls with Dumbells',
    difficultyLevel: 'Beginner',
    description: `Hold two dumbbells, the arms are streched, the hands are on your side, the palms face inwards. Bend the arms and bring the weight with a fast movement up. 
    At the same time, rotate your arms by 90 degrees at the very beginning of the movement. At the highest point, rotate a little the weights further outwards. Without a pause, bring them down, slowly. 
    Don't allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move (pay attention to the elbows).`,
    tips: `Fluid movements with no pauses at the top or bottom, don't swing the arms`,
    reps: '5-15',
    sets: '3',
    weight: '5-10 lb'
  },
  {
    categoryName: 'Arms',
    subCategories: ['Biceps'],
    exerciseName: 'Bicep Curls with Barbell',
    difficultyLevel: 'Beginner',
    description: `Hold the Barbell shoulder-wide, the back is straight, the shoulders slightly back, the arms are streched. 
    Bend the arms, bringing the weight up, with a fast movement. Without pausing, let down the bar with a slow and controlled movement.
    Don't allow your body to swing during the exercise, all work is done by the biceps, which are the only mucles that should move (pay attention to the elbows).`,
    tips:
      'Fluid movements with no pauses at the top or bottom, keep your upper body straight and tight',
    reps: '5-15',
    sets: '3',
    weight: '10 lb'
  },
  {
    categoryName: 'Arms',
    subCategories: ['Triceps', 'Chest', 'Abs'],
    exerciseName: 'Dips',
    difficultyLevel: 'Beginner',
    description: `Hold onto the bars at a narrow place (if they are not parallel) and press yourself up, but don't stretch the arms completely, so the muscles stay during the whole exercise under tension. 
    Now bend the arms and go down as much as you can, keeping the elbows always pointing back, At this point, you can make a short pause before repeating the movement.`,
    tips:
      'Keep your core tight, be careful not too dip down too far, make sure to come up all the way.',
    reps: '5-12',
    sets: '3',
    weight: 'Bodyweight'
  },
  {
    categoryName: 'Arms',
    subCategories: ['Biceps', 'Triceps', 'Chest', 'Abs'],
    exerciseName: 'Wall push-ups',
    difficultyLevel: 'Beginner',
    description: `Face a wall, standing a little farther than arm’s length away, feet shoulder-width apart.
    Lean your body forward and put your palms flat against the wall at shoulder height and shoulder-width apart.
    Slowly breathe in as you bend your elbows and lower your upper body toward the wall in a slow, controlled motion. Keep your feet flat on the floor.
    Hold the position for 1 second.
    Breathe out and slowly push yourself back until your arms are straight.`,
    tips:
      'Keep your body straight, keep your core and glutes tight, and go as low as you can.',
    reps: '5-12',
    sets: '3',
    weight: 'Bodyweight'
  },
  {
    categoryName: 'Arms',
    subCategories: ['Biceps', 'Triceps', 'Chest', 'Abs'],
    exerciseName: 'Push-ups',
    difficultyLevel: 'Beginner',
    description: `Start with your body streched, your hands are shoulder-wide appart on the ground. Push yourself off the ground till you strech your arms. 
    The back is always straight and as well as the neck (always look to the ground). Lower yourself to the initial position and repeat.`,
    tips:
      'Keep your body straight, keep your core and glutes tight, and go as low as you can.',
    reps: '5-12',
    sets: '3',
    weight: 'Bodyweight'
  },
  {
    categoryName: 'Legs',
    subCategories: ['Quads', 'Glutes'],
    exerciseName: 'Wall-squats',
    difficultyLevel: 'Beginner',
    description: `Find a nice flat piece of wall and stand with your back leaning against the wall. 
    Slowly slide down the wall while moving your feet away from it, until your thighs are parallel to the ground and both your knees and your hips are bent at a 90° angle. Cross your arms in front of your chest and hold this position for 30 seconds.`,
    tips: 'Keep your core and glutes tight',
    reps: '5-12',
    sets: '3',
    weight: 'Bodyweight'
  },
  {
    categoryName: 'Legs',
    subCategories: ['Quads', 'Glutes'],
    exerciseName: 'Braced Squats',
    difficultyLevel: 'Intermediate',
    description: `Stand with feet slightly wider than shoulder-width apart, while standing as tall as you can.
    Grab a weight plate and hold it out in front of your body with arms straight out. Keep your core tight and stand with a natural arch in your back.   
    Now, push hips back and bend knees down into a squat as far as you can. Hold for a few moments and bring yourself back up to the starting position.`,
    tips: 'Keep your core and glutes tight.',
    reps: '5-12',
    sets: '3',
    weight: '5-20 lb'
  },
  {
    categoryName: 'Legs',
    subCategories: ['Glutes'],
    exerciseName: 'Glute Bridge',
    difficultyLevel: 'Beginner',
    description: `Lie on you back with your hips and knees flexed, feet on the ground. From this position, raise your butt off of the ground to a height where your body makes a straight line from your knees to your shoulders. 
    To make the exercise more intense, you can add weight by letting a barbell rest on your hips as you complete the motion, or you can put your feet on a slightly higher surface such as a step or a bench.`,
    tips: 'Keep your core and glutes tight.',
    reps: '12-16',
    sets: '3',
    weight: 'Bodyweight'
  }
];
