#include <iostream>

using namespace std;

int main() {

	int count = 5, sum = 0, num;

	while (count)
	{
		count--;

		cin >> num;

		if (num < 40)
		{
			sum += 40;
		}

		else
		{
			sum += num;
		}
	}

	cout << sum / 5;
}