#include <iostream>
#include <string>

using namespace std;

int main() {

	int iter, sum = 0, accumulation = 0;

	string res;
	
	cin >> iter;

	for (int i = 0; i < iter; i++)
	{
		cin >> res;

		for (int j = 0; j < res.length(); j++)
		{
			if (res[j]=='O')
			{
				accumulation += 1;
				sum += accumulation;
			}

			if (res[j] == 'X')
			{
				accumulation = 0;
				sum += accumulation;
			}
		}
		cout << sum << endl;
		sum = 0, accumulation = 0;
	}
}