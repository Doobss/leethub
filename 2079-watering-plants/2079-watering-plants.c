



int wateringPlants(int* plants, int number_of_plants, int capacity) {

  int current_water = capacity;
  int current_plant = 0;
  int steps_taken = 0;
  while (number_of_plants > current_plant) 
  {
    if (current_water >= *(plants + current_plant)) {
      current_water -= *(plants + current_plant);
      steps_taken++;
      current_plant++;
    } else {
      current_water = capacity - *(plants + current_plant);
      steps_taken += ((2 * current_plant) + 1);
      current_plant++;
    }
  }
  return steps_taken;
}