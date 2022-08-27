int step_costs[1001];
void fill() {
  int i = 1001;
  while (i--) step_costs[i] = -1;
}
int* costs;
int end_indx = -1;


int min(int a, int b) {
  return (a >= b) ? b : a;
}


int calc_cost(int start_indx) {
    if (start_indx == -1) return min(calc_cost(start_indx + 1),  calc_cost(start_indx + 2));

    if (step_costs[start_indx] != -1) {
      return step_costs[start_indx];
    }

    step_costs[start_indx] = *(costs + start_indx);
    if (2 >= (end_indx - start_indx)) {
      return *(costs + start_indx);
    }
    step_costs[start_indx] += min(calc_cost(start_indx + 1),  calc_cost(start_indx + 2));
    return step_costs[start_indx];
};

int minCostClimbingStairs(int* cost, int cost_size) {
    costs = cost;
    end_indx = cost_size;
    fill();
    return calc_cost(-1);;
};


