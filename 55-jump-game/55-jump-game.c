#define MAX_LENGTH 10001
int store[MAX_LENGTH];
int total_distance;
int last_indx;
int* jump_distances;

void reset_store() {
    int i = total_distance;
    while (i--) store[i] = -1;
}

int can_jump_to(int from_indx, int to_indx) {
    return jump_distances[from_indx] >= (to_indx - from_indx);
}

int find_path(int indx) {
    if (indx > last_indx || 0 > indx) return 0;
    if (store[indx] !=  - 1) return store[indx];
    int jump = jump_distances[indx];
    int found_path = can_jump_to(indx, last_indx);
    while (jump && !found_path) {
        found_path = find_path(indx + jump);
        jump--;
    }
    store[indx] = found_path;
    return found_path;
}
bool canJump(int* nums, int numsSize) {
    if (2 > numsSize) return numsSize;
    total_distance = numsSize;
    last_indx = total_distance - 1;
    jump_distances = nums;
    reset_store();
    return find_path(0);
}