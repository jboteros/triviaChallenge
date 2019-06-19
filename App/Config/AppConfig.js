// Simple React Native specific changes

// import "../I18n/I18n";

export default {
  _userData: null,
  _appUserStatistics: null,
  _subscription: null,
  _articles: null,
  _workouts: null,
  _challenge: null,
  _nutritionSchedule: null,

  trainingPlace: {
    gym: 0,
    house: 1,
    outdor: 2
  },

  trainingEffort: {
    veryLow: 0,
    low: 1,
    middle: 2,
    high: 3,
    veryHigh: 4
  },

  socialFeedType: {
    0: 'Workout',
    1: 'Challenge',
    2: 'Recipe',
    3: 'Article'
  },

  bodyFocus: {
    0: 'Todo El Cuerpo',
    1: 'Tronco Superior',
    2: 'Tronco Inferior',
  },

  level: {
    0: 'Principiante',
    1: 'Avanzado',
    2: 'Atleta',
  },
  somatotipes: {
    ectomorph: 0,
    mesomorph: 1,
    endomorph: 2
  },

  somatotipesIndex: {
    0: 'ectomorph',
    1: 'mesomorph',
    2: 'endomorph'
  },

  somatotipesIndexEs: {
    0: 'ectomorfo',
    1: 'mesomorfo',
    2: 'endomorfo'
  },

  // font scaling override - RN default is on
  allowTextFontScaling: true,
  updateType: null,
  updateValue: null,
  updateFacebook: null,
  updateGoogle: null,
  updateSocialtype: null,

  selectedArticle: null,

  isFavorite: false,
  // //LoadApp
  // subscriptionsLoaded: false,
  // articlesLoaded: false,
  // //EndLoadApp
  urlPicGoogle: null,
  //chats
  getConversationTalkId: null,
  talkType: null,
  chatAdminName: null,
  newMessage: null,
  chatCoachId: null,
  chatNutritionistId: null,
  chatUserToken: null,
  OneSignalDevice: null,

  promotionalCode: null,
  subscriptionPaymentMethod: null,

  purshaseProductId: null,
  purshaseTypeId: null,
  purshaseTypeName: null,
  transactionReceipt: null,

  purshaseTitle: null,
  purshaseLocalizedPrice: null,
  purshaseDescription: null,

  isPremium: false,

  isCicle: false,

  selectCategory: null,
  selectCategoryName: null,
  selectCategoryObjetive: null,

  selectMuscleGroup: null,
  selectMuscleGroupName: null,
  selectedWorkoutId: null,
  selectedChallengeId: null,

  userStatsMedalsUnlocked: null,
  userStatsPostersUnlocked: null,
  userStatsExperienceLevel: null,

  selectedNutritionObjetive: null,
  selectedNutritionSomatotipe: null,
  selecteNutritionRecipeId: null,
  selecteNutritionDay: null,
  selecteNutritionType: null,

  planConfiguration: null,

  selectLevelTraining: 0,

  trainingPlanId: null,

  condeOne: '001',
  codeTrhee: '003',
  codeSix: '006',
  codeTwelve: '012',

  condeOneName: 'mensual',
  codeTrheeName: 'trimestral',
  codeSixName: 'semestral',
  codeTwelveName: 'anual',

  premiumObjetivePlan: null,

  condeOneID: 1,
  codeTrheeID: 2,
  codeSixID: 3,
  codeTwelveID: 4,

  postWorkout: {
    contentType: '',
    workoutId: '',
    startDate: '',
    caloriesBurned: '',
    trainedSeconds: '',
    trainingPlace: '',
    effortLevel: '',
    levelSelected: ''
  },

  interactions: {
    interactionsMethod: {
      set: 'set',
      delete: 'delete'
    },
    interactionType: {
      like: 'like',
      share: 'share',
      favorite: 'favorite'
    },
    contentType: {
      workoutObjective: 'workoutObjective',
      workoutTarget: 'workoutTarget',
      workout: 'workout',
      challenge: 'challenge',
      recipe: 'recipe',
      exercise: 'exercise',
      article: 'article',
      workoutsFavorites: 'workoutsFavorites'
    },
    workoutObjectiveName: {
      rtg: 'ORUX RTG',
      hipertrofia: 'ORUX HIPERTROFIA',
      atleta: 'ORUX ATLETA',
      reto: 'RETO',
      twentyOne: '21 Días de Adaptación',
      thirtyOne: '31 Días de Cardioabdomen',
      noImplements: 'ORUX Sin Implementos'
    }
  }
};
