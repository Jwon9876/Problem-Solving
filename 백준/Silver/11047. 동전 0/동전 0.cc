#include <iostream>
#include <vector>

using namespace std;

int main() {
	int n, sum, limit;
	int count = 0;
	
	cin >> n >> sum;

	vector <int> v(n);

	for (int i = 0; i < n; i++){
		cin >> v[i];
	}

	limit = n - 1;

	while (limit!=-1)
	{
		if (v[limit]<=sum)
		{
			count += sum / v[limit];
			sum = sum % v[limit];
		}
		else
		{
			limit--;
		}
	}

	cout << count;
}