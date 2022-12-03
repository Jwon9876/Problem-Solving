#include <iostream>
#include <vector>

using namespace std;

int main() {

	vector <int> v;
	int n;
	cin >> n;

	string order;
	int num;

	for (int i = 0; i < n; i++)
	{
		cin >> order;

		if (order == "push")
		{
			cin >> num;
			v.push_back(num);
		}

		else if (order == "top")
		{
			if (v.size())
			{
				cout << v[v.size() - 1] << endl;
			}

			else
			{
				cout << "-1" << endl;
			}

		}

		else if (order == "size")
		{

			if (v.size())
			{
				cout << v.size() << endl;
			}

			else
			{
				cout << "0" << endl;
			}
		}

		else if (order == "empty")
		{
			if (v.empty())
			{
				cout << "1" << endl;
			}

			else
			{
				cout << "0" << endl;
			}
		}

		else if (order == "pop")
		{
			if (v.size())
			{
				cout << v[v.size() - 1] << endl;
				v.pop_back();
			}
			else
			{
				cout << "-1" << endl;
			}
		}
	}
}