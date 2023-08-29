export type RootStackParamList = {
  //Drawer Navigator nested in Native Stack Navigator
  Drawer: undefined;
  Categories: undefined;
  Favorites: undefined;

  //The rest in Native Stack Navigator
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };

  // Add other screen names and their corresponding parameter types if needed
};
