#include <iostream>


using namespace std;

int main() {

	int int_min = 1000000;
	int int_max = -1000000;

	int count;
	cin >> count;

	int* num_arr = new int[count];

	for (int i = 0; i < count; i++)
	{
		cin >> num_arr[i];
	}

	for (int i = 0; i < count; i++)
	{
		if (num_arr[i]>int_max)
		{
			int_max = num_arr[i];
		}

		if (num_arr[i] < int_min)
		{
			int_min = num_arr[i];
		}
	}

	cout << int_min << " " <<int_max << endl;

}