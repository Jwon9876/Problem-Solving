#include <iostream>
#include <climits>

using namespace std;

void swap(int* a, int* b) {
	int temp = *a;
	*a = *b;
	*b = temp;
}

int main() {
	int count, min, index;
	cin >> count;

	int* array_a = new int[count];

	for (int i = 0; i < count; i++)
	{
		cin >> array_a[i];
	}
	for (int i = 0; i < count; i++)
	{
		min = INT_MAX;
		for (int j = i; j < count; j++)
		{
			if (min > array_a[j]) {
				min = array_a[j];
				index = j;
			}
		}
		swap(&array_a[i], &array_a[index]);
	}
	for (int j = 1; j < count; j++)
	{
		array_a[j] = array_a[j - 1] + array_a[j];
	}
	for (int j = 1; j < count; j++)
	{
		array_a[j] = array_a[j - 1] + array_a[j];
	}
	cout << array_a[count-1];


}
