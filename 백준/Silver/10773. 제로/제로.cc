#include <iostream>
#include <vector>

using namespace std;

int main() {

	int iter, num, sum = 0;
	vector <int> v;

	cin >> iter;

	for (int i = 0; i < iter; i++)
	{
		cin >> num;

		if (num!=0)
		{
			v.push_back(num);
		}

		if (num==0)
		{
			v.pop_back();
		}
	}

	for (int i = 0; i < v.size(); i++)
	{
		sum += v[i];
	}

	cout << sum;
}